import React from 'react';
import { Link } from 'react-router-dom';

const DiningItem = ({ category, link, imgSrc, name, desc, position, tel }) => {
  return (
    <li>
      <h3>{category}</h3>
      <Link to={link}>
        <div className="img-wrap">
          <img src={imgSrc} alt={name} />
        </div>
        <div className="txt-wrap">
          <h4>{name}</h4>
          <p className="desc">{desc}</p>
          <p className="position">{position}</p>
          <p className="tel">{tel}</p>
        </div>
        <p className="view-more">자세히보기</p>
      </Link>
    </li>
  );
};

export default DiningItem;
