import React, { useEffect } from 'react';
import Header from '../common/Header';
import Tab from "./Tab";
import SubTitle from './SubTitle';
import Gallery from './Gallery';
import Introduction from './Introduction';
import Location from './Location'
import Location2 from '../lifeStyle/Location'
import Footer from '../common/Footer';

import "../../scss/common.scss"
import "../../scss/header.scss"
import "../../scss/footer.scss"
import "../../scss/sub-list.scss"
import "../../scss/sub-detail.scss"

function Wedding2() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const galleryImages = [
        "../../img/sub/wd-2-01.jpg",
        "../../img/sub/wd-2-02.jpg",
        "../../img/sub/wd-2-03.jpg",
        "../../img/sub/wd-2-04.jpg",
        "../../img/sub/wd-2-05.jpg",
        "../../img/sub/wd-2-06.jpg",
        "../../img/sub/wd-2-07.jpg",
        "../../img/sub/wd-2-08.jpg",
    ];

    const introData = {
        description: `한국 전통의 아름다음과 현대적 감각이 어우러진 독립적인 공간으로 두 곳의 정원과 세 개의 별실로 구성되어 있습니다.<br>
                    차별화된 하우스 웨딩 및 야외 웨딩 연출이 가능합니다.`,
        tel: "Tel) 02-2230-3321",
    };

    const locationData = [
        { title: '위치', content: '서울신라호텔 영빈관 1층' },
        { title: '면적', content: '300.7 m<sup>2</sup>' },
        { title: 'Size', content: `<em>Main</em>15.6m x 12.3m / 층고 4.6m<br/>
                                <em>Sub</em>9.8m x 7.8m / 층고 3.7m<br/>
                                <em>Stage</em>8.5m x 4.0m / 층고 3.8m` },
        { title: '수용인원', content: '정찬 (코스) 기준 150석' },
    ];

    const locationData2 = [
        { title: '위치', content: '서울신라호텔 영빈관 1층' },
        { title: '면적', content: '255.7 m<sup>2</sup>' },
        { title: 'Size', content: `<em>Main</em>15.6m x 12.3m / 층고 4.6m<br/>
                                <em>Sub</em>5.1m x 7.8m / 층고 3.7m<br/>
                                <em>Stage</em>8.5m x 2.8m / 층고 3.8m` },
        { title: '수용인원', content: '정찬 (코스) 기준 130석' },
    ];

    const locationData3 = [
        { title: '위치', content: '서울신라호텔 영빈관 2층' },
        { title: '면적', content: '244.4 m<sup>2</sup>' },
        { title: 'Size', content: `<em>Main</em>17.8m x 12.3m / 층고 4.1m<br>
                                <em>Stage</em>8.5m x 3.1m / 층고 3.2m` },
        { title: '수용인원', content: '정찬 (코스) 기준 120석' },
    ];

    const locationData4 = [
        { title: '위치', content: '서울신라호텔 영빈관 1층' },
        { title: '면적', content: '506.3 m<sup>2</sup>' },
        { title: 'Size', content: '22.5m x 22.5m' },
        { title: '수용인원', content: '정찬 (코스) 기준 200석' },
    ]

    const locationData5 = [
        { title: '위치', content: '서울신라호텔 영빈관 2층' },
        { title: '면적', content: '1325.8 m<sup>2</sup>' },
        { title: 'Size', content: '66.0m x 25.7m' },
        { title: '수용인원', content: '정찬 (코스) 기준 400석' },
    ]

    
    return (
        <>
        <Header/>
        <div className="container">
            <div className="center">
                <div className="depth3-tab-wrap">
                    <Tab/>
                    <div className="tab-contents">
                        <div className="tab-cont cont1 on">
                            <SubTitle />
                            <Gallery propImages={galleryImages} />
                            <div className="context">
                                <Introduction {...introData} />
                                <div className="info-wrap">
                                    <strong>루비</strong>
                                    <Location propLocation = {locationData}/>
                                    <strong>토파즈</strong>
                                    <Location propLocation = {locationData2}/>
                                    <strong>에메랄드</strong>
                                    <Location propLocation = {locationData3}/>
                                    <strong>내정</strong>
                                    <Location2 propLocation = {locationData4}/>
                                    <br/>
                                    <br/>
                                    <br/>
                                    <br/>
                                    <strong>후정</strong>
                                    <Location2 propLocation = {locationData5}/>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
        </>
    );
}

export default Wedding2;