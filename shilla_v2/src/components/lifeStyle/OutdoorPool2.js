import React, { useEffect } from 'react';
import Header from '../common/Header';
import Tab from "./Tab";
import SubTitle from './SubTitle';
import Gallery from './Gallery';
import Introduction from './Introduction';
import Location from './Location';
import Button from './Button';
import MapPopUp from './MapPopUp';
import InfoTable from './InfoTable';
import InfoRule from './InfoRule';
import Footer from '../common/Footer';

import "../../scss/common.scss"
import "../../scss/header.scss"
import "../../scss/footer.scss"
import "../../scss/sub-list.scss"
import "../../scss/sub-detail.scss"



function OutdoorPool2() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const galleryImages = [
        "../../img/sub/cabana-01.jpg",
        "../../img/sub/cabana-02.jpg",
        "../../img/sub/cabana-03.jpg",
        "../../img/sub/cabana-04.jpg",
        "../../img/sub/cabana-05.jpg",
        "../../img/sub/cabana-06.jpg"
    ];

    const introData = {
        title: "프라이빗하고 여유로운 휴식과 함께 낭만적인 시간을 만들어드립니다.",
        description: `어번 아일랜드(Urban Island)에서 더욱 여유로운 시간을 즐길 수 있는 다양한 스타일의 카바나를 제안합니다.<br/>
                    소중한 사람들과 함께하는 여유로운 휴식, 그리고 낭만적인 순간을 경험해 보십시오.`,
        tel: "02-2230-3528~9",
    };

    const locationData = [
        { title: '위치', content: '서울신라호텔 3층' }
    ];

    const tableData = {
        headers: ["구분", "F1 ~ F2", "F3 ~ F6", "Gathering", "K1 ~ K4"],
        rows: [
            { 구분: "9/1 ~9/30", data: ["1,080,000원", "930,000원", "1,080,000원", "570,000원"] },
            { 구분: "10/1~10/31", data: ["790,000원", "650,000원", "990,000원", "500,000원"] },
        ],
        혜택: "- 식음료 기본세트 포함<br/>- 어번 아일랜드 운영 시간 동안 이용 가능",
    };

    const btnData = "Cabana Map"
    const MapImage = "../../img/sub/cabana-map.jpg";

    return (
        <>
        <Header/>
        <div className="container">
            <div className="center">
                <div className="depth3-tab-wrap">
                    <Tab />
                    <div className="tab-contents">
                        <div className="tab-cont cont1 on">
                            <SubTitle />
                            <Gallery propImages={galleryImages} />

                            <div className="context">
                                <Introduction {...introData} />
                                <div className="info-wrap mt-0">
                                    <Location propLocation = {locationData}/>
                                    <Button propBtn={btnData}/>
                                    <MapPopUp propImage={MapImage} propBtn={btnData}/>
                                </div>
                                <InfoTable propData={tableData} />
                                <InfoRule />
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

export default OutdoorPool2;