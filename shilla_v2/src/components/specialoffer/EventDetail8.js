import React from "react";
import { img, section, pmt, event, pkglist } from "./Eventdetaildata";
import EventDetail1_header from "./EventDetail1_header";
import EventDetail_con from "./EventDetail_con";
import EventDetail_des from "./EventDetail_des";
import EventDetail_othercard from "./EventDetail_othercard";

const EventDetail8 = () => {
    return (
        <div className="container">
            <div className="center">
                <EventDetail1_header title="Ocean Breeze" />
                <EventDetail_con img={img[7]} section={section[7]} />
                <EventDetail_des pmt={pmt[0]} event={event[0]} />
                <EventDetail_othercard pkglist={pkglist.slice(7, 10)} />
            </div>
        </div>
    );
};

export default EventDetail8;
