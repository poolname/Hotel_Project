import React from "react";
import { Link } from "react-router-dom";

const EventDetail1_header = ({ title }) => {
    return (
        <div>
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
                        <Link to="">이벤트</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default EventDetail1_header;
