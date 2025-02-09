import React from "react";
import EventDetail_othercard from "./EventDetail_othercard";

const EventDetail_other = ({ pkglist }) => {
    return (
        <div className="other-event">
            <div className="other-title">다른 이벤트</div>
            <ul className="other-list">
                {pkglist.map(pkg => (
                    <EventDetail_othercard data={pkg} />
                ))}
            </ul>
        </div>
    );
};

export default EventDetail_other;
