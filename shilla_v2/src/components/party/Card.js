import React from 'react';

const Card = ({ title, imgSrc, mainText, subText, location, area, size, capacities, buttonId }) => {
  return (
    <div className="card">
      <strong>{title}</strong>
      <div className="img-wrap">
        <img src={imgSrc} alt={title} />
      </div>
      <div className="txt-wrap">
        <p className="main">{mainText}</p>
        <p className="sub">{subText}</p>
      </div>
      <ul className="info">
        <li className="list">
          <h4>위치</h4>
          <p className="txt">{location}</p>
        </li>
        <li className="list">
          <h4>면적</h4>
          <p className="txt" dangerouslySetInnerHTML={{ __html: area }}></p>
        </li>
        <li className="list">
          <h4>Size</h4>
          <p className="txt" dangerouslySetInnerHTML={{ __html: size }}></p>
        </li>
        <li className="list col">
          <h4 className="mb-10">수용인원</h4>
          <ul className="flex">
            {capacities.map((capacity, index) => (
              <li key={index}>
                <img src={capacity.icon} alt={capacity.type} />
                <p>
                  {capacity.type}
                  <br />
                  {capacity.number}
                </p>
              </li>
            ))}
          </ul>
        </li>
      </ul>
      <div className="btn-wrap btn-250">
        <button type="button" className="btn btn-01" data-lybtn={buttonId}>
          도면보기
        </button>
      </div>
    </div>
  );
};

export default Card;
