import React from "react";
import { img, section, event, pkglist } from "./Eventdetaildata";
import EventDetail1_header from "./EventDetail1_header";
import EventDetail_con from "./EventDetail_con";
import EventDetail_des from "./EventDetail_des";
import EventDetail_othercard from "./EventDetail_othercard";

const EventDetail7 = () => {
    return (
        <div className="container">
            <div className="center">
                <EventDetail1_header title="Haute Cuisine" />
                <EventDetail_con img={img[6]} section={section[6]} />
                <EventDetail_des event={event[0]} />
                <EventDetail_othercard pkglist={pkglist.slice(6, 9)} />
            </div>
        </div>
    );
};

export default EventDetail7;
