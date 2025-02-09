import React, { useEffect } from 'react';
import Header from '../common/Header';
import Tab3 from './Tab3';
import SubTitle from './SubTitle';
import Gallery from './Gallery';
import Introduction from './Introduction';
import Location2 from '../lifeStyle/Location'
import Footer from '../common/Footer';

import "../../scss/common.scss"
import "../../scss/header.scss"
import "../../scss/footer.scss"
import "../../scss/sub-list.scss"
import "../../scss/sub-detail.scss"

const FamilyParty2 = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const galleryImages = [
        "../../img/sub/cbInfo-2-01.jpg",
        "../../img/sub/cbInfo-2-02.jpg",
        "../../img/sub/cbInfo-2-03.jpg",
        "../../img/sub/cbInfo-2-04.jpg",
        "../../img/sub/cbInfo-2-05.jpg",
        "../../img/sub/cbInfo-2-06.jpg",
        "../../img/sub/cbInfo-2-07.jpg",
        "../../img/sub/cbInfo-2-08.jpg",
    ];

    const introData = {
        description: "아름다운 남산 전망과 편리한 접근성을 갖춘 모던하고 세련된 공간으로, 중&middot;소규모 가족모임을 위한 최적의 장소입니다.",
        tel: "Tel) 02-2230-3321",
    };

    const locationData = [
        { title: '위치', content: '서울신라호텔 3층' },
        { title: '규모', content: '면적 17.9 x 9.9 m / 높이 2.8m' },
        { title: '수용가능인원', content: '정찬 (뷔페) 80석 / 정찬 (코스) 80석' },
    ];
    
    return (
        <>
        <Header/>
        <div className="container">
            <div className="center">
                <div className="depth3-tab-wrap">
                    <Tab3/>
                    <div className="tab-contents">
                        <div className="tab-cont cont1 on">
                            <SubTitle/>                    
                            <Gallery propImages={galleryImages} />
                            <div className="context">
                                <Introduction {...introData} labelType="inquiry" />
                                <div className="info-wrap">
                                    <strong>라일락</strong>
                                    <Location2 propLocation = {locationData}/>
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

export default FamilyParty2;
