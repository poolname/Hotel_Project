import React, { useEffect } from 'react';
import Header from '../common/Header';
import Tab2 from './Tab2';
import SubTitle from './SubTitle';
import Gallery from './Gallery';
import Introduction from './Introduction';
import InfoList from './InfoList';
import Footer from '../common/Footer';

import "../../scss/common.scss"
import "../../scss/header.scss"
import "../../scss/footer.scss"
import "../../scss/sub-list.scss"
import "../../scss/sub-detail.scss"

const Lounge = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
        }, []);

    const galleryImages = [
        "../../img/sub/dining-6-01.jpg",
        "../../img/sub/dining-6-02.jpg",
        "../../img/sub/dining-6-03.jpg",
        "../../img/sub/dining-6-04.jpg",
        "../../img/sub/dining-6-05.jpg",
    ];

    const introData = {
        title: "신개념의 고품격 사교 공간 라운지 & 바",
        restaurantName: "더 라이브러리",
        paragraphs: [
          {
            strong: "고객의 취향에 따라 즐기는 라이프스타일 공간",
            className: "txt small",
            text: "세계적인 인테리어 디자이너 피터 리미디오스가 디자인 한 더 라이브러리는 고객의 라이프스타일과 취향에 따라 다양하게 이용하실 수 있는 컨템포러리 라운지&바입니다."
          },
          {
            strong: "더 라이브러리 바 (The Library Bar)",
            className: "txt small",
            text: `원형으로 둘러싼 목재 기둥 안쪽으로 진열된 서가에는 역사, 문화, 예술, 건축 등 다양한 분야의 책들이 진열되어 있고, 중앙에 위치한 벽난로와 중후하고 세련된 가구들이 안락한 분위기를 연출합니다. 
                   편안하고 조용한 휴식과 담소를 원하는 분들께 영국 정통 싱글 몰트 위스키와 꼬냑을 즐길 수 있는 더 라이브러리 바를 추천해 드립니다.`
          },
          {
            strong: "라운지 바 (Lounge Bar)",
            className: "txt small",
            text: `남산 전망을 바라보며 라이브 재즈 연주와 함께 와인, 음료를 즐길 수 있는 엔터테인먼트 공간입니다. 
                   정통 재즈 및 다양한 장르의 재즈를 감상하며 생동감 있는 라이브 음악과 최고급 와인을 함께 하실 수 있는 색다른 개념의 문화를 경험하시기 바랍니다.`
          },
          {
            strong: "커뮤널 바 (Communiak Bar)",
            className: "txt small",
            text: "여러 사람과 함께 어울려 자유로운 친교와 유쾌한 분위기를 즐기실 수 있으며, 때로는 처음 만나는 사람과도 자연스러운 대화가 가능한 사교의 공간입니다."
          },
          {
            strong: "국내 최고의 싱글 몰트 위스키 셀렉션",
            className: "txt small",
            text: `더 라이브러리는 다양한 싱글몰트 위스키와 프랑스에서 직수입한 최고급 와인 셀렉션을 구비하고 있습니다. 
                   소믈리에가 엄선한 최고급 와인들과 뛰어난 개성이 돋보이는 다수의 몰트 위스키 외에 유럽 귀족들이 소장할 만큼 가치 있는 위스키도 경험하실 수 있으며, 개성있고 기품있는 새로운 몰트 위스키의 세계를 발견하실 수 있습니다.`
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
          content: `Lounge & Bar : 10:00 ~ 24:00
            A La Carte : 11:00 ~ 17:00
            Bar Plates : 17:00 ~ 23:00
            Royal Tea : 12:00 ~ 20:00`,
        },
        {
          title: "예약 및 문의",
          content: "Tel) 02-2230-3388-9",
        },
        {
          title: "좌석수",
          content: "총 122석",
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
                                <Introduction {...introData} />
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

export default Lounge;