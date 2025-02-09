import React, { useEffect } from 'react';
import Header from '../common/Header';
import Tab2 from './Tab2';
import SubTitle from './SubTitle';
import Gallery2 from './Gallery2';
import Introduction from './Introduction';
import Location from './Location';
import Desc from './Desc';
import Footer from '../common/Footer';

import "../../scss/common.scss"
import "../../scss/header.scss"
import "../../scss/footer.scss"
import "../../scss/sub-list.scss"
import "../../scss/sub-detail.scss"


function Fitness4() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const galleryImages = "../../img/sub/R00000009MJU_KR.jpg";

    const introData = {
        title: "프라이버시와 취향을 고려해 디자인한 여유로운 공간의 실내 사우나 입니다.<br> 고급스러운 시설과 서비스로 여유로운 휴식을 즐길 수 있습니다.",
        description: `개인 샤워 부스 및 세신실 등 프라이버시가 보장된 시설을 갖추고 있으며,<br>
                                    취향에 따라 선택할 수 있는 다양한 온도와 크기의 사우나 및 탕을 구비하고 있습니다.`,
        tel: "02-2230-3521~2",
    };

    const locationData = [
        { title: '위치', content: '서울신라호텔 3층 피트니스' },
        { title: '운영시간', content: '05:30 ~ 22:30' },
        { title: '정기휴일', content: '매월 세 번째 수요일' },
    ]

    const descData = [
        {
            intro: '2024년 9월 세 번째 수요일(9/18)인 추석(공휴일)은 정상 영업하며, 피스니스 정기 휴무일은 9월 25일로 변경됩니다.',
            rules: [],
        },
        {
            intro: '사우나는 만 13세 이상 고객에 한해 입장 가능합니다.',
            rules: [],
        },
        {
            intro: '고객 여러분의 안전을 위하여 음주 후 체육관, 사우나, 실내 수영장 등의 피트니스 시설 이용은 제한될 수 있습니다.',
            rules: [],
        },
        {
            intro: '건강상 문제나 피부질환, 문신 등의 이유로 피트니스 시설 이용이 제한될 수 있습니다.',
            rules: [],
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
                            <Gallery2 propImages={galleryImages}/>
                            <div className="context">
                                <Introduction {...introData} />
                                <div className="info-wrap mt-0">
                                    <Location propLocation = {locationData} />
                                    <div className="desc-wrap">
                                        <Desc propDesc={descData} />
                                    </div>
                                </div>
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

export default Fitness4