import React from "react";
import { img, section, pkglist } from "./Eventdetaildata";
import EventDetail1_header from "./EventDetail1_header";
import EventDetail_con from "./EventDetail_con";
import EventDetail_des from "./EventDetail_des";
import EventDetail_othercard from "./EventDetail_othercard";

const EventDetail5 = () => {
    return (
        <div className="container">
            <div className="center">
                <EventDetail1_header title="A Match Made In Heaven, Bingsky" />
                <EventDetail_con img={img[4]} section={section[4]} />
                <EventDetail_des />
                <EventDetail_othercard pkglist={pkglist.slice(4, 7)} />
            </div>
        </div>
    );
};

export default EventDetail5;
