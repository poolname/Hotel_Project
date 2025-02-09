import React, { useState } from "react";
import "../../scss/sub01_01_main.scss";
import { Link } from "react-router-dom";

const OfferMain2_type = ({ offertype, setoffertype }) => {
    // console.log("offertype", { offertype });
    const [typeOpen, settypeOpen] = useState(false);
    const [select, setselect] = useState("전체");
    const [selectType, setselectType] = useState("");

    const type = [
        {
            filter: "all",
            name: "전체",
        },
        {
            filter: "couple",
            name: "커플",
        },
        {
            filter: "familly",
            name: "패밀리",
        },
        {
            filter: "friends",
            name: "친구",
        },
        {
            filter: "promotion",
            name: "프로모션",
        },
    ];

    const typehandle = e => {
        // const selectType = e.target.value;
        // setoffertype(selectType === "전체" ? "" : selectType);
        setoffertype(e.target.value);
        console.log("선택타입", e.target.value);
    };
    return (
        <>
            <div className="pkg-filter-sort">
                <p className="kw-title">유형구분</p>
                {/* 기존형태 */}
                {/* <div className={`dropdown type ${typeOpen ? "on" : ""}`}>
                    <div
                        className="typebox"
                        data-type="all"
                        onClick={() => settypeOpen(prev => !prev)}
                    >
                        {select}
                    </div>
                    <ul className="dropdown-item-type">
                        {type.map((typedata, i) => {
                            return (
                                <li
                                    className="filter-type"
                                    data-type={typedata.filter}
                                    onClick={() => {
                                        setselect(typedata.name);
                                        settypeOpen(false);
                                    }}
                                    key={i}
                                >
                                    {typedata.name}
                                </li>
                            );
                        })}
                    </ul>
                </div> */}
                {/* 셀렉트박스 */}
                <div className="dropdown type">
                    <select
                        name="offer_type"
                        // id="typeboxwrap"
                        value={offertype}
                        className="typebox"
                        onChange={typehandle}
                    >
                        <option className="filter-type" value="All">
                            전체
                        </option>
                        <option className="filter-type" value="커플">
                            커플
                        </option>
                        <option className="filter-type" value="패밀리">
                            패밀리
                        </option>
                        <option className="filter-type" value="친구">
                            친구
                        </option>
                        <option className="filter-type" value="프로모션">
                            프로모션
                        </option>
                    </select>
                </div>
            </div>
        </>
    );
};

export default OfferMain2_type;
