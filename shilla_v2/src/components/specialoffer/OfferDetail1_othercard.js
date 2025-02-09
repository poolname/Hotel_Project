import React from "react";
import { Link } from "react-router-dom";

const OfferDetail1_othercard = ({ data }) => {
    return (
        <>
            <li className="other-item">
                <Link to={data.link}>
                    <div className="img-box">
                        <img src={data.img} />
                    </div>
                    <dl>
                        <dt>{data.title}</dt>
                        <dd className="other-date">{data.date}</dd>
                        <dd className="other-pay">{data.pay}</dd>
                    </dl>
                </Link>
            </li>
        </>
    );
};

export default OfferDetail1_othercard;
