import React, { useEffect } from 'react';
import Header from '../common/Header';
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

const Bakery = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const galleryImages = [
        "../../img/sub/dining-8-01.jpg",
        "../../img/sub/dining-8-02.jpg",
        "../../img/sub/dining-8-03.jpg",
        "../../img/sub/dining-8-04.jpg",
    ];

    const introData = {
      title: "미적 감각이 돋보이는",
      restaurantName: "패스트리 부티크",
      paragraphs: [
        {
          className: "txt",
          text: `품격있는 면품 주얼리 부티크를 연상시키는 디스플레이와 전문  파티셰의 손길에서 태어난 정성이 담긴 명품 패스트리와 베이커리를 만나보실 수 있습니다.
          트렌디한 부티크를 콘셉트로 고급스러운 진열장에 정성껏 만든 케이크와 패스트리를 전시해 맛과 멋의 품격을 높였습니다.`
        },
      ],
    };
    

    const infoData = [
        {
          title: "위치",
          content: "서울신라호텔 1층",
        },
        {
          title: "운영시간",
          content: `07:00 ~ 22:00`,
        },
        {
          title: "예약 및 문의",
          content: "Tel) 02-2230-3377",
        },
    ];

    const guideData = {
      reservationInfo: `예약 접수 시작일은 '1개월 전 1일' 입니다.<br>
      예&#41; 6월 예약 : 5월 1일 9시부터 가능`,
    
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
      "홈페이지 상품 이미지는 패스트리 부티크에서 실제 판매하는 상품과 상이할 수 있습니다.",
      "패스트리 부티크의 케이크 레터링 서비스가 2022년 12월 1일자로 중단됨을 안내드립니다."
  ];
      
    return (
        <>
        <Header/>
        <div className="container">
            <div className="center">
                <div className="depth3-tab-wrap">
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

export default Bakery;