import React, { useEffect } from 'react';
import Header from '../common/Header';
import Tab3 from './Tab3';
import SubTitle from './SubTitle';
import Gallery2 from './Gallery2';
import Introduction from './Introduction';
import Location from './Location';
import Footer from '../common/Footer';

import "../../scss/common.scss"
import "../../scss/header.scss"
import "../../scss/footer.scss"
import "../../scss/sub-list.scss"
import "../../scss/sub-detail.scss"

function Shopping() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    
    const galleryImages = "../../img/sub/R0000000V56F_KR.jpg";

    const introData = {
        title: "서울신라호텔에서 럭셔리 브랜드들의 최신 트렌드를 가장 가까이에서 만나보실 수 있습니다.",
        description: `신라 명품 아케이드는 서울신라호텔만의 라이프스타일이 살아 숨쉬는 공간입니다.<br/>
                    고객 모두에게 만족을 드릴 최고급 쇼핑 공간으로서 엄선된 20여 개의 최고급 브랜드만 입점되어 있습니다.<br/>
                    프라이빗한 구조의 매장 구성으로 럭셔리 브랜드들의 최신 트렌드를 가장 가까이에서 만나보실 수 있습니다.`,
    };

    const locationData = [
        { title: '위치', content: '서울신라호텔 1층, B1층' },
        { title: '운영시간', content: '10:00 ~19:00(월~금), 11:00 ~ 19:00(토,일 공휴일)' },
    ]

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
                            <Gallery2 propImages={galleryImages}/>
                            <div className="context">
                                <Introduction {...introData} bdNone={true} pbNone={true} />
                                <div className="info-wrap mt-0">
                                    <Location propLocation={locationData} />
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

export default Shopping