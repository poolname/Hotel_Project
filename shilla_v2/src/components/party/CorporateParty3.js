import React, { useEffect } from 'react';
import Header from '../common/Header';
import Tab2 from "./Tab2";
import SubTitle from './SubTitle';
import Gallery2 from './Gallery2';
import Introduction from './Introduction';
import Buttons2 from './Buttons2';
import Card from './Card';
import Footer from '../common/Footer';
import Popup from './Popup';

import "../../scss/common.scss"
import "../../scss/header.scss"
import "../../scss/footer.scss"
import "../../scss/sub-list.scss"
import "../../scss/sub-detail.scss"

function CorporateParty3() {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

    const galleryData = "../../img/sub/gbRoom-3.jpg";

    const introData = {
        title: "자연 친화적인 소재의 3층 연회장에서는 모던한 기품과 세련미를 느끼실 수 있습니다.",
        tel: "Tel) 02-2230-3320",
    };

    const btnData = [
        { 
          id: "pop-floor-plan02", 
          label: "입체도면보기", 
          className: "btn-02" 
        },
        { 
          id: "pop-floor-plan03", 
          label: "Small Rooms Floor Map", 
          className: "btn-03" 
        },
    ];

    const cardData = [
      {
        title: "라일락",
        imgSrc: "../../img/sub/ssRmLilacLImg.jpg",
        mainText: "차분하고 우아한 분위기를 자아내는 공간으로, 품격 있는 소규모 행사를 위한 최적의 장소입니다.",
        subText: "세련된 인테리어와 따뜻한 색감이 어우러져 아늑한 느낌을 제공합니다.",
        location: "서울신라호텔 3층",
        area: "85.6 m²",
        size: "10.5m x 8.2m / 층고 2.8m",
        capacities: [
          { icon: "../../img/sub/reception.gif", type: "Reception", number: "120" },
          { icon: "../../img/sub/theater.gif", type: "Theater", number: "120" },
          { icon: "../../img/sub/classroom.gif", type: "Classroom", number: "100" },
          { icon: "../../img/sub/round.gif", type: "Round Table", number: "100" },
        ],
        buttonId: "pop-floor-plan01-1",
      },
      {
        title: "마로니에",
        imgSrc: "../../img/sub/ssRmMrLImg.jpg",
        mainText: "모던한 기품이 느껴지는 인테리어와 자연 친화적인 소재에서 편안한 세련미를 느낄 수 있습니다.",
        subText: "은은한 조명으로 세미나 및 다양한 비지니스 행사를 고급스럽게 연출하실 수 있습니다.",
        location: "서울신라호텔 3층",
        area: "94.4 m²",
        size: "11.8m x 8.0m / 층고 2.8m",
        capacities: [
          { icon: "../../img/sub/reception.gif", type: "Reception", number: "80" },
          { icon: "../../img/sub/theater.gif", type: "Theater", number: "80" },
          { icon: "../../img/sub/classroom.gif", type: "Classroom", number: "60" },
          { icon: "../../img/sub/round.gif", type: "Round Table", number: "60" },
        ],
        buttonId: "pop-floor-plan01-2",
      },
      {
        title: "메이플",
        imgSrc: "../../img/sub/ssRmMapleLImg.jpg",
        mainText: "소규모 회의에 적격인 메이플 룸은 심플함이 돋보이는 기능적인 공간입니다.",
        subText: "심플한 오브제와 자연스러움이 편안한 분위기를 전합니다.",
        location: "서울신라호텔 3층",
        area: "72.4 m²",
        size: "9.8m x 7.4m / 층고 2.8m",
        capacities: [
          { icon: "../../img/sub/reception.gif", type: "Reception", number: "50" },
          { icon: "../../img/sub/theater.gif", type: "Theater", number: "50" },
          { icon: "../../img/sub/classroom.gif", type: "Classroom", number: "40" },
          { icon: "../../img/sub/round.gif", type: "Round Table", number: "40" },
        ],
        buttonId: "pop-floor-plan01-3",
      },
      {
        title: "오키드",
        imgSrc: "../../img/sub/ssRmOrchidLImg.jpg",
        mainText: "파티션을 이용하여 다양한 연회 규모에 적합하게 활용 가능한 공간입니다.",
        subText: "넓은 창을 가득 수놓는 계절의 아름다움이 연회의 품격을 한층 높여줍니다.",
        location: "서울신라호텔 3층",
        area: "135.9 m²",
        size: "14.5m x 9.4m / 층고 2.8m",
        capacities: [
          { icon: "../../img/sub/reception.gif", type: "Reception", number: "100" },
          { icon: "../../img/sub/theater.gif", type: "Theater", number: "100" },
          { icon: "../../img/sub/classroom.gif", type: "Classroom", number: "80" },
          { icon: "../../img/sub/round.gif", type: "Round Table", number: "80" },
        ],
        buttonId: "pop-floor-plan01-4",
      },
      
    ];
    
    const popUpData = [
      {
        id: "pop-floor-plan02",
        title: "입체도면보기",
        imgSrc: "../../img/sub/SmallSizeRoom_kr.jpg",
      },
      {
        id: "pop-floor-plan03",
        title: "Small Rooms Floor Map",
        imgSrc: "../../img/sub/ssRmFmap.jpg",
      },
      {
        id: "pop-floor-plan01-1",
        title: "라일락 도면보기",
        imgSrc: "../../img/sub/lilacMap.gif",
      },
      {
        id: "pop-floor-plan01-2",
        title: "마로니에 도면보기",
        imgSrc: "../../img/sub/mrMap.jpg",
      },
      {
        id: "pop-floor-plan01-3",
        title: "메이플 도면보기",
        imgSrc: "../../img/sub/mapleMap.jpg",
      },
      {
        id: "pop-floor-plan01-4",
        title: "오키드 도면보기",
        imgSrc: "../../img/sub/orchidMap.jpg",
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
                            <Gallery2 propImages={galleryData} />
                            <div className="context">
                                <Introduction {...introData} buttons={<Buttons2 propBtn={btnData} />} />
                                <div className="info-wrap flex">
                                {cardData.map((card) => (
                                  <Card key={card.buttonId} {...card} />
                                ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
        {popUpData.map((popup) => (
            <Popup key={popup.id} id={popup.id} title={popup.title} imgSrc={popup.imgSrc} />
        ))}
        </>
    )
}

export default CorporateParty3;