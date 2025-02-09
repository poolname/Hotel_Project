import React from "react";
import { Link } from "react-router-dom";
import OfferDetail1_pop from "./OfferDetail1_pop";

const OfferDetail1_pkgdes3 = ({ con, onclick }) => {
    return (
        <div className="description">
            <div className="description-text">{con.title}</div>
            <div className="img-wrap">
                <img
                    src={con.img}
                    alt={con.linktag}
                    onClick={() => {
                        onclick();
                        console.log("이미지를 클릭했습니다.");
                    }}
                    style={{ cursor: "pointer" }}
                />
            </div>
        </div>
    );
};

export default OfferDetail1_pkgdes3;
