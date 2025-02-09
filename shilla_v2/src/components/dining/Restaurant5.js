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

const Restaurant5 = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
    const galleryImages = [
      "../../img/sub/dining-5-01.jpg",
      "../../img/sub/dining-5-02.jpg",
      "../../img/sub/dining-5-03.jpg",
      "../../img/sub/dining-5-04.jpg",
      "../../img/sub/dining-5-05.jpg",
      "../../img/sub/dining-5-06.jpg",
    ];
    
    const introData = {
      title: "자연을 닮은 레스토랑",
      restaurantName: "더 파크뷰",
      paragraphs: [
        {
          strong: "룸 이용안내",
          className: "txt small",
          text: `룸 이용시 별도의 요금이 부과됩니다. <br/>
            <span>[Room 1 (5~6인) : 50,000원 / Room 2 (5~6인) : 50,000원 / Room 3 (7~9인) : 50,000원 / Room 4 (10~14인) : 100,000원 / Room 5 (15~20인) : 100,000원]</span> 
          `, 
        },
        {
          strong: "뷔페 상품권 안내",
          className: "txt small",
          text: `서울신라호텔에서 준비한 더 파크뷰 뷔페 상품권으로 고마운 분들께 감사의 마음을 전하시기 바랍니다.<br/>
          레스토랑 초대권은 두 종류로 준비되어 있습니다.<br/>
                - 초대권 1 : 더 파크뷰 뷔페 1인 식사권<br/>
                - 초대권 2 : 더 파크뷰 뷔페 1인 식사권 + 페어링 와인 2잔<br/>
                <em>* 12월 에는 초대권 사용 시 추가 요금이 발생될 수 있으니 예약 시 문의 주시기 바랍니다.</em>
            `
        },
      ]
    };
    
    const infoData = [
      { title: "위치", content: "서울신라호텔 1층" },
      { title: "예약 및 문의", content: "Tel&#41; 02-2230-3374" },
      {
        title: "좌석수",
        content: `총 36석
                  룸 1실 (최대 8명 수용 가능하며, 이용 시 별도 요금이 부과됩니다.)`,
      },
    ];
    
    const guideData = {
      reservationInfo: `예약 접수 시작일은 '1개월 전 1일' 입니다.<br>
      예&#41; 6월 예약 : 5월 1일 9시부터 가능<br>`,
      
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
                                  <Introduction {...introData} includeTimeTable={true} />
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

export default Restaurant5;