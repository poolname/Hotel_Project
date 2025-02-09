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

const Restaurant = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

    const galleryImages = [
        "../../img/sub/dining-1-01.jpg",
        "../../img/sub/dining-1-02.jpg",
        "../../img/sub/dining-1-03.jpg",
        "../../img/sub/dining-1-04.jpg",
        "../../img/sub/dining-1-05.jpg",
        "../../img/sub/dining-1-06.jpg",
        "../../img/sub/dining-1-07.jpg",
        "../../img/sub/dining-1-08.jpg",
    ];
    
    const introData = {
        title: "전통과 품격의 한식 레스토랑",
        restaurantName: "라연",
        paragraphs: [
          {
            strong: null, // strong 텍스트가 없으므로 null
            className: "txt",
            text: "전통의 맛을 세심하고 세련되게 표현한 한식당, 羅宴 \n禮와 格을 갖추어정성으로 차려낸 라연만의 한식 정찬을 선보입니다."
          },
          {
            strong: null,
            className: "txt small",
            text: "전국 각지에서 엄선한 제철 식재료를 정통 조리법을 바탕으로\n현대적으로 재해석한 라연에서 한식의 정수를 경험해 보시기 바랍니다."
          }
        ]
      };
      
      
    
    const infoData = [
        { title: "위치", content: "서울신라호텔 23층" },
        {
        title: "운영시간",
        content: `Lunch : 12:00 ~ 14:30 (Last Order : 13:00)
        Dinner : 17:30 ~ 21:30 (Last Order : 19:30)`
        },
        { title: "예약 및 문의", content: "Tel) 02-2230-3367" },
        {
        title: "좌석수",
        content: `총 40석
        룸 1실 (성인과 소인 동반 시 최대 10명 수용 가능하며, 이용 시 별도 요금이 부과됩니다.)`
        }
    ];
    
    const guideData = {
        reservationInfo: `예약 접수 시작일은 '2개월 전 1일' 입니다.<br>
        예&#41; 7월 예약 : 5월 1일 9시부터 가능`,
      
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
      
    
    const descData = [
        "라연은 시즈널 메뉴로 운영되며, 시즌 변경 시 메뉴 구성 및 가격이 변동될 수 있습니다. 예약 이용 예정일에 메뉴 및 가격이 변동될 수 있으므로 사전에 확인하여 주시기 바랍니다.",
        "라연 디너 이용 시 17시 30분부터 19시까지 Aperitif Bar에서 식전 음료가 제공됩니다."
    ];
  

    return (
        <>
        <Header/>
        <div className="container">
            <div className="center">
                <div className="depth3-tab-wrap">
                    <Tab/>
                    <div className="tab-contents">
                        <div className="tab-cont cont1 on">
                            <SubTitle/>
                            <Gallery propImages={galleryImages} />
                            <div className="context">
                                <Introduction {...introData} />
                                <InfoList propInfo={infoData} />
                                <Guide {...guideData} propDesc={descData} />
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

export default Restaurant;