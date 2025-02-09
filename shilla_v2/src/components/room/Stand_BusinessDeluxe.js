import Header from  "../common/Header";
import Tab from './Tab';
import SubTitle from './SubTitle';
import SwiperGallery from './SwiperGallery';
import Introduction from './Introduction';
import Popup from '../room/Popup';
import RoomInfo from '../room/RoomInfo';
import RoomAmenity from '../room/RoomAmenity';
import RoomGuide from './RoomGuide';
import Footer from "../common/Footer";

import '../../scss/common.scss';
import '../../scss/reset.css';
import "../../scss/header.scss";
import "../../scss/footer.scss";
import '../../scss/sub-list.scss';
import '../../scss/sub-detail.scss';
import '../../scss/sub-room.scss';
import '../../scss/swiperStyles.css';

import React, { useState, useEffect } from 'react';

function Stand_BusinessDeluxe() {
    const galleryImgs = [
        "../../img/sub/roomStandardBusiness01.jpg",
        "../../img/sub/roomStandardBusiness02.jpg",
        "../../img/sub/roomStandardBusiness03.jpg",
        "../../img/sub/roomStandardBusiness04.jpg",
    ]
    
    const roomFloorImages = [
        {
            title: '비즈니스 디럭스 더블',
            src: "../../img/sub/roomStandardBusinessFloor01.jpg",
        },
        {
            title: '비즈니스 디럭스 트윈',
            src: "../../img/sub/roomStandardBusinessFloor02.jpg",
        }
    ]

    const roomIntro = [
        {
            title: "비즈니스 디럭스",
            description: "비즈니스 디럭스 룸은 휴식이 필요한 비즈니스 고객을 위해 특별하게 설계된 객실입니다.",
            subDescription: [
                "글로벌 럭셔리 호텔 디자이너 피터 리미디오스가 디자인한 '시대를 아우르는 모던함'을 만나보십시오.",
                "요트 콘셉트로 구성한 프라이빗 바와 세계적인 수준의 침구류와 함께 생애 최고의 휴식을 경험해보시기 바랍니다."
            ]
        }
    ]

    const roomInfo = [
        {
            title: "위치",
            description: "서울신라호텔 7~22층"
        },
        {
            title: "전망",
            description: "남산 또는 시티 뷰"
        },
        {
            title: "침대",
            description: "더블(킹 사이즈), 트윈"
        },
        {
            title: "크기",
            description: "43㎡"
        },
        {
            title: "룸구성",
            description: "침실 1, 욕실 1, 화장실 1"
        },
        {
            title: "문의",
            description: "02-2230-3310"
        }
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
                "디지털 체중계",
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
            ]
        },
    ]

    const roomGuide = [
        {
            title: "체크인/체크아웃",
            description: [
                "체크인 : 오후 3시 이후",
                "체크아웃 : 오전 11시까지",
            ]
        },
        {
            title: "조식 이용 안내",
            description: [
                "더 파크뷰 06:00~10:00(주중/주말/공휴일)",
            ]
        },
        {
            title: "취소/변경/노쇼(No-show)",
            description: [
                "숙박 예정일 1일 전 18시까지는 위약금 없음",
                "숙박 예정일 1일 전 18시 이후 취소/변경/노쇼 발생 시",
                "성수기(5월~10월, 12월24일~31일) : 최초 1일 숙박 요금의 80%가 위약금으로 부과",
                "비수기(성수기 외 기간) : 최초 1일 숙박 요금의 10%가 위약금으로 부과"
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
        document.title = "신라호텔 - 비즈니스 디럭스";
    }, []);

    const [room, roomSet] = useState(roomIntro);

    return (
        <>
        <Header />
            <div className="container">
                <div className="center">
                    <div className="depth3-tab-wrap">
                        <Tab />
                        <div className="tab-contents">
                            <div className="tab-cont cont1 on">
                                <SubTitle />
                                <SwiperGallery galleryImgs={ galleryImgs } />
                                <div className="context">
                                    <Introduction introItem={roomIntro[0]} />
                                    <Popup images={roomFloorImages} />
                                    <RoomInfo roomInfo={roomInfo} />
                                    <RoomAmenity roomAmenity={roomAmenity} />
                                    <RoomGuide roomGuide={roomGuide} />
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

export default Stand_BusinessDeluxe;