import React from 'react';
import { Link } from 'react-router-dom';

const Contents = ({ sections }) => {
  return (
    <div className="container">
      <div className="center">
        <div className="sub-title column">
          <div>
            <h2>품격이 다른 편안함으로 당신의 휴식을 책임집니다.</h2>
            <p className="sub-desc">
              넓은 야외 테라스와 아름다운 옥상 정원(Rooftop Garden)에서의 휴식은 물론, 다양한 문화 프로그램과 개인별 취미를 즐기실 수 있습니다.
            </p>
          </div>
          <ul className="location">
            <li><Link to="/">홈</Link></li>
            <li><Link to="#self">라이프스타일</Link></li>
          </ul>
        </div>

        <div className="sub-list-wrap">
          {sections.map((section, index) => (
            <ul key={index} className="sub-list line-2 max-height">
              <h3>{section.heading}</h3>
              {section.items.map((item, i) => (
                <li key={i}>
                  <Link to={item.link}>
                    <div className="img-wrap">
                      <img src={item.imgSrc} alt={item.title} />
                    </div>
                    <div className="txt-wrap">
                      <h4>{item.title}</h4>
                      <p className="desc">{item.desc}</p>
                    </div>
                    <p className="view-more">자세히보기</p>
                  </Link>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contents;
