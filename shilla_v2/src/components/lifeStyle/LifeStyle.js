import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../common/Header';
import Footer from '../common/Footer';
import Section from './Section';

import "../../scss/common.scss";
import "../../scss/header.scss";
import "../../scss/footer.scss";
import "../../scss/sub-list.scss";
import "../../scss/sub-detail.scss";

const LifeStyle = () => {
  const outdoorItems = [
    { category: "야외수영장", link: "/outdoorPool", imgSrc: "../../img/sub/life-01.jpg", name: "어번 아일랜드", desc: "탁 트인 전망과 편안한 휴식을 취할 수 있는 완벽한 장소를 경험하실 수 있습니다." },
    { link: "/outdoorPool2", imgSrc: "../../img/sub/life-02.jpg", name: "카바나", desc: "프라이빗하고 여유로운 휴식과 함께 낭만적인 시간을 만들어 드립니다." },
  ];

  const fitnessItems = [
    { category: "피트니스", link: "/fitness", imgSrc: "../../img/sub/life-03.jpg", name: "실내 수영장", desc: "수영과 휴식을 한번에!" },
    { link: "/fitness2", imgSrc: "../../img/sub/life-04.jpg", name: "실내 체육관", desc: "체력 관리를 위한 기능별 공간" },
    { link: "/fitness3", imgSrc: "../../img/sub/life-05.jpg", name: "실내 골프장", desc: "실전 라운딩과 같은 공간" },
    { link: "/fitness4", imgSrc: "../../img/sub/life-06.jpg", name: "사우나", desc: "여유로운 공간의 실내 사우나" },
  ];

  const walkingItems = [
    { category: "산책로", link: "/walkingTrails", imgSrc: "../../img/sub/life-07.jpg", name: "서울신라호텔만의 고풍스러운 성곽길", desc: "아름다운 경관과 맑은 공기가 가득한 휴식 장소" },
    { link: "/jogging", imgSrc: "../../img/sub/life-08.jpg", name: "조깅코스", desc: "서울신라호텔에서 남산으로 이어지는 조깅코스" },
  ];

  const shoppingItems = [
    { category: "쇼핑", link: "/shopping", imgSrc: "../../img/sub/life-09.jpg", name: "아케이드", desc: "서울신라호텔만의 라이프스타일이 살아 숨쉬는 공간입니다." },
    { link: "/shopping2", imgSrc: "../../img/sub/life-10.jpg", name: "신라면세점", desc: "신라면세점은 최고의 면세쇼핑 서비스를 제공하고 있습니다." },
  ];

  return (
    <>
      <Header />
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
              <li><Link to="/lifestyle">라이프스타일</Link></li>
            </ul>
          </div>

          <div className="sub-list-wrap">
            <Section listClass="line-2 max-height" items={outdoorItems} />
            <Section listClass="" items={fitnessItems} />
            <Section listClass="line-2" items={walkingItems} />
            <Section listClass="line-2" items={shoppingItems} />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default LifeStyle;
