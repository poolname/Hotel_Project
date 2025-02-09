import React from "react";

const OfferDetail1_pkgdesA = () => {
    const pkgcards = [
        {
            id: 1,
            img: "../../img/sub/offerRose.jpg",
            title: "Pink Rose Decoration & Welcome Champagne",
            description: [
                {
                    cName: "item",
                    des: "플라워 박스를 포함한 생화와 핑크 벌론, LED 캔들로 꾸며진 데커레이션과 로맨틱한 순간을 기념하는 Montaudon La Grand Rose 샴페인",
                },
                {
                    cName: "item-before",
                    des: "플라워 박스 외에는 별도의 플라워 패키징 서비스를 제공하지 않습니다.",
                },
                {
                    cName: "item-before",
                    des: "데커레이션 관련 세부 문의 사항은 서울신라호텔 플라워 부티크 (02-2230-3759)로 연락 주시기 바랍니다.",
                },
            ],
        },
        {
            id: 2,
            img: "../../img/sub/eventTeddy2.jpg",
            title: "Shilla Bear",
            description: [
                {
                    cName: "item",
                    des: "신라베어의 블루 드래곤 키링이 여러분에게 희망과 행운을 안겨드립니다.",
                },
            ],
        },
        {
            id: 3,
            img: "../../img/sub/offerGrand.jpg",
            title: "Superior Suite",
            description: [
                {
                    cName: "item",
                    des: "영빈관이 내려다보이는 수페리어 스위트에서 보내는 아늑한 시간",
                },
            ],
        },
        {
            id: 4,
            img: "../../img/sub/offerRoom3.jpg",
            title: "Premier Suite",
            description: [
                {
                    cName: "item",
                    des: "여유로운 공간감이 돋보이는 프리미어 스위트에서 보내는 쾌적한 시간",
                },
            ],
        },
    ];
    return (
        <>
            {/* <!-- 패키지 상세설명 반응형 --> */}
            <div className="accordion-description-wrap">
                {pkgcards.map((item, index) => (
                    <div className="accordion-description" key={index}>
                        <div className="head-wrap">
                            <img src={item.img} />
                            <p className="slide-text">{item.title}</p>
                        </div>
                        <ul className="des-wrap">
                            {item.description.map((con, idx) => (
                                <li className={con.cName} key={idx}>
                                    {" "}
                                    {con.des}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </>
    );
};

export default OfferDetail1_pkgdesA;
