import React from 'react';
import { Link } from 'react-router-dom';

const Section = ({ title, description, items, columns, sectionClass = '', sectionId = '' }) => {
  return (
    <>
      <div className={`sub-title ${sectionClass}`} id={sectionId}>
        <div>
          <h2>{title}</h2>
          <p className="sub-desc">{description}</p>
        </div>
      </div>
      <ul className={`sub-list line-${columns}`}>
        {items.map((item, index) => (
          <li key={index}>
            <h3>{item.title}</h3>
            <Link to={item.link}>
              <div className="img-wrap">
                <img src={item.imgSrc} alt="" />
              </div>
              <p className="view-more">자세히보기</p>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Section;
