import '../../scss/reset.css';
import '../../scss/common.scss';
import '../../scss/sub02.scss';
import "../../scss/sub-list.scss";
import "../../scss/sub-detail.scss";
import { useState, useEffect } from 'react';
import RoomCont1 from './RoomCont1';
import RoomCont2 from './RoomCont2';

const RoomContainer = () => {
    const RoomTypeData = [
        {
            type: '스탠다드',
            RoomBox: [
                {
                    link: "/standard",
                    img: "/img/sub/roomStandardDelux01.jpg",
                    title: '디럭스',
                    subTitle: '아늑하면서 효율적인 공간',
                    description1: '침대타입 : 더블(킹 사이즈), 트윈',
                    description2: '객실크기 : 36㎡',
                },
                {
                    link: "/standard/businessDeluxe",
                    img: "/img/sub/roomStandardBusiness01.jpg",
                    title: '비즈니스 디럭스',
                    subTitle: '휴식이 필요한 비즈니스 고객을 위한 공간',
                    description1: '침대타입 : 더블(킹 사이즈), 트윈',
                    description2: '객실크기 : 43㎡',
                },
                {
                    link: "/standard/barrierFreeDeluxe",
                    img: "/img/sub/roomStandardBarrierFree01.jpg",
                    title: '배리어프리 비즈니스 디럭스',
                    subTitle: '모두가 편리하게 이용하도록 설계된 공간',
                    description1: '침대타입 : 더블(킹 사이즈)',
                    description2: '객실크기 : 43㎡',
                },
                {
                    link: "/standard/grandCornerDeluxe",
                    img: "/img/sub/roomStandardGrand01.jpg",
                    title: '그랜드 코너 디럭스',
                    subTitle: '여유로운 휴식을 위한 공간',
                    description1: '침대타입 : 더블(킹 사이즈)',
                    description2: '객실크기 : 51㎡',
                },
            ]
        },
        {
            type: '이그제큐티브',
            RoomBox: [
                {
                    link: "/executive",
                    img: "/img/sub/roomExecutiveBusiness01.jpg",
                    title: '이그제큐티브 비즈니스 디럭스',
                    subTitle: '휴식이 필요한 비즈니스 고객을 위한 공간',
                    description1: '침대타입 : 더블(킹 사이즈), 트윈',
                    description2: '객실크기 : 43㎡',
                },
                {
                    link: "/executive/execGrandDeluxe",
                    img: "/img/sub/roomExecutiveGrand01.jpg",
                    title: '이그제큐티브 그랜드 디럭스',
                    subTitle: '여유로운 만족을 위한 공간',
                    description1: '침대타입 : 더블(킹 사이즈)',
                    description2: '객실크기 : 53㎡',
                },
            ]
        },
        {
            type: '스위트',
            RoomBox: [
                {
                    link: "/suite",
                    img: "/img/sub/roomSuiteCorner01.jpg",
                    title: '수페리어 스위트',
                    subTitle: '영빈관이 내려다 보이는 아늑하고 모던한 공간',
                    description1: '침대타입 : 더블(킹 사이즈), 트윈',
                    description2: '객실크기 : 66㎡',
                },
                {
                    link: "/suite/korean",
                    img: "/img/sub/roomSuiteKorean01.jpg",
                    title: '코리안 스위트',
                    subTitle: '한국 전통의 미를 경험할 수 있는 단 하나 뿐인 공간',
                    description1: '침대타입 : 더블(킹 사이즈)',
                    description2: '객실크기 : 66㎡',
                },
                {
                    link: "/suite/corner",
                    img: "/img/sub/roomSuiteCorner01.jpg",
                    title: '코너 스위트',
                    subTitle: '조용하고 안락한 분위기의 여유로운 공간',
                    description1: '침대타입 : 더블(킹 사이즈), 트윈',
                    description2: '객실크기 : 68㎡',
                },
                {
                    link: "/suite/premier",
                    img: "/img/sub/roomSuitePremier01.jpg",
                    title: '프리미어 스위트',
                    subTitle: '비즈니스와 휴식을 동시에 취할 수 있는 공간',
                    description1: '침대타입 : 더블(킹 사이즈), 트윈',
                    description2: '객실크기 : 84㎡',
                },
                {
                    link: "/suite/royal",
                    img: "/img/sub/roomSuiteRoyal01.jpg",
                    title: '로열 스위트',
                    subTitle: '모던한 분위기의 고급스러운 공간',
                    description1: '침대타입 : 더블(킹 사이즈), 트윈',
                    description2: '객실크기 : 124㎡',
                },
                {
                    link: "/suite/shilla",
                    img: "/img/sub/roomSuiteShilla01.jpg",
                    title: '신라 스위트',
                    subTitle: '신라만의 특별한 서비스와 경험을 누릴 수 있는 공간',
                    description1: '침대타입 : 더블(킹 사이즈)',
                    description2: '객실크기 : 159㎡',
                },
                {
                    link: "/suite/presidential",
                    img: "/img/sub/roomSuitePresidential01.jpg",
                    title: '프레지덴셜 스위트',
                    subTitle: '세상의 모든 품격과 럭셔리함을 갖춘 공간',
                    description1: '침대타입 : 더블(킹 사이즈)',
                    description2: '객실크기 : 290㎡ / 380㎡',
                },
            ]
        },
        {
            type: '라운지',
            RoomBox: [
                {
                    link: "/executiveLounge",
                    img: "/img/sub/executiveLounge01.jpg",
                    title: '더 이그제큐티브 라운지',
                    subTitle: '고급스러운 펜트하우스의 응접실을 콘셉트로 구현한 투숙객 전용 비즈니스 공간',
                    description1: '',
                    description2: '',
                },
            ]
        },
    ]

    useEffect (() => {
        document.title = "신라호텔 - 객실"
    }, [])

    const [space, spaceSet] = useState(RoomTypeData)

    return (
        <div className="container">
            <div className="center">
                <RoomCont1/>
                <RoomCont2 space={space}/>
            </div>
        </div>
    );
}

export default RoomContainer;