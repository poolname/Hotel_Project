import React from "react";
import { img } from "./Eventdetaildata";

const EventDetail_con = ({ img, section }) => {
    return (
        <>
            {/* <!-- 이벤트 상세내용--> */}
            <div className="event-header">
                <img src={img} alt="" />
            </div>
            <div className="event-section">
                <h2>{section.title}</h2>
                <p>{section.context}</p>
                <ul className="main-des">
                    {section.item.map((des, i) => (
                        <li key={i}>{des}</li>
                    ))}
                </ul>
            </div>
        </>
    );
};

export default EventDetail_con;
