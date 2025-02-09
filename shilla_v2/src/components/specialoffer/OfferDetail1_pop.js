import "../../scss/sub01_01_sub135.scss";
import "../../scss/common.scss";
import { useState } from "react";
import { Link } from "react-router-dom";

const OfferDetail1_pop = ({ con, isactive, onclose }) => {
    return (
        <div className={`lypop ${isactive ? "active" : ""}`}>
            <div className="lypop-wp big">
                <div className="lypop-content">
                    <div className="lypop-title">
                        <strong>{con.title}</strong>
                        <button
                            className="lypop-close"
                            onClick={onclose}
                        ></button>
                    </div>
                    <div className="lypop-ct">
                        <img src={con.img} />
                        <div>{con.des}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OfferDetail1_pop;
