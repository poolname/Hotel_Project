import React, { useEffect } from 'react';
import Header from '../common/Header';
import Tab2 from './Tab2';
import SubTitle from './SubTitle';
import Gallery2 from './Gallery2';
import Introduction from './Introduction';
import Location from './Location';
import Desc from './Desc';
import Footer from '../common/Footer';

import "../../scss/common.scss"
import "../../scss/header.scss"
import "../../scss/footer.scss"
import "../../scss/sub-list.scss"
import "../../scss/sub-detail.scss"

function Fitness() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const galleryImages = "../../img/sub/R00000009M89_KR.jpg";

    const introData = {
        title: "서울신라호텔의 실내 수영장은 신라 피트니스 회원과 투숙객만을 위한 공간으로<br/> 사계절 내내 쾌적하고 여유로운 수영을 즐길 수 있습니다.",
        description: `'자연과 하나되는 Relaxatuon 공간'<br/>
                    유리돔을 통해 보이는 남산의 전경을 만끽하며 수영과 휴식을 함께 즐길 수 있는 공간입니다.<br/>
                    길이 25m, 너비 6m의 풀로 이루어져 있으며, 건식 사우나와 실내 및 야외 자쿠지를 갖추고 있습니다. <br/>
                    회원과 투숙객을 위해 별도의 락커룸을 제공합니다.`,
        tel: "02-2230-3521",
    };

    const locationData = [
        { title: '위치', content: '서울신라호텔 3층 피트니스' },
        { title: '운영시간', content: '06:00 ~ 22:00' },
        { title: '정기휴일', content: '매월 세 번째 수요일' },
    ]

    const descData = [
        {
            intro: '2024년 9월 세 번째 수요일(9/18)인 추석(공휴일)은 정상 영업하며, 피스니스 정기 휴무일은 9월 25일로 변경됩니다.',
            rules: [],
        },
        {
            intro: '고객 여러분의 안전을 위하여 다음과 같이 실내 수영장 이용 규정을 준수해 주시기 바랍니다.',
            rules: [
                '실내 수영장과 릴렉세이션 존(실내 자쿠지, 야외 자쿠지, 건식 사우나)은 성인 고객 전용 시설로서, 안전을 위해 만 13세 이상인 고객에 한해 이용 가능합니다. (단, 주말 및 공휴일에는 성인 보호자의 보호 하에 만 13세 미만인 고객이 이용 가능하며, 신장 140cm 미만인 고객은 성인 보호자의 보호 하에 구명 조끼 착용 시 이용 가능합니다.)',
                '수영장에서 다이빙은 금지되어 있습니다.',
                '샤워실 및 탈의실 이용 시 만 4세 이상 어린이는 혼성 입장이 불가합니다.',
                '적정 인원 초과 시 이용을 위해 대기하실 수 있습니다.',
                '고객 여러분의 안전을 위하여 음주 후 체육관, 사우나, 실내 수영장 등의 피트니스 시설 이용은 제한될 수 있습니다.',
                '목 튜브를 포함한 모든 종류의 튜브, 스노클 장비, 오리발, 수중 프로펠러 등은 사용하실 수 없습니다.',
                '수영복 착용 시에만 이용 가능하며 풀(Pool) 내에서의 체육복 및 평상복 착용은 불가합니다.',
                '실내 수영장과 어번 아일랜드는 별도로 운영되고 있습니다.',
            ],
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
                                        <Desc propDesc = {descData} />
                                    </div>
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

export default Fitness