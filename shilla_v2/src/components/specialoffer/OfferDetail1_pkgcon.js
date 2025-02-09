import React from "react";
import { Link } from "react-router-dom";
import "../../scss/sub01_01_sub135.scss";

const OfferDetail1_pkgcon = ({ img }) => {
    const pkgdata = [
        {
            title: "객실타입 및 가격",
            item: [
                "[수페리어 스위트] 1,400,000원 ~",
                "[프리미어 스위트] 2,000,000원 ~",
            ],
            link: "/suite",
        },
        {
            title: "기간",
            item: [
                "2024년 4월 1일 ~ 10월 5일",
                "※ 제외 기간 : 9월 14일 ~ 9월 18일",
                "※ 본 상품은 체크인 3일 전까지 예약가능합니다.",
                "※ 투숙일에 따라 금액은 변동됩니다.",
            ],
        },
        {
            title: "공통혜택",
            item: [
                {
                    des: "핑크 로즈 데커레이션",
                    cName: "item-before",
                },
                {
                    des: "웰컴 샴페인",
                    cName: "item-before",
                },
                {
                    des: "Montaudon La Grande Rose 샴페인 1병",
                    cName: "item",
                },
                {
                    des: "웨딩베어 인형 (신랑·신부세트)",
                    cName: "item-before",
                },
                {
                    des: "인 룸 다이닝 디너 (이용 시간 : 체크인 당일 16:00~22:00 (Last Order 21:00)",
                    cName: "item-before",
                },
                {
                    des: "애피타이저 : 카나페 3종 / 메인 : 마데이라소스의 안심구이 / 디저트 : 산딸기 밀푀유",
                    cName: "item",
                },
                {
                    des: "인 룸 다이닝 브런치 (이용 시간 : 체크인 익일  06:00~12:00)",
                    cName: "item-before",
                },
                {
                    des: " 에그 베네딕트, 브레드 바스켓, 제철 과일, 프레시 주스와 커피",
                    cName: "item",
                },
                {
                    des: "인 룸 스냅 촬영 서비스",
                    cName: "item",
                },
                {
                    des: "객실 내 미니 스냅 촬영 진행",
                    cName: "item",
                },
                {
                    des: " 체크인 당일 17:00~18:30에 약 10~15분간 촬영진행되며, 체크아웃 시 5x7 액자(1개), 8x10액자(1개) 제공",
                    cName: "item",
                },
                {
                    des: "객실 예약 시 기재하신 전화번호로 연락을 드려 일정 확정",
                    cName: "item",
                },
                {
                    des: "발레파킹 서비스 1회",
                    cName: "item-before",
                },
                {
                    des: "6시 체크인 & 13시 체크아웃",
                    cName: "item-before",
                },
                {
                    des: "[월~목 투숙 시] 어번 아일랜드 All Day 입장혜택· 어번 아일랜드는 11월 17일까지 운영되어, 그 후로는 입장이 포함되지 않습니다.",
                    cName: "item",
                },
                {
                    des: "체련장(Gym), 실내 수영장 혜택",
                    cName: "item-before",
                },
            ],
        },
        {
            title: "개별혜택",
            item: [
                {
                    des: "[이그제큐티브 및 스위트 객실 선택 시]",
                    cName: "item",
                },
                {
                    des: " 더 이그제큐티브 라운지 혜택 : 어번 아일랜드 이용 시, 신라베어 비치볼 1개 제공 (투숙당 1개 제공)",
                    cName: "item",
                },
            ],
        },
        {
            title: "리워즈혜택",
            item: [
                {
                    des: " 회원전용상품 예약 시 리워즈 3만 포인트(1박당)를 추가 제공합니다.",
                    cName: "item-before",
                },
                {
                    des: "추가 포인트는 하단 링크를 통한 온라인 예약시에만 제공됩니다.)",
                    cName: "item-before",
                },
                {
                    des: "(현재페이지 또는 전화 예약 시 적립 불가)",
                    cName: "item-before",
                },
            ],
        },
        {
            title: "문의",
            item: ["02-2230-3310"],
        },
    ];

    const imgurl = `http://localhost:5002/bk/files/${img}`;
    // const imgurl = `http://192.168.123.100:5002/bk/files/${img}`;
    return (
        <div>
            {/* <!-- 패키지내용 --> */}
            <div className="pkg-header">
                <img src={imgurl} />
            </div>
            <div className="pkg-title">패키지 구성</div>
            <div className="pkg-detail">
                <ul className="detail-con">
                    {pkgdata.map((con, idx) => {
                        return (
                            <li
                                className="detail-list"
                                key={`${con.title}-${idx}`}
                            >
                                <div className="list-section">
                                    <span>{con.title}</span>
                                    <div className="list-item">
                                        {con.item.map((element, i) => {
                                            if (typeof element == "string") {
                                                return (
                                                    <p key={i} className={""}>
                                                        {element}
                                                    </p>
                                                );
                                            } else
                                                return (
                                                    <p
                                                        key={i}
                                                        className={
                                                            element.cName
                                                        }
                                                    >
                                                        {element.des}
                                                    </p>
                                                );
                                        })}
                                        {idx === 0 && (
                                            <Link
                                                to={con.link}
                                                className="offer-room"
                                            >
                                                객실 자세히보기
                                            </Link>
                                        )}
                                    </div>
                                </div>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
};

export default OfferDetail1_pkgcon;
