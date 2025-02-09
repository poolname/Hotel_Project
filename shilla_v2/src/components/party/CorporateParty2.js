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

function CorporateParty2() {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

    const galleryData = "../../img/sub/gbRoom-2.jpg";

    const introData = {
        title: "Yeong Bin Gwan",
        description: ` 1967년에 준공된 영빈관은 정부의 국가적인 손님을 영접하기 위해 설립되었습니다.<br>
                    1973년에 삼성그룹이 인수한 후 서울신라호텔의 오픈과 함께 일반에 공개되어 격조 높은 회의와 연회를 위한 장소로 사용되고 있습니다.`,
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
          label: "Yeong Bin Gwan Floor Map", 
          className: "btn-03" 
        },
    ];

    const cardData = [
        {
          title: "루비",
          imgSrc: "../../img/sub/ybgRubyImg.jpg",
          mainText: "은은한 고전미가 돋보이는 분위기로, 기품과 격조를 중시하는 행사에 깊은 만족을 드리는 공간입니다.",
          subText: "칵테일 파티와 리셉션, 그리고 중소규모의 행사 장소로 인기 있으며, 초대받은 분들께 색다른 감동을 드립니다.",
          location: "서울신라호텔 영빈관 1층",
          area: "300.7 m²",
          size: `<em>Main</em>15.6m x 12.3m / 층고 4.6m<br/>
                 <em>Sub</em>9.8m x 7.8m / 층고 3.7m<br/>
                 <em>Stage</em>8.5m x 4.0m / 층고 3.8m`,
          capacities: [
            { icon: "../../img/sub/reception.gif", type: "Reception", number: "250" },
            { icon: "../../img/sub/theater.gif", type: "Theater", number: "250" },
            { icon: "../../img/sub/classRoom.gif", type: "Classroom", number: "180" },
            { icon: "../../img/sub/round.gif", type: "Round Table", number: "180" },
          ],
          buttonId: "pop-floor-plan01-1",
        },
        {
          title: "토파즈",
          imgSrc: "../../img/sub/ybgTopazImg.jpg",
          mainText: "우아한 고전미가 돋보이는 분위기로, 격조를 중시하는 행사를 위한 공간입니다.",
          subText: "한국의 정서와 현대적인 모던함이 어우러져 고급스러우면서도 특색있는 행사를 연출하실 수 있습니다.",
          location: "서울신라호텔 영빈관 1층",
          area: "255.7 m²",
          size: `<em>Main</em>15.6m x 12.3m / 층고 4.6m<br/>
                 <em>Sub</em>5.1m x 7.8m / 층고 3.7m<br/>
                 <em>Stage</em>8.5m x 2.8m / 층고 3.8m`,
          capacities: [
            { icon: "../../img/sub/reception.gif", type: "Reception", number: "200" },
            { icon: "../../img/sub/theater.gif", type: "Theater", number: "200" },
            { icon: "../../img/sub/classRoom.gif", type: "Classroom", number: "150" },
            { icon: "../../img/sub/round.gif", type: "Round Table", number: "150" },
          ],
          buttonId: "pop-floor-plan01-2",
        },
        {
          title: "에메랄드",
          imgSrc: "../../img/sub/ybgErdImg.jpg",
          mainText: "전통 한옥에서 우러나오는 한국미가 돋보이는 공간으로 최첨단 시설을 완벽하게 갖추고 있습니다.",
          subText: "에메랄드 룸과 연결되어 있는 영빈관 후정을 함께 이용할 수 있어 자연이 공존하는 색다른 분위기를 선사합니다.",
          location: "서울신라호텔 영빈관 1층",
          area: "255.7 m²",
          size: `<em>Main</em>17.8m x 12.3m / 층고 4.1m<br/>
                 <em>Stage</em>8.5m x 3.1m / 층고 3.2m`,
          capacities: [
            { icon: "../../img/sub/reception.gif", type: "Reception", number: "200" },
            { icon: "../../img/sub/theater.gif", type: "Theater", number: "200" },
            { icon: "../../img/sub/classRoom.gif", type: "Classroom", number: "160" },
            { icon: "../../img/sub/round.gif", type: "Round Table", number: "160" },
          ],
          buttonId: "pop-floor-plan01-3",
        },
        {
            title: "내정",
            imgSrc: "../../img/sub/ybgIgImg1.jpg",
            mainText: "수려한 남산을 배경으로 펼쳐진 아름다운 조각 작품과 넓은 잔디밭을 즐길 수 있는 가든 파티는 오직 서울신라호텔만이 드릴 수 있는 가장 멋진 선물입니다.",
            subText: "자연의 숨결을 더욱 가까이 느끼면서 여유와 개성이 넘치는 행사를 경험해 보십시오.",
            location: "서울신라호텔 영빈관 1층",
            area: "506.3 m²",
            size: `22.5m x 22.5m`,
            capacities: [
              { icon: "../../img/sub/reception.gif", type: "Reception", number: "300" },
              { icon: "../../img/sub/round.gif", type: "Round Table", number: "250" },
            ],
            buttonId: "pop-floor-plan01-4",
          },
          {
            title: "후정",
            imgSrc: "../../img/sub/ybgEgImg.jpg",
            mainText: "자연의 숨결을 더욱 가까이 느끼면서 여유와 개성이 넘치는 행사를 경험해 보십시오.",
            subText: "수려한 남산을 배경으로 펼쳐진 아름다운 조각 작품과 넓은 잔디밭을 즐길 수 있는 가든 파티는 오직 서울신라호텔만이 드릴 수 있는 가장 멋진 선물입니다.",
            location: "서울신라호텔 영빈관 2층",
            area: "1,325.8 m²",
            size: `66.0m x 25.7m`,
            capacities: [
              { icon: "../../img/sub/reception.gif", type: "Reception", number: "1,000" },
              { icon: "../../img/sub/round.gif", type: "Round Table", number: "800" },
            ],
            buttonId: "pop-floor-plan01-5",
          },
      ];

      const popUpData = [
        { id: "pop-floor-plan02", title: "입체도면보기", imgSrc: "../../img/sub/YeongBinGwan_kr.jpg" },
        { id: "pop-floor-plan03", title: "Yeong Bin Gwan Floor Map", imgSrc: "../../img/sub/ybgFmap.jpg" },
        { id: "pop-floor-plan01-1", title: "루비 도면보기", imgSrc: "../../img/sub/rubyMap.jpg" },
        { id: "pop-floor-plan01-2", title: "토파즈 도면보기", imgSrc: "../../img/sub/topazMap.jpg" },
        { id: "pop-floor-plan01-3", title: "에메랄드 도면보기", imgSrc: "../../img/sub/erdMap.jpg" },
        { id: "pop-floor-plan01-4", title: "내정(Internal Garden) 도면보기", imgSrc: "../../img/sub/igMap.jpg" },
        { id: "pop-floor-plan01-5", title: "후정(Exterior Garden) 도면보기", imgSrc: "../../img/sub/EgMap.jpg" },
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
                                <Introduction {...introData} buttons={<Buttons2 propBtn={btnData}/>} />
                                <div className="info-wrap flex">
                                    {cardData.slice(0, 3).map((card) => (
                                        <Card key={card.buttonId} {...card} />
                                    ))}
                                </div>
                                <div className="info-wrap flex mt-0">
                                    {cardData.slice(3).map((card) => (
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

export default CorporateParty2;