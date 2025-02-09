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

const Restaurant3 = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

    const galleryImages = [
      "../../img/sub/dining-3-01.jpg",
      "../../img/sub/dining-3-02.jpg",
      "../../img/sub/dining-3-03.jpg",
      "../../img/sub/dining-3-04.jpg",
      "../../img/sub/dining-3-05.jpg",
      "../../img/sub/dining-3-06.jpg",
    ];
    
    const introData = {
      title: "五感을 만족시키는 정통 일식당",
      restaurantName: "아리아께",
      paragraphs: [
        {
          strong: null,
          className: "txt",
          text: "모던함이 느껴지는 현대적 감각의 레스토랑으로 청정해의 해산물과 직접 엄선한 최고급 식재료로 정통 일식의 진수를 선보입니다."
        },
        {
          strong: "아리아께의 오감만족 스타일",
          className: "txt small",
          text: `일본적 감성과 모던한 감각을 동시에 표현한 Ueki Kanji의 섬세하고 우아한 전통미와 세련된 현대미가 조화를 이루는 공간입니다.\n이와 함께 한국의 감성과 일본의 전통미를 어우르는 Fukuda Noriko의 감각적인 무드 스타일링을 선보입니다.\n오감을 만족시키는 아리아께의 새로운 일식 스타일을 느껴보시기 바랍니다.`
        },
        {
          strong: "최상의 식재료, 銘酒 와의 조우",
          className: "txt small",
          text: `청정해 완도의 엄선된 해산물과 최고급 식재료를 직접 운송해 가장 신선한 상태를 유지합니다.\n계절적 특징을 잘 살린 신선한 메뉴와 기본에 충실한 최상의 일식 요리를 경헙하실 수 있습니다.\n아리아께에서는 일본에서도 구하기 힘든 희소 사케인 Manotsuru,Kikuhime 등 엄선된 37종의 진귀한 프리미엄 사케와 명주를 만나실 수 있습니다.`
        }
      ]
    };
    
    const infoData = [
      { title: "위치", content: "서울신라호텔 2층" },
      {
        title: "운영시간",
        content: `Lunch : 12:00 ~ 14:30 (Last Order : 13:00)
                  Dinner : 17:30 ~ 21:30 (Last Order : 19:30)`,
      },
      { title: "예약 및 문의", content: "Tel&#41; 02-2230-3356" },
      {
        title: "좌석수",
        content: `총 93석
                  룸 5실 (최대 8명 수용 가능하며, 이용 시 별도 요금이 부과됩니다.)`,
      },
    ];
    
    // 가이드 데이터
    const guideData = {
      reservationInfo: `예약 접수 시작일은 '2개월 전 1일' 입니다.<br>
      예&#41; 7월 예약 : 5월 1일 9시부터 가능<br>
      * 스시카운터는 "1개월전 1일"예약오픈 됩니다.`,
      
      notice: {
        main: `2024년 7월 12일부로 예약 보증금이 변경되었습니다.<br>
              노쇼에 따른 고객 불편을 방지하고자 보증금 사전결제를 진행하고 있으며 신라리워즈 회원 가입 및 로그인 후 편리하게 온라인 예약 서비스를 이용하시기 바랍니다.`,
        deposit: `[예약 보증금 안내]<br>예약 시 인원 별 1만원의 예약금이 발생합니다.`,
        cancellation: [
          `[예약 취소 / 변경 및 노쇼 안내]`,
          `예약일 2일 전까지는 예약 보증금의 100%가 환불됩니다.`,
          `예약일 1일 전까지 취소 시 예약 보증금의 50%가 환불되며 예약일 당일 취소 또는 노쇼 시 예약 보증금은 환불되지 않습니다.`,
          `예약 변경을 원하실 경우, 기존 예약 취소 후 신규 예약을 진행해 주시기 바랍니다.`,
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

export default Restaurant3;