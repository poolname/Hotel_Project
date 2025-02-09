import React from 'react';
import { Link } from 'react-router-dom';

const Section = ({ listClass, items }) => {
  return (
    <ul className={`sub-list ${listClass}`}>
      {items.map((item, index) => (
        <li key={index}>
          {item.category && <h3>{item.category}</h3>}
          <Link to={item.link}>
            <div className="img-wrap">
              <img src={item.imgSrc} alt={item.name} />
            </div>
            <div className="txt-wrap">
              <h4>{item.name}</h4>
              <p className="desc">{item.desc}</p>
            </div>
            <p className="view-more">자세히보기</p>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Section;
