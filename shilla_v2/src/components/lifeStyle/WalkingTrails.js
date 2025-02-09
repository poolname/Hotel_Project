import React, { useEffect } from 'react';
import Header from '../common/Header';
import SubTitle from './SubTitle';
import Gallery2 from './Gallery2';
import Introduction from './Introduction';
import Location from './Location';
import Button from './Button';
import MapPopUp from './MapPopUp';
import Footer from '../common/Footer';

import "../../scss/common.scss"
import "../../scss/header.scss"
import "../../scss/footer.scss"
import "../../scss/sub-list.scss"
import "../../scss/sub-detail.scss"


function WalkingTrails() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const galleryImages = "../../img/sub/R00000009MP2_KR.jpg";

    const introData = {
        title: "서울신라호텔만의 고풍스러운 성곽길",
        description: `아름다운 경관과 맑은 공기가 가득한 여유롭고 평온한 휴식 장소로서,<br/>
            4만m<sup>2</sup>의 녹지대를 따라 조성된 산책길을 따라 굽이굽이 펼쳐지는 서울성곽길을 걸어가 보면 옛 숨결도 느끼실 수 있습니다.`,
        tel: "02-2233-3131",
    };

    const locationData = [
        { title: '위치', content: '서울신라호텔 야외' },
        { title: '운영시간', content: '06:00 ~ 22:00' },
    ]

    const btnData = "산책로 지도 보기";
    const MapImage = "../../img/sub/R00000024F3P_KR.jpg";

    return (
        <>
        <Header/>
        <div className="container">
            <div className="center">
                <div className="depth3-tab-wrap">
                    <div className="tab-contents">
                        <div className="tab-cont cont1 on">
                            <SubTitle/>
                            <Gallery2 propImages={galleryImages}/>
                            <div className="context">
                                <Introduction {...introData} bdNone={true} pbNone={true}/>
                                <div className="info-wrap mt-0">
                                    <Location propLocation = {locationData} />
                                </div>
                                <Button propBtn={btnData}/>
                                <MapPopUp propImage={MapImage} propBtn={btnData}/>
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

export default WalkingTrails
