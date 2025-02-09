import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../common/Header';
import Footer from '../common/Footer';
import DiningItem from './DiningItem';

import "../../scss/common.scss";
import "../../scss/header.scss";
import "../../scss/footer.scss";
import "../../scss/sub-list.scss";
import "../../scss/sub-detail.scss";

const diningItems1 = [
  { category: "한식", link: "/restaurant", imgSrc: "../../img/sub/dining-1-01.jpg", name: "라연", desc: "전통과 품격의 한식 레스토랑", position: "위치 : 23층", tel: "예약 및 문의 : 02.2230.3367" },
  { category: "프렌치", link: "/restaurant2", imgSrc: "../../img/sub/dining-2-01.jpg", name: "콘티넨탈", desc: "전통 프렌치 정찬과 와인", position: "위치 : 23층", tel: "예약 및 문의 : 02.2230.3369" },
  { category: "일식", link: "/restaurant3", imgSrc: "../../img/sub/dining-3-01.jpg", name: "아리아께", desc: "오감 만족의 정통 일식당", position: "위치 : 2층", tel: "예약 및 문의 : 02.2230.3356" },
  { category: "중식", link: "/restaurant4", imgSrc: "../../img/sub/dining-4-01.jpg", name: "팔선", desc: "중식 명가의 품격", position: "위치 : 2층", tel: "예약 및 문의 : 02.2230.3366" },
];

const diningItems2 = [
  { category: "올 데이 다이닝", link: "/restaurant5", imgSrc: "../../img/sub/dining-5-01.jpg", name: "더 파크뷰", desc: "자연을 닮은 레스토랑", position: "위치 : 1층", tel: "예약 및 문의 : 02.2230.3374" },
  { category: "라운지 & 바", link: "/lounge", imgSrc: "../../img/sub/dining-6-01.jpg", name: "더 라이브러리", desc: "신개념의 고품격 사교 공간", position: "위치 : 1층", tel: "예약 및 문의 : 02.2230.3388" },
  { category: "라운지 & 바", link: "/lounge2", imgSrc: "../../img/sub/dining-7-01.jpg", name: "더 디스틸러스 라이브러리", desc: "진귀한 고숙성 위스키 경험", position: "위치 : 1층", tel: "예약 및 문의 : 02.2230.3389" },
  { category: "베이커리", link: "/bakery", imgSrc: "../../img/sub/dining-8-01.jpg", name: "패스트리 부티크", desc: "명품 베이커리의 진수", position: "위치 : 1층", tel: "예약 및 문의 : 02.2230.3377" },
];

const Dining = () => {
  return (
    <>
      <Header />
      <div className="container">
        <div className="center">
            <div className="sub-title column">
                <div>
                    <h2>참 미식으로의 초대</h2>
                    <p className="sub-desc">정통을 뛰어넘는 하이엔드 스타일의 다이닝, 라운지에서 맛보는 스위트 트리트, 눈을 행복하게 하는 감각적인 패스트리까지</p>
                </div>
                <ul className="location">
                    <li><Link to="/">홈</Link></li>
                    <li><Link to="#self">다이닝</Link></li>
                </ul>
            </div>
          <div className="sub-list-wrap">
            <ul className="sub-list">
              {diningItems1.map((item, index) => (
                <DiningItem key={index} {...item} />
              ))}
            </ul>
            <ul className="sub-list">
              {diningItems2.map((item, index) => (
                <DiningItem key={index} {...item} />
              ))}
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Dining;
