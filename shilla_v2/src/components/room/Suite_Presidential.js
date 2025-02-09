import Header from  "../common/Header";
import Tab3 from "./Tab3";
import SubTitle from "./SubTitle";
import SwiperGallery from "./SwiperGallery";
import Introduction from "./Introduction";
import Popup from "../room/Popup";
import RoomInfo from "../room/RoomInfo";
import RoomAmenity from "../room/RoomAmenity";
import RoomGuide2 from "../room/RoomGuide2";
import Footer from  "../common/Footer";

import "../../scss/common.scss";
import "../../scss/reset.css";
import "../../scss/header.scss";
import "../../scss/footer.scss";
import "../../scss/sub-list.scss";
import "../../scss/sub-detail.scss";
import "../../scss/sub-room.scss";
import "../../scss/swiperStyles.css";

import React, { useState, useEffect } from "react";

function Suite_Presidential() {
    const galleryImgs = [
        "../../img/sub/roomSuitePresidential01.jpg",
        "../../img/sub/roomSuitePresidential02.jpg",
        "../../img/sub/roomSuitePresidential03.jpg",
        "../../img/sub/roomSuitePresidential04.jpg",
    ];

    const roomFloorImages = [
        {
            title: "South",
            src: "../../img/sub/roomSuitePresidentialFloor01.jpg",
        },
        {
            title: "North",
            src: "../../img/sub/roomSuitePresidentialFloor02.jpg",
        },
    ];

    const roomIntro = [
        {
            title: "프레지덴셜 스위트",
            description: "프레지덴셜 스위트는 서울신라호텔 최고의 객실로 전세계 국빈과 VIP 고객만을 위한 전용 객실입니다.",
            subDescription: [
                "고풍스러운 프렌치 디자인의 North Wing 객실과 모던한 스타일 South Wing 객실로 2가지 타입의 프레지덴셜 스위트가 있습니다."
            ]
        }
    ];

    const roomInfo = [
        {
            title: "위치",
            description: "서울신라호텔 22층",
        },
        {
            title: "전망",
            description: "남산 또는 시티 뷰"
        },
        {
            title: "침대",
            description: "더블(킹 사이즈)"
        },
        {
            title: "크기",
            description: "290㎡ / 380㎡"
        },
        {
            title: "룸구성",
            description: [
                "North Wing : 침실 2, 욕실 2, 사우나 1, 화장실 3, 응접실 1, 집무실 1, 다이닝 룸 1",
                "South Wing : 침실 2, 욕실 2, 화장실 3, 응접실 1, 집무실 1, 다이닝 룸 1"
            ],
        },
        {
            title: "문의",
            description: "02-2230-3310",
        },
    ]

    const roomAmenity = [
        {
            title: "Bath Room",
            description: [
                "100% 코튼 목욕 가운",
                "비상벨",
                "레인 샤워",
                "핸드 타월",
                "페이스 타월",
                "배스 타월",
                "화장품(몰튼 브라운)",
                "머리빗",
                "코튼 세트(면봉 & 화장솜)",
                "원격 조정 비데 일체형 변기",
                "헤어 드라이어",
                "디지털 체중계"
            ]
        },
        {
            title: "Bed Room",
            description: [
                "스마트 TV",
                "Technology Kit(HDMI, USB, LAN)",
                "개별 냉·난방 조절기",
                "자동 블라인드",
                "전화기",
                "시몬스 프리미엄 침대(Beauty Rest)",
                "거위털 이불 & 베개",
                "턴다운 서비스",
                "기능성 베개",
                "잡지",
            ]
        },
        {
            title: "Private Bar",
            description: [
                "냉장고",
                "얼음 서비스",
                "전기 주전자",
                "와인잔",
                "위스키잔",
                "물컵",
                "찻잔",
                "무료 티",
                "무료 커피",
                "무료 생수",
            ]
        },
        {            
            title: "Closet",
            description: [
                "개인 금고",
                "전신 거울",
                "슬리퍼(남, 여)",
                "우산",
                "구두 클리너",
                "비상용 휴대 조명기기",
            ]
        }
    ]

    const roomGuide2 = [
        {
            title: "체크인/체크아웃",
            description: [
                "체크인 : 오후 3시 이후",
                "체크아웃 : 오전 11시까지"
            ]
        },
        {
            title: "조식 이용 안내",
            description: [
                "더 파크뷰 06:00~10:00(주중/주말/공휴일)"
            ]
        },
        {
            title: "취소/변경/노쇼(No-show)",
            description: [
                "[성수기(5월~10월, 12월24일~31일)]",
                "숙박 예정일 7일 전 18시까지는 위약금 없음",
                "숙박 예정일 7일 전 18시 이후 취소/변경 발생 시, 최초 1일 숙박 요금의 10%가 위약금으로 부과",
                "숙박 예정일 5일 전 18시 이후 취소/변경 발생 시, 최초 1일 숙박 요금의 30%가 위약금으로 부과",
                "숙박 예정일 3일 전 18시 이후 취소/변경 발생 시, 최초 1일 숙박 요금의 50%가 위약금으로 부과",
                "숙박 예정일 1일 전 18시 이후 취소/변경 발생 시, 최초 1일 숙박 요금의 80%가 위약금으로 부과",
                "[비수기(성수기 외 기간)]",
                "숙박 예정일 2일 전 18시까지는 위약금 없음",
                "숙박 예정일 2일 전 18시 이후 취소/변경/노쇼 발생 시, 최초 1일 숙박 요금의 10%가 위약금으로 부과",
            ]
        },
        {
            title: "객실 이용",
            description: [
                "65인치 스마트 TV(위성 TV 48개 채널)",
                "50~100Mbps 초고속 유·무선(wifi) 인터넷 무료",
                "220V, 110V 전압 사용 가능",
                "커피·차 티백 무료 제공",
                "엑스트라 베드 1개 추가 60,000원/1박",
                "베이비 크립(무료)",
            ]
        },
        {
            title: "룸서비스",
            description: [
                "객실에서 즐기실 수 있는 다양한 룸서비스 메뉴가 준비되어 있습니다.",
                "식사 및 음료 : 24시간 서비스",
                "중식, 일식 : 점심 12:00~13:30, 저녁 17:30~20:30",
            ]
        },
    ]

    useEffect(() => {
        document.title = "신라호텔 - 프레지덴셜 스위트";
    }, []);

    return (
        <>
            <Header />
            <div className="container">
                <div className="center">
                    <div className="depth3-tab-wrap">
                        <Tab3 />
                        <div className="tab-contents">
                            <div className="tab-cont cont1 on">
                                <SubTitle />
                                <SwiperGallery galleryImgs={ galleryImgs } />
                                <div className="context">
                                    <Introduction introItem={roomIntro[0]} />
                                    <Popup images={roomFloorImages} />
                                    <RoomInfo roomInfo={roomInfo} />
                                    <RoomAmenity roomAmenity={roomAmenity} />
                                    <RoomGuide2 roomGuide2={roomGuide2} />
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

export default Suite_Presidential;