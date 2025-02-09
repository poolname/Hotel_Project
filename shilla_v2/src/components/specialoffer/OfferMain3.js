import React, { useState } from "react";

const OfferMain3 = ({ offer }) => {
    const [sortOpen, setsortOpen] = useState(false);
    const [sort, setsort] = useState("전체");
    const options = ["전체", "최신순", "높은가격순", "낮은가격순"];

    return (
        <div className="pkg-section">
            <div className="pkg-total">
                <span>총 </span>
                <span className="totalnum">{offer.length}</span>
                <span>개 상품</span>
            </div>
            {/* <div
                className={`dropdown sort ${sortOpen ? "on" : ""} `}
                onClick={() => setsortOpen(prev => !prev)}
            >
                <div className="sortbox">{sort}</div>
                <ul className="dropdown-item-sort">
                    {options.map((option, i) => {
                        return (
                            <li
                                className="new"
                                onClick={() => setsort(option)}
                                key={`${option}-${i}`}
                            >
                                {option}
                            </li>
                        );
                    })}
                </ul>
            </div> */}
        </div>
    );
};

export default OfferMain3;
