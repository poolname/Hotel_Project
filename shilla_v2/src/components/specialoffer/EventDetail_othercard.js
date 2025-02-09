import React from "react";
import { Link } from "react-router-dom";

const EventDetail1_othercard = ({ pkglist }) => {
    return (
        <div className="other-event">
            <div className="other-title">다른 이벤트</div>
            <ul className="other-list">
                {pkglist.map((pkg, index) => (
                    <li className="other-item" key={index}>
                        <Link to={pkg.link}>
                            <div className="img-box">
                                <img src={pkg.img} />
                            </div>
                            <dl>
                                <dt>{pkg.title}</dt>
                                <dd className="other-date">{pkg.date}</dd>
                                <dd className="other-pay">{pkg.pay}</dd>
                            </dl>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default EventDetail1_othercard;
