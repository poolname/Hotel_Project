import React from "react";
import "../../scss/sub01_01_sub135.scss";

const OfferDetail1_pkgdes = () => {
    const maindetail = [
        {
            img: "/img/sub/offerRose.jpg",
            title: "Pink Rose Decoration & Welcome Champagne",
            content: [
                {
                    des: "플라워 박스를 포함한 생화와 핑크 벌론, LED 캔들로 꾸며진 데커레이션과 로맨틱한 순간을 기념하는 Montaudon La Grand Rose 샴페인",
                },
                {
                    des: "플라워 박스 외에는 별도의 플라워 패키징 서비스를 제공하지 않습니다.",
                    cName: "item-before",
                },
                {
                    des: "데커레이션 관련 세부 문의 사항은 서울신라호텔 플라워부티크 (02-2230-3759)로 연락 주시기 바랍니다.",
                    cName: "item-before",
                },
            ],
        },
    ];
    return (
        <>
            {/* <!-- 패키지 상세설명1 --> */}
            {maindetail.map((item, idx) => {
                return (
                    <div
                        className="description-main"
                        key={`${item.img}-${idx}`}
                    >
                        <img src={item.img} />
                        <p className="des-title">{item.title}</p>
                        <ul className="des-wrap">
                            {item.content.map((con, i) => (
                                <div key={`${con.des}-${i}`}>
                                    <li className={con.cName || ""}>
                                        {con.des}
                                    </li>
                                </div>
                            ))}
                        </ul>
                    </div>
                );
            })}
        </>
    );
};

export default OfferDetail1_pkgdes;
