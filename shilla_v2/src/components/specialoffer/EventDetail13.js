import React from "react";
import { img, section, pkglist } from "./Eventdetaildata";
import EventDetail1_header from "./EventDetail1_header";
import EventDetail_con from "./EventDetail_con";
import EventDetail_des from "./EventDetail_des";
import EventDetail_othercard from "./EventDetail_othercard";

const EventDetail13 = () => {
    return (
        <div className="container">
            <div className="center">
                <EventDetail1_header title="Urban Island Sip & Snack Hour" />
                <EventDetail_con img={img[12]} section={section[12]} />
                <EventDetail_des />
                <EventDetail_othercard pkglist={pkglist.slice(15, 18)} />
            </div>
        </div>
    );
};

export default EventDetail13;
