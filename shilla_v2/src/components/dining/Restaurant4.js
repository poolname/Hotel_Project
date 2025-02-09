import React, { useEffect } from 'react';
import Header from '../common/Header';
import Tab from './Tab';
import SubTitle from './SubTitle';
import Gallery from './Gallery';
import Introduction from './Introduction';
import InfoList from './InfoList';
import Guide from './Guide';
import Footer from '../common/Footer';

import "../../scss/common.scss"
import "../../scss/header.scss"
import "../../scss/footer.scss"
import "../../scss/sub-list.scss"
import "../../scss/sub-detail.scss"

const Restaurant4 = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

    const galleryImages = [
      "../../img/sub/dining-4-01.jpg",
      "../../img/sub/dining-4-02.jpg",
      "../../img/sub/dining-4-03.jpg",
      "../../img/sub/dining-4-04.jpg",
      "../../img/sub/dining-4-05.jpg",
      "../../img/sub/dining-4-06.jpg",
    ];
    
    const introData = {
      title: "중식 명가의 품격",
      restaurantName: "팔선 (八仙)",
      paragraphs: [
        {
          strong: "동양적 감성과 현대미의 공존",
          className: "txt small",
          text: "동양적인 감성과 현대적인 느낌이 고급스럽게 어우러진 실내 인테리어는 중국의 상류충 저택 다이닝룸을 방문한 것과 같은 편안하고 품격있는 분위기를 연출하여 들어서는 입구부터 고객의 마음을 사로잡습니다."
        },
        {
          strong: "정통 중식의 진수",
          className: "txt small",
          text: `팔선의 깊은 전통과 꾸준한 명성은 중국 본토 최고의 맛을 그대로 전해드립니다.
                북경과 광둥 지역 출신의 조리사가 직접 선보이는 정통 중식 요리는 그 맛과 정성으로 다양한 취향을 가진 고객의 눈과 입을 만족시켜 드립니다.`
        },
        {
          strong: "갤러리 레스토랑으로서의 팔선",
          className: "txt small",
          text: ` 팔선은 세계적인 작가들의 예술적 작품을 감상할 수 있는 갤러리 레스토랑입니다.
                 동양화가 서세옥 화백과 스페인을 대표하는 조각가이자 판화가인 에두아르도 칠리다의 작품, 백자의 기품과 정갈한 아름다운으로 뉴욕에서도 인기를 구가하고 있는 박영숙 도예가의 작품 등이 전시되어 있어,
                 미술품 애호가들이 작품을 보기 위해 일부러 팔선을 찾기도 합니다. 이밖에 임충섭 등 유명 작가들의 작품을 통해 맛있는 공간에 멋있는 숨결을 불어넣고 있습니다.`
        },
        {
          strong: "품격 높은 사교의 공간",
          className: "txt small",
          text: ` 독립된 공간에서 아늑하고 편안한 분위기를 즐기기 원하신다면, 넓고 다양한 크기의 별실을 제안합니다.
                 소규모 가족행사나 중·대형 연회 및 비지니스 모임에 적합하며 소중한 모임의 품격과 분위기를 높여 드립니다.`
        }
      ]
    };
    
    const infoData = [
      { title: "위치", content: "서울신라호텔 2층" },
      {
        title: "운영시간",
        content: `Lunch : 12:00 ~ 14:30 (Last Order : 13:30)
                  Dinner : 17:30 ~ 21:30 (Last Order : 20:30)`,
      },
      { title: "예약 및 문의", content: "Tel&#41; 02-2230-3366" },
      {
        title: "좌석수",
        content: `총 156석
                  룸 11실 (최대 22명 수용 가능하며, 이용 시 별도 요금이 부과됩니다.)`,
      },
    ];
    
    // 가이드 데이터
    const guideData = {
      reservationInfo: `예약 접수 시작일은 '2개월 전 1일' 입니다.<br>
      예&#41; 7월 예약 : 5월 1일 9시부터 가능<br>`,
      
      notice: {
        main: `2024년 7월 12일부로 예약 보증금이 변경되었습니다.<br>
              노쇼에 따른 고객 불편을 방지하고자 보증금 사전결제를 진행하고 있으며 신라리워즈 회원 가입 및 로그인 후 편리하게 온라인 예약 서비스를 이용하시기 바랍니다.`,
        deposit: `[예약 보증금 안내]<br>예약 시 인원 별 1만원의 예약금이 발생합니다.`,
        cancellation: [
          `[예약 취소 / 변경 및 노쇼 안내]`,
          `예약일 2일 전까지는 예약 보증금의 100%가 환불됩니다.`,
          `예약일 1일 전까지 취소 시 예약 보증금의 50%가 환불되며 예약일 당일 취소 또는 노쇼 시 예약 보증금은 환불되지 않습니다.`,
          `예약 변경을 원하실 경우, 기존 예약 취소 후 신규 예약을 진행해 주시기 바랍니다.<br> (* 별실 별도 안내문 참조)`,
        ],
      },
    };
    
      return (
          <>
          <Header/>
          <div className="container">
              <div className="center">
                  <div className="depth3-tab-wrap">
                      <Tab/>
                      <div className="tab-contents">
                          <div className="tab-cont cont3 on">
                              <SubTitle/>
                              <Gallery propImages={galleryImages} />
                              <div className="context">
                                  <Introduction {...introData} />
                                  <InfoList propInfo={infoData} />
                                  <Guide {...guideData} />
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          <Footer/>
          </>
      )
}

export default Restaurant4;