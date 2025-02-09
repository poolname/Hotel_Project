import React, { useEffect } from 'react';
import Header from '../common/Header';
import Tab from "./Tab";
import SubTitle from './SubTitle';
import Gallery from './Gallery';
import Introduction2 from './Introduction2';
import Location from './Location'
import Footer from '../common/Footer';

import "../../scss/common.scss"
import "../../scss/header.scss"
import "../../scss/footer.scss"
import "../../scss/sub-list.scss"
import "../../scss/sub-detail.scss"

function Wedding3() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const galleryImages = [
        "../../img/sub/wd-3-01.jpg",
        "../../img/sub/wd-3-02.jpg",
        "../../img/sub/wd-3-03.jpg",
        "../../img/sub/wd-3-04.jpg",
        "../../img/sub/wd-3-05.jpg",
        "../../img/sub/wd-3-06.jpg",
        "../../img/sub/wd-3-07.jpg",
    ];

    const locationData = [
        { title: '위치', content: '서울신라호텔 2층' },
        { title: '면적', content: '1,168.4 m<sup>2</sup>' },
        { title: 'Size', content: '50.8m x 23.0m / 층고 6.2m' },
        { title: '수용인원', content: '정찬 (코스) 기준 600석' },
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
                                <Introduction2 />
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

export default Wedding3;