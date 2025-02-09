import React, { useEffect } from 'react';
import Header from '../common/Header';
import Tab2 from './Tab2';
import SubTitle from './SubTitle';
import Gallery from './Gallery';
import Introduction2 from './Introduction2';
import InfoList from './InfoList';
import Footer from '../common/Footer';

import "../../scss/common.scss"
import "../../scss/header.scss"
import "../../scss/footer.scss"
import "../../scss/sub-list.scss"
import "../../scss/sub-detail.scss"

const Lounge2 = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const galleryImages = [
        "../../img/sub/dining-7-01.jpg",
        "../../img/sub/dining-7-02.jpg",
        "../../img/sub/dining-7-03.jpg",
        "../../img/sub/dining-7-04.jpg",
        "../../img/sub/dining-7-05.jpg",
    ];

    const introData = {
      title: "진귀한 고숙성 위스키 경험",
      restaurantName: "더 디스틸러스 라이브러리",
      paragraphs: [
        {
          strong: "더 라이브러리에 오픈한 '위스키 부티크 앤 라운지'",
          className: "txt small",
          text: "프리미엄 위스키 특화 공간으로 세계적으로 희귀한 위스키 컬렉션을 국내 독점으로 선보이며 위스키 보틀 구매부터 테이스팅, 다이닝까지, 프라이빗한 서비스로 새로운 차원의 위스키 여정을 제공합니다."
        },
        {
          strong: "리테일 (Retail)",
          className: "txt small",
          text: "라이프 스타일과 취향을 고려한 위스키를 추천해 드리며\n세계적으로 한정 수량만 유통되는 레이디번과 글렌피딕, 발베니 고숙성 제품 등 국내에서는 서울 신라호텔에서만 단독으로 만나볼 수 있는 위스키 컬렉션을 선보입니다.\n위스키의 최종 품질을 관할하는 몰트 마스터가 시향하는 공간을 연상케 하는 테이스팅 공간에서는 다양한 고숙성 제품을 테이스팅하고 구매하실 수 있습니다."
        },
        {
          strong: "룸 (Room)",
          className: "txt small",
          text: "다양한 위스키를 프라이빗하게 경험할 수 있는 공간입니다.\n위스키 페어링 코스부터 심도있는 위스키 체험 프로그램까지, 룸 타입별 다채로운 경험을 선사합니다."
        }
      ],
      rooms: [
        {
          title: "리테일 라운지 (2~4인)",
          className: "txt small",
          text: "위스키와 함께 스낵 메뉴를 즐길 수 있는 아늑한 규모의 룸입니다."
        },
        {
          title: "시크릿 다이닝 (10인)",
          className: "txt small",
          text: "위스키 페어링 다이닝 코스를 경험할 수 있는 공간으로 위스키에 식견이 있는 전문 앰버서더들이 운영하는 세션을 진행합니다."
        },
        {
          title: "시크릿 라운지 (8인)",
          className: "txt small",
          text: "레이디번, 발베니 60년 등 희귀 위스키 컬렉션이 예술 작품처럼 전시된 고급스러운 공간으로 프라이빗 위스키 바와 같은 편안하고 안락한 분위기를 제공합니다.\n희귀 위스키와 페어링하기 좋은 메뉴로 색다른 차원의 위스키 문화를 경험해보시기 바랍니다."
        }
      ]
    };
    

    const infoData = [
        {
          title: "위치",
          content: "서울신라호텔 1층",
        },
        {
          title: "운영시간",
          content: `11:00 ~ 24:00`,
        },
        {
          title: "예약 및 문의",
          content: "Tel) 02-2230-3388-9",
        },
        {
          title: "좌석수",
          content: `Retail Lounge Room4석
          Secret Dining Room 10석
          Secret Lounge Room 8석`,
        },
    ];
      
    return (
        <>
        <Header/>
        <div className="container">
            <div className="center">
                <div className="depth3-tab-wrap">
                    <Tab2/>
                    <div className="tab-contents">
                        <div className="tab-cont cont1 on">
                            <SubTitle/>
                            <Gallery propImages={galleryImages} />
                            <div className="context">
                                <Introduction2 {...introData} />
                                <InfoList propInfo={infoData} bdNone={true}/>
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

export default Lounge2;