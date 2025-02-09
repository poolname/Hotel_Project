import React from "react";
import { img, section, pkglist } from "./Eventdetaildata";
import EventDetail1_header from "./EventDetail1_header";
import EventDetail_con from "./EventDetail_con";
import EventDetail_des from "./EventDetail_des";
import EventDetail_othercard from "./EventDetail_othercard";

const EventDetail15 = () => {
    return (
        <div className="container">
            <div className="center">
                <EventDetail1_header title="Kids Lounge 운영 안내" />
                <EventDetail_con img={img[14]} section={section[14]} />
                <EventDetail_des />
                <EventDetail_othercard pkglist={pkglist.slice(17, 20)} />
            </div>
        </div>
    );
};

export default EventDetail15;
