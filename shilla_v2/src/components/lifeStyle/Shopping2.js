import React, { useEffect } from 'react';
import Header from '../common/Header';
import Tab3 from './Tab3';
import SubTitle from './SubTitle';
import Gallery2 from './Gallery2';
import Introduction from './Introduction';
import Location from './Location';
import Button2 from './Button2';
import Footer from '../common/Footer';

import "../../scss/common.scss"
import "../../scss/header.scss"
import "../../scss/footer.scss"
import "../../scss/sub-list.scss"
import "../../scss/sub-detail.scss"

function Shopping2() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const galleryImages = "../../img/sub/dutyFreeMain.jpg";

    const introData = {
        title: `"최고의 아름다움", "최상의 서비스", "품격있는 쇼핑"을 위한 당신의 선택,<br/>신라면세점이 최고의 면세 쇼핑 서비스를 제공하고 있습니다.`,
        description: `신라면세점에서는 화장품, 향수 등 유명 뷰티 브랜드와 루이뷔통, 샤넬, 에르메스, 구찌 등 글로벌 명품 브랜드에서부터<br> 트랜디한 상품 패션 및 각종 주류까지 
                    총 1,300여 종의 다채로운 브랜드들을 만나보실 수 있습니다.<br> 
                    또한 세계 유일의 아시아 3대 국제공항 동시 입점 면세점으로, 아시아 3대 허브공항인 인청국제공항, 싱가포르 국제공항, 홍콩 국제공항에서도 신라면세점을 경험하실 수 있습니다.`,
        tel: "1688-1110",
    };

    const locationData = [
        { title: '서울점 운영시간', content: '09:30 ~ 20:00 (연중무휴)' },
    ]

    const btnData = "신라면세점 홈페이지"

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
                                <Button2 propBtn={btnData} />
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

export default Shopping2