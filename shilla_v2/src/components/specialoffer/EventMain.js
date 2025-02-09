import React from "react";
import "../../scss/sub01_02.scss";
import EventMain1 from "./EventMain1";
import EventMain3 from "./EventMain3";
const eventlists = [
    {
        id: "1",
        img: "../../img/sub/eventVietnam2.jpg",
        keword: "The Parkview",
        title: "Taste of Vietnam",
        des: "더 파크뷰에서 경험하는 베트남 미식 여행",
        date: "2024-09-24 ~ 2024-09-26",
        price: "92,000 원",
        link: "detail/1",
    },
    {
        id: "2",
        img: "../../img/sub/eventSweet2.jpg",
        keword: "Pastry Boutique",
        title: "A Marriage of Sweet Aromas",
        des: "패스트리 부티크에서 샤인머스캣 쇼트케이크를 선보입니다.",
        date: "2024-09-09 ~ 2024-11-30",
        price: "92,000 원",
        link: "detail/2",
    },
    {
        id: "3",
        img: "../../img/sub/eventMenu.jpg",
        keword: "Ariake",
        title: "秋麗 - Akiurara Event Menu",
        des: "아키우라라 가을 이벤트 메뉴",
        date: "2024-09-09 ~ 2024-10-31",
        price: "180,000 원 ~",
        link: "detail/3",
    },
    {
        id: "4",
        img: "../../img/sub/eventPopera2.jpg",
        keword: "The Library",
        title: "Popera Whisky Serenade",
        des: "팝페라 공연과 함께 즐기는 위스키와 푸드",
        date: "2024-09-27 ~ 2024-10-05",
        price: "290,000 원 ~",
        link: "detail/4",
    },
    {
        id: "5",
        img: "../../img/sub/eventBingsky2.jpg",
        keword: "The Library",
        title: "A Match Made In Heaven, Bingsky",
        des: "더 라이브러리 벌집꿀 아포카토 빙수와 위스키",
        date: "2024-09-09 ~ 2024-11-30",
        price: "118,000 원",
        link: "detail/5",
    },
    {
        id: "6",
        img: "../../img/sub/eventTea.jpg",
        keword: "The Library",
        title: "Rich Autumn Royal Tea",
        des: "가을의 풍성함을 담은 로열티 세트",
        date: "2024-09-24 ~ 2024-09-26",
        price: "120,000 원",
        link: "detail/6",
    },
    {
        id: "7",
        img: "../../img/sub/eventHaute.jpg",
        keword: "The Parkview",
        title: "Haute Cuisine",
        des: "시그니처 메뉴로 구성된 요리와 함께 한정된 룸에서만 제공되는 Haute Cuisine",
        date: "2024-09-24 ~ 2024-09-26",
        price: "",
        link: "detail/7",
    },
    {
        id: "8",
        img: "../../img/sub/eventOcean.jpg",
        keword: "Palsun",
        title: "Ocean Breeze",
        des: "이벤트 메뉴 Ocean Breeze",
        date: "2024-08-02 ~ 2024-10-31",
        price: "250,000 원",
        link: "detail/8",
    },
    {
        id: "9",
        img: "../../img/sub/eventWhisky2.jpg",
        keword: "The Distillers Library",
        title: "The Exclusive Launch of The Balvenie Limited Edition Whisky",
        des: "더 디스틸러스 라이브러리에서만 만나볼 수 있는 발베니 한정판 위스키",
        date: "2024-08-27 ~ 2024-12-31",
        price: "",
        link: "detail/9",
    },
    {
        id: "10",
        img: "../../img/sub/eventMemory2.jpg",
        keword: "Continental",
        title: "An Enchanting Memory",
        des: "테이블 L'amour 105에서 영원히 기억에 남을 프로포즈 순간",
        date: "2024-08-27 ~ 2024-12-31",
        price: "1,300,000 원",
        link: "detail/10",
    },
    // {
    //     id: "11",
    //     img: "../../img/sub/eventDelights.jpg",
    //     keword: "The Library",
    //     title: "Aperitivo Delights",
    //     des: "더 라이브러리에서 새롭게 선보이는 Bar 메뉴와 페어링 와인",
    //     date: "2024-08-27 ~ 2024-12-31",
    //     price: "140,000 원",
    //     link: "",
    // },
    // {
    //     id: "12",
    //     img: "../../img/sub/eventMi.jpg",
    //     keword: "Palsun",
    //     title: "美肴",
    //     des: "이벤트 메뉴 '미효'",
    //     date: "2024-08-27 ~ 2024-12-31",
    //     price: "135,000 원 ~",
    //     link: "",
    // },
    {
        id: "11",
        img: "../../img/sub/eventTeddy2.jpg",
        keword: "Pastry Boutique",
        title: "Shilla Bear X Blue Dragon Keyring Limited Edition",
        des: "패스트리 부티크의 24년 한정판 블루 드래곤 키링",
        date: "2024-08-27 ~ 2024-12-31",
        price: "45,000 원",
        link: "detail/11",
    },
    {
        id: "12",
        img: "../../img/sub/eventBirth.jpg",
        keword: "The Parkview",
        title: "Birthday Bear Key Ring Special",
        des: "더 파크뷰 생일자 키링 이벤트",
        date: "2024-08-27 ~ 2024-12-31",
        price: "",
        link: "detail/12",
    },
];
const EventMain = () => {
    return (
        // {/* <!--다이닝이벤트 리스트--> */}
        <div className="event-container">
            <ul className="event-list list-item">
                {eventlists.map(list => (
                    <EventMain1 data={list} key={list.id} />
                ))}
            </ul>
            {/* <!-- 이벤트--> */}
            <ul className="list-item">
                <EventMain3 />
            </ul>
        </div>
    );
};

export default EventMain;
