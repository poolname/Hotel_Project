import React from 'react';
import { Link } from 'react-router-dom';
import Header from "../common/Header";
import Footer from "../common/Footer";
import Section from './Section';

import "../../scss/common.scss";
import "../../scss/header.scss";
import "../../scss/footer.scss";
import "../../scss/sub-list.scss";
import "../../scss/sub-detail.scss";

const Party = () => {
  const weddingItems = [
    { title: "대연회장", link: "/wedding", imgSrc: "../../img/sub/wd-1-01.jpg" },
    { title: "영빈관", link: "/wedding2", imgSrc: "../../img/sub/wd-2-01.jpg" },
    { title: "웨딩스타일", link: "/wedding3", imgSrc: "../../img/sub/wd-3-01.jpg" },
  ];

  const corporateItems = [
    { title: "대연회장", link: "/corporateParty", imgSrc: "../../img/sub/gbRoom-1-01.jpg" },
    { title: "영빈관", link: "/corporateParty2", imgSrc: "../../img/sub/gbRoom-2.jpg" },
    { title: "중 · 소형 연회장", link: "/corporateParty3", imgSrc: "../../img/sub/gbRoom-3.jpg" },
  ];

  const familyItems = [
    { title: "가족연회장", link: "/familyParty", imgSrc: "../../img/sub/cbInfo-1-01.jpg" },
    { title: "중 · 소형 연회장", link: "/familyParty2", imgSrc: "../../img/sub/cbInfo-2-01.jpg" },
  ];

  return (
    <>
      <Header />
      <div className="container">
        <div className="center">
          <div className="sub-title column">
            <div>
              <h2>웨딩 & 연회</h2>
              <p className="sub-desc">
                세심한 인테리어와 품격 높은 서비스를 제공하여 인생의 중요한 순간을 최고의 기억으로 만들어 드립니다.
              </p>
            </div>
            <ul className="location">
              <li><Link to="/">홈</Link></li>
              <li><Link to="/party">웨딩 & 연회</Link></li>
            </ul>
          </div>

          <div className="sub-list-wrap">
            <Section
              title="웨딩"
              description="행복한 순간, 그 느낌을 오래 간직하게 해줄 기품있는 인테리어와 신랑 신부를 위한 세심한 배려로 영원한 미래를 약속하는 최고의 장소입니다."
              items={weddingItems}
              columns={3}
              sectionClass="pt-10 first bd-none"
            />

            <Section
              title="기업연회"
              description="2012 서울 핵안보정상회의 특별 만찬, G20 정상 배우자 만참, 88'서울 올림픽 IOC 총회, APEC, 남북 장관급 회담 등 주요 국제 행사를 대거 유치해 온 서울신라호텔은 성공적인 컨퍼런스를 진행하기 위해 첨단 시설과 품격높은 서비스를 제공하고 있습니다."
              items={corporateItems}
              columns={3}
              sectionClass="first"
              sectionId="company"
            />

            <Section
              title="가족연회"
              description="품격높은 파티를 끊임없이 개최해오고 있는 서울신라호텔은 상상력이 돋보이는 아이디어와 고급스러운 진행으로 어떤 테마라도 완벽히 연출하여 드립니다."
              items={familyItems}
              columns={2}
              sectionClass="first"
              sectionId="family"
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Party;
