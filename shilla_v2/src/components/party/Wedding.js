import React, { useEffect } from 'react';
import Header from '../common/Header';
import Tab from "./Tab";
import SubTitle from './SubTitle';
import Gallery from './Gallery';
import Introduction from './Introduction';
import Location from './Location'
import Footer from '../common/Footer';

import "../../scss/common.scss"
import "../../scss/header.scss"
import "../../scss/footer.scss"
import "../../scss/sub-list.scss"
import "../../scss/sub-detail.scss"

function Wedding() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    
    const galleryImages = [
        "../../img/sub/wd-1-01.jpg",
        "../../img/sub/wd-1-02.jpg",
        "../../img/sub/wd-1-03.jpg",
        "../../img/sub/wd-1-04.jpg",
        "../../img/sub/wd-1-05.jpg",
        "../../img/sub/wd-1-06.jpg",
        "../../img/sub/wd-1-07.jpg",
        "../../img/sub/wd-1-08.jpg",
    ];

    const introData = {
        title: "변하지 않는 숭고한 가치",
        description: `다이너스티 홀은 300명 규모의 중형 웨딩부터 600명 규모의 대형 웨딩까지 다양하게 연출이 가능한 최적의 공간입니다.`,
        tel: "Tel) 02-2230-3321",
    };

    const locationData = [
        { title: '위치', content: '서울신라호텔 2층' },
        { title: '면적', content: '1,168.4 m<sup>2</sup>' },
        { title: 'Size', content: '50.8m x 23.0m / 층고 6.2m' },
        { title: '수용인원', content: '정찬 (코스) 기준 600석' },
    ];

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
                                <Location propLocation = {locationData}/>
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

export default Wedding;