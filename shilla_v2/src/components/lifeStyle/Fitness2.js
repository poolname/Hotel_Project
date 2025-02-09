import React, { useEffect } from 'react';
import Header from '../common/Header';
import Tab2 from './Tab2';
import SubTitle from './SubTitle';
import Gallery2 from './Gallery2';
import Introduction from './Introduction';
import Location from './Location';
import Desc from './Desc';
import GroupExercise from './GroupExercise';
import Footer from '../common/Footer';

import "../../scss/common.scss"
import "../../scss/header.scss"
import "../../scss/footer.scss"
import "../../scss/sub-list.scss"
import "../../scss/sub-detail.scss"


function Fitness2() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const galleryImages = "../../img/sub/R00000009MES_KR.jpg";

    const introData = {
        title: "체계적인 체력 관리를 위한 기능별 공간과 최상의 휴식을 위한 공간으로 조성되어<br/>운동과 휴식을 조화롭게 즐길 수 있는 실내 체육관입니다.",
        description: `개인 샤워 부스 및 세신실 등 프라이버시가 보장된 시설을 갖추고 있으며,<br/>
                    취향에 따라 선택할 수 있는 다양한 온도와 크기의 사우나 및 탕을 구비하고 있습니다.`,
        tel: "02-2230-3524~5",
    };

    const locationData = [
        { title: '위치', content: '서울신라호텔 3층 피트니스' },
        { title: '운영시간', content: '05:30 ~ 22:30' },
        { title: '정기휴일', content: '매월 세 번째 수요일' },
        { title: '대여품목', content: '트레이닝 복(무료), 양말(무료)' },
    ]

    const descData = [
        {
            intro: '2024년 9월 세 번째 수요일(9/18)인 추석(공휴일)은 정상 영업하며, 피스니스 정기 휴무일은 9월 25일로 변경됩니다.',
            rules: [],
        },
        {
            intro: '체육관은 만 16세 이상 고객에 한해 입장 가능합니다.',
            rules: [],
        },
        {
            intro: '고객 여러분의 안전을 위하여 음주 후 체육관, 사우나, 실내 수영장 등의 피트니스 시설 이용은 제한될 수 있습니다.',
            rules: [],
        },
        {
            intro: '실내 체육관 입장 시 반드시 운동복과 실내용 운동화를 착용해 주시기 바랍니다.',
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
                                <div className="info-wrap">
                                    <GroupExercise />
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

export default Fitness2