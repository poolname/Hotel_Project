import React, { useEffect } from 'react';
import Header from '../common/Header';
import Tab2 from './Tab2';
import SubTitle from './SubTitle';
import Gallery2 from './Gallery2';
import Introduction from './Introduction';
import Location from './Location';
import Desc from './Desc';
import Introduction2 from './Introduction2';
import Footer from '../common/Footer';

import "../../scss/common.scss"
import "../../scss/header.scss"
import "../../scss/footer.scss"
import "../../scss/sub-list.scss"
import "../../scss/sub-detail.scss"


function Fitness3() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const galleryImages = "../../img/sub/R00000009MHT_KR.jpg";

    const introData = {
        title: "최고의 가치를 제공하기 위해 서울신라호텔에서만 누릴 수 있는 다양한 전문 프로그램을 마련했습니다.",
        description: `골프 경기력 향상을 위한 다양한 디지털 장비를 마련해 드라이빙, 퍼팅, 자세교정, 클럽 피팅 등 One-stop Solution을 제공합니다.<br>
            국내 최초로 드라이빙 레인지 전 타석에 골프샷 분석 시스템인 트랙맨(Track Man)을 설치해 더욱 과학적인 골프 연습을 경험하실 수 있습니다.`,
        tel: "02-2230-3521",
    };

    const locationData = [
        { title: '위치', content: '서울신라호텔 3층 피트니스' },
        { title: '운영시간', content: '06:00 ~ 22:00' },
        { title: '정기휴일', content: '매월 세 번째 수요일' },
        { title: '대여품목', content: '골프클럽(무료)' },
    ]

    const descData = [
        {
            intro: '2024년 9월 세 번째 수요일(9/18)인 추석(공휴일)은 정상 영업하며, 피스니스 정기 휴무일은 9월 25일로 변경됩니다.',
            rules: [],
        },
        {
            intro: '실내 골프장은 만 13세 이상 고객에 한해 입장 가능합니다.',
            rules: [],
        },
        {
            intro: '고객 여러분의 안전을 위하여 음주 후 체육관, 사우나, 실내 수영장 등의 피트니스 시설 이용은 제한될 수 있습니다.',
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
                                <Introduction2 />
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

export default Fitness3