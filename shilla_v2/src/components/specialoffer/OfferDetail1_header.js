import React from "react";
import "../../scss/sub01_01_sub135.scss";
import { Link } from "react-router-dom";

const OfferDetail1_header = ({ title }) => {
    return (
        <>
            <div className="sub-title">
                <h2>{title}</h2>
                <ul className="location">
                    <li>
                        <Link to="/">홈</Link>
                    </li>
                    <li>
                        <Link to="/specialOffer">스페셜오퍼</Link>
                    </li>
                    <li>
                        <Link to="">객실패키지</Link>
                    </li>
                </ul>
            </div>
        </>
    );
};

export default OfferDetail1_header;
