import React, { useState } from "react";
import Header from "../common/Header";
import Footer from "../common/Footer";
import "../../scss/sub01_01_main.scss";
import { Link } from "react-router-dom";

const OfferMain2_kewords = ({
    offerkeword,
    setofferkeword,
    filterKewords,
    setfilterKewords,
}) => {
    const kewordlists = [
        {
            id: "breakfast",
            kname: "조식",
        },
        {
            id: "lounge",
            kname: "라운지혜택",
        },
        {
            id: "anniversry",
            kname: "기념일",
        },
        {
            id: "pool",
            kname: "야외수영장",
        },
        {
            id: "three_people",
            kname: "성인3인",
        },
        {
            id: "consecutive_night",
            kname: "2박이상",
        },
        {
            id: "kids",
            kname: "키즈",
        },
    ];

    const kewordhandle = e => {
        const { name, checked } = e.target;
        setfilterKewords(prev => ({ ...prev, [name]: checked ? 1 : 0 }));
        console.log("선택키워드", filterKewords);
    };
    return (
        <>
            <div className="pkg-filter-keyword">
                <div className="keword-wrap">
                    <p className="kw-title">키워드</p>
                    <ul className="keywords">
                        {kewordlists.map((keword, id) => {
                            return (
                                <li className="check" key={keword.id}>
                                    <input
                                        type="checkbox"
                                        id={keword.id}
                                        name={keword.id} // 폼데이터키역할
                                        value="1" // 폼데이터값
                                        checked={filterKewords[keword.id] === 1} // 기본 false
                                        onChange={kewordhandle}
                                    />
                                    <label htmlFor={keword.id}>
                                        {keword.kname}
                                    </label>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
        </>
    );
};

export default OfferMain2_kewords;
