import Header from  "../common/Header";
import SubTitle from "./SubTitle";
import SwiperGallery from "./SwiperGallery";
import Introduction3 from "./Introduction3";
import Popup from "../room/Popup";
import RoomInfo2 from "../room/RoomInfo2";
import RoomGuide3 from "../room/RoomGuide3";
import Footer from  "../common/Footer";

import "../../scss/common.scss";
import "../../scss/reset.css";
import "../../scss/header.scss";
import "../../scss/footer.scss";
import "../../scss/sub-list.scss";
import "../../scss/sub-detail.scss";
import "../../scss/sub-room.scss";
import "../../scss/swiperStyles.css";

import React, { useEffect } from "react";

function Lounge_ExecutiveLounge() {
    const galleryImgs = [
        "../../img/sub/executiveLounge01.jpg",
        "../../img/sub/executiveLounge02.jpg",
        "../../img/sub/executiveLounge03.jpg",
        "../../img/sub/executiveLounge04.jpg",
    ];

    const roomFloorImages = [
        {
            title: "더 이그제큐티브 라운지",
            src: "../../img/sub/loungeFloor.jpg",
        },
    ];

    const roomIntro = [
        {
            title: "더 이그제큐티브 라운지",
            description: "세계 어느 곳에서도 찾을 수 없는 최고 수준의 더 이그제큐티브 라운지",
            subDescription: [
                "신라만의 품격이 묻어나는 차별화된 비즈니스 라이프스타일을 제안합니다.",
                "더 이그제큐티브 라운지는 고급스러운 펜트하우스의 응접실을 콘셉트로 구현한 투숙객 전용 비즈니스 공간입니다.",
                "23층 최상층에 위치해 남산의 사계절 풍광과 도시의 전경이 그림처럼 펼쳐지는 더 이그제큐티브 라운지에서 특별한 다이닝 경험을 체험해보시기 바랍니다.",
            ]
        }
    ];

    const roomInfo2 = [
        {
            title: "Breakfast",
            description: [
                "06:30 ~ 10:00",
                "단, 토, 일요일 및 공휴일은 06:30~10:30",
                "호텔 사정에 따라 더 파크뷰 조식으로 대체 제공될 수 있으며, 체크인 시 확인 가능합니다.",
            ]
        },
        {
            title: "Afternoon Tea",
            description: "15:30 ~ 17:00",
        },
        {
            title: "Happy Hour",
            description: "18:00 ~ 22:00",
        }
    ]

    const roomGuide3 = [
        {
            title: "체크인/체크아웃",
            description: [
                "더 이그제큐티브 라운지에서의 신속한 익스프레스 체크인/체크아웃 서비스",
            ]
        },
        {
            title: "룸서비스",
            description: [                
                "더 이그제큐티브 라운지 내 회의실은 투숙 기간 동안 1회(1시간) 무료 이용 가능(사전 예약 필요)",
                "개별 컨시어지 서비스",
                "국내외 신문, 잡지 등 비치",
                "라운지 및 객실에서의 무료 인터넷",
                "라운지는 투숙객 전용 비즈니스 공간으로 만 13세 이상 고객에 한해 출입이 가능합니다.",
                "더 이그제큐티브 라운지 포함 투숙객께서는 평일 주중에 한해(금, 토, 일 및 공휴일 제외) 동반하신 외부 고객 2인까지 유료로 입장 가능",
            ]
        },
    ]

    useEffect(() => {
        document.title = "신라호텔 - 더 이그제큐티브 라운지";
    }, []);
    

    return (
        <>
            <Header />
            <div className="container lounge">
                <div className="center">
                    <div className="depth3-tab-wrap">
                        <div className="tab-contents">
                            <div className="tab-cont cont1 on">
                                <SubTitle />
                                <SwiperGallery galleryImgs={ galleryImgs } />
                                <div className="context">
                                    <Introduction3 introItem={roomIntro[0]} />
                                    <Popup images={roomFloorImages} />
                                    <RoomInfo2 roomInfo2={roomInfo2} />
                                    <RoomGuide3 roomGuide3={roomGuide3} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Lounge_ExecutiveLounge;