import React from "react";
import "../../scss/sub01_02.scss";
import EventMain1 from "./EventMain1";
const events = [
    {
        id: "1",
        img: "../../img/sub/eventBeer.jpg",
        title: "Urban Island Sip & Snack Hour",
        des: "어번 아일랜드에서 즐기는 해피 아워!",
        date: "2025-01-01 ~",
        link: "detail/13",
    },
    {
        id: "2",
        img: "../../img/sub/eventDj.jpg",
        title: "Urban DJ Night Serenade",
        des: "어번 아일랜드에서 DJ가 들려주는 다양한 음악의 향연",
        date: "2024-12-24 ~",
        link: "detail/14",
    },
    {
        id: "3",
        img: "../../img/sub/eventKids.jpg",
        title: "Kids Lounge 운영 안내",
        des: "수백여 권의 도서와 자연 소재의 원목 장난감으로 가득 채워진 공간에서 소중한 추억을 만들어 보세요.",
        date: "2024-03-04 ~ 2024-12-31",
        link: "detail/15",
    },
    {
        id: "4",
        img: "../../img/sub/offerMain1.jpg",
        title: "Urban Cabana",
        des: "어번 아일랜드의 프라이빗한 카바나에서 즐기는 도심 속 여유로운 휴식",
        date: "2024-11-01 ~",
        link: "detail/16",
    },
];
const EventMain3 = () => {
    return (
        <>
            <h2 className="event-title">EVENT</h2>
            <div className="event-container">
                <ul className="list-item">
                    {events.map(item => (
                        <EventMain1 data={item} key={item.id} />
                    ))}
                </ul>
            </div>
        </>
    );
};

export default EventMain3;
