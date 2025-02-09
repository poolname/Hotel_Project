import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Pagination from "../sub/Pagination";

const OfferMain4 = ({ offer }) => {
    // console.log(`파일옵니까: ${(<img src={offerimg} />)}`);

    // 키워드 매칭
    const keywordColumns = [
        "breakfast",
        "lounge",
        "anniversry",
        "pool",
        "three_people",
        "consecutive_night",
        "kids",
    ];
    const keywordObject = {
        breakfast: "조식",
        lounge: "라운지혜택",
        anniversry: "기념일",
        pool: "야외수영장",
        three_people: "성인3인",
        consecutive_night: "2박이상",
        kids: "키즈",
    };
    //페이지네이션
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10; // 한 페이지에 보여줄 아이템 수

    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentlist = offer.slice(startIndex, startIndex + itemsPerPage);
    // 날짜출력
    const formatter = new Intl.DateTimeFormat("ko-KR", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
        timeZone: "Asia/Seoul",
    });

    return (
        <>
            {/* <!-- 패키지 리스트 --> */}
            <div className="event-container">
                <ul className="pkg-all list-item" data-type="all">
                    {currentlist
                        // .filter(
                        //     list =>
                        //         keywordColumns.some(
                        //             keyword => list[keyword] === "1"
                        //         ) // 키워드 중 하나라도 1인지 확인
                        // )
                        .map(data => {
                            const imgurl = `http://localhost:5002/bk/files/${data.upSystem}`;

                            return (
                                <li
                                    className="list-container product-item"
                                    data-type={data.offer_type}
                                    key={data.offer_id}
                                >
                                    <Link
                                        to={`/specialOffer/detail/${data.offer_id}`}
                                    >
                                        <div className="img-wrapper">
                                            <img src={imgurl} />
                                            {/* <div className="pkg-rewards">
                                                <img
                                                    src={
                                                        "../../img/sub/gift.png"
                                                    }
                                                />
                                                <div className="reward">
                                                    리워즈혜택
                                                </div>
                                            </div> */}
                                        </div>
                                        <div className="txt-wrapper">
                                            {keywordColumns.map(
                                                keyword =>
                                                    data[keyword] === "1" && (
                                                        <p
                                                            className="list-keword"
                                                            key={keyword}
                                                        >
                                                            {
                                                                keywordObject[
                                                                    keyword
                                                                ]
                                                            }
                                                        </p>
                                                    )
                                            )}
                                            {/* <p className="list-keword">
                                                {data.badge}
                                            </p> */}
                                            <h3>{data.offer_name}</h3>
                                            <p className="offer-des">
                                                {data.offer_description}
                                            </p>
                                            <p className="offer-date">
                                                {/* {data.start_date.split("T")[0]}{" "} */}
                                                {formatter
                                                    .format(
                                                        new Date(
                                                            data.start_date
                                                        )
                                                    )
                                                    .replace(/\. /g, "-") // 날짜 구분자를 "-"로 변경
                                                    .replace(
                                                        /-\d{2}:\d{2}:\d{2}$/,
                                                        ""
                                                    )}{" "}
                                                ~
                                                {/* {data.end_date.split("T")[0]} */}
                                                {formatter
                                                    .format(
                                                        new Date(data.end_date)
                                                    )
                                                    .replace(/\. /g, "-") // 날짜 구분자를 "-"로 변경
                                                    .replace(
                                                        /-\d{2}:\d{2}:\d{2}$/,
                                                        ""
                                                    )}{" "}
                                            </p>
                                        </div>
                                        <div className="bottom-wrapper">
                                            <p className="offer-pay">
                                                {data.offer_price.toLocaleString()}{" "}
                                                ~
                                            </p>
                                        </div>
                                        <p className="view-more">자세히보기</p>
                                    </Link>
                                </li>
                            );
                        })}
                </ul>
                {/* {arr.map((item, idx) => (
                    <div key={idx}>
                        <div>{item.offer_id}</div>
                        <div>{item.offer_name}</div>
                    </div>
                ))} */}
                <Pagination
                    totalItems={offer.length}
                    itemsPerPage={itemsPerPage}
                    currentPage={currentPage}
                    onPageChange={setCurrentPage}
                />
            </div>
        </>
    );
};

export default OfferMain4;
