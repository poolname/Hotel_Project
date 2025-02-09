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

  const Restaurant2 = () => {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

      const galleryImages = [
        "../../img/sub/dining-2-01.jpg",
        "../../img/sub/dining-2-02.jpg",
        "../../img/sub/dining-2-03.jpg",
        "../../img/sub/dining-2-04.jpg",
        "../../img/sub/dining-2-05.jpg",
        "../../img/sub/dining-2-06.jpg",
      ];
      
      const introData = {
        title: "정통 프렌치 레스토랑",
        restaurantName: "콘티넨탈",
        paragraphs: [
          {
            strong: null,
            className: "txt",
            text: "우아한 실내장식과 부드러운 조명, 전문적이고 세심한 직원 서비스 또한 소중한 사람과의 특별한 만남을 더욱 빛나게 합니다."
          },
          {
            strong: "프렌치 정찬",
            className: "txt small",
            text: "콘티넨탈은 서울의 전경과 함께 프렌치 정찬을 즐길 수 있는 프렌치 레스토랑입니다.\n국내 및 세계 각국에서 공수한 건강하고 신선한 제철 식자재 및 셰프들의 끊임없는 연구를 기반으로 현대적이고도 독창적으로 구현한 정통 프렌치를 선보입니다.\n세계적인 정상급 와인부터 희소한 와인까지 500여종의 다채로운 셀렉션을 보유한 와인의 메카로도 유명합니다."
          }
        ]
      };
      
      
      const infoData = [
        { title: "위치", content: "서울신라호텔 23층" },
        {
          title: "운영시간",
          content: `Lunch : 12:00 ~ 14:30 (Last Order : 13:00)
                    Dinner : 17:30 ~ 21:30 (Last Order : 19:30)`,
        },
        { title: "예약 및 문의", content: "Tel&#41; 02-2230-3369" },
        {
          title: "좌석수",
          content: `총 36석
                    룸 1실 (최대 8명 수용 가능하며, 이용 시 별도 요금이 부과됩니다.)`,
        },
      ];
      
      // 가이드 데이터
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
      
      // 설명 데이터
      const descData = [
        `콘티넨탈은 시즈널 메뉴로 운영되며, 시즌 변경 시 메뉴 구성 및 가격이 변동될 수 있습니다.
        예약 이용 예정일에 메뉴 및 가격이 변동될 수 있으므로 사전에 확인하여 주시기 바랍니다.`,
        `콘티넨탈 디너 이용 시 17시 30분부터 19시까지 Aperitif Bar에서 식전 음료가 제공됩니다.`,
      ];
      
      

        return (
            <>
            <Header/>
            <div className="container">
                <div className="center">
                    <div className="depth3-tab-wrap">
                        <Tab/>
                        <div className="tab-contents">
                            <div className="tab-cont cont2 on">
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

  export default Restaurant2;