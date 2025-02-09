import React from "react";
import { Link } from "react-router-dom";

const EventMain1 = ({ data }) => {
    return (
        <li
            className={`list-container ${data.keword ? "eventstyle" : ""}`}
            key={data.id}
        >
            <div className="img-wrapper">
                <img src={data.img} />
            </div>
            <div className="txt-wrapper">
                {data.keword && <p className="list-keword">{data.keword}</p>}
                <h3>{data.title}</h3>
                <p className="offer-des">{data.des}</p>
                <p className="offer-date">{data.date}</p>
            </div>
            <div className="bottom-wrapper">
                <p className="offer-pay">{data.price}</p>
                <Link to={data.link} className="event-btn">
                    자세히 보기
                </Link>
            </div>
        </li>
    );
};

export default EventMain1;
