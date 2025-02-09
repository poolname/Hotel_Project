import React from "react";
import { img, section, event, pkglist } from "./Eventdetaildata";
import EventDetail1_header from "./EventDetail1_header";
import EventDetail_con from "./EventDetail_con";
import EventDetail_des from "./EventDetail_des";
import EventDetail_othercard from "./EventDetail_othercard";

const EventDetail9 = () => {
    return (
        <div className="container">
            <div className="center">
                <EventDetail1_header title="The Exclusive Launch of The Balvenie Limited Edition Whisky" />
                <EventDetail_con img={img[8]} section={section[8]} />
                <EventDetail_des event={event[2]} />
                <EventDetail_othercard pkglist={pkglist.slice(8, 11)} />
            </div>
        </div>
    );
};

export default EventDetail9;
