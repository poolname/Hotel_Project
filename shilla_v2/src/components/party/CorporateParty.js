import React, { useEffect } from 'react';
import Header from '../common/Header';
import Tab2 from "./Tab2";
import SubTitle from './SubTitle';
import Gallery from './Gallery';
import Introduction from './Introduction';
import Buttons from './Buttons';
import Dynasty from './Dynasty';
import Footer from '../common/Footer';
import Popup from './Popup';

import "../../scss/common.scss"
import "../../scss/header.scss"
import "../../scss/footer.scss"
import "../../scss/sub-list.scss"
import "../../scss/sub-detail.scss"

function CorporateParty() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    
    const galleryImages = [
        "../../img/sub/gbRoom-1-01.jpg",
        "../../img/sub/gbRoom-1-02.jpg",
        "../../img/sub/gbRoom-1-03.jpg",
        "../../img/sub/gbRoom-1-04.jpg",
        "../../img/sub/gbRoom-1-05.jpg",
        "../../img/sub/gbRoom-1-06.jpg",
        "../../img/sub/gbRoom-1-07.jpg",
    ];

    const introData = {
        title: "DYNASTY",
        description: `서울신라호텔의 대연회장 다이너스티는 행사 규모 및 성격에 따라 변화 가능한 구조로 영빈관 후정과 연계하여 사용하실 수 있습니다.<br/>
                    다양하게 활용 가능한 백드롭 Batten과 6.2m의 높은 층고, 하이테크 연회 시스템, 숙련된 전문 스텝의 노하우로 최고의 행사를 만들어 드립니다.`,
        tel: "Tel) 02-2230-3321",
    };

    const infoData = [
        {
            title: "다이너스티",
            location: "서울신라호텔 2층",
            area: "1,168.4 m²",
            size: "50.8m x 23.0m / 층고 6.2m",
            numbers: ["1,000", "1,000", "800", "800"],
        },
        {
            title: "다이너스티 1",
            location: "서울신라호텔 2층",
            area: "458.3 m²",
            size: "21.1m x 23.0m / 층고 6.2m",
            numbers: ["400", "400", "320", "320"],
        },
        {
            title: "다이너스티 2",
            location: "서울신라호텔 2층",
            area: "370.3 m²",
            size: "16.1m x 23.0m / 층고 6.2m",
            numbers: ["300", "300", "240", "240"],
        },
        {
            title: "다이너스티 3",
            location: "서울신라호텔 2층",
            area: "305.9 m²",
            size: "13.3m x 23.0m / 층고 6.2m",
            numbers: ["240", "240", "200", "200"],
        },
        {
            title: "다이너스티 1+2",
            location: "서울신라호텔 2층",
            area: "855.6 m²",
            size: "37.0m x 23.0m / 층고 6.2m",
            numbers: ["700", "700", "560", "560"],
        },
        {
            title: "다이너스티 2+3",
            location: "서울신라호텔 2층",
            area: "676.2 m²",
            size: "29.4m x 23.0m / 층고 6.2m",
            numbers: ["540", "540", "440", "440"],
        },
        {
            title: "다이너스티 A",
            location: "서울신라호텔 2층",
            area: "577.3 m²",
            size: "25.1m x 23.0m / 층고 6.2m",
            numbers: ["450", "450", "380", "380"],
        },
        {
            location: "서울신라호텔 2층",
            area: "586.5 m²",
            size: "25.5m x 23.0m / 층고 6.2m",
            numbers: ["450", "450", "380", "380"],
        },
    ];

    const popUpData = [
        { id: "pop-floor-plan01", title: "도면보기", imgSrc: "../../img/sub/floor-plan-01.gif", buttonLabel: "도면보기" },
        { id: "pop-floor-plan02", title: "입체도면보기", imgSrc: "../../img/sub/Dynasty_kr.jpg", buttonLabel: "입체도면보기" },
        { id: "pop-floor-plan03", title: "DYNASTY Floor Map", imgSrc: "../../img/sub/floor-plan-02.gif", buttonLabel: "DYNASTY Floor Map" },
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
                                <Introduction {...introData} buttons={<Buttons />} />
                                <Dynasty data={infoData} />
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

export default CorporateParty;