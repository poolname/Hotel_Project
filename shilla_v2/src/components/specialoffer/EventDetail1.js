import React from "react";
import { img, section, pmt, event, pkglist } from "./Eventdetaildata";
import EventDetail_con from "./EventDetail_con";
import EventDetail_des from "./EventDetail_des";
import EventDetail1_othercard from "./EventDetail_othercard";
import EventDetail1_header from "./EventDetail1_header";

const EventDetail1 = () => {
    return (
        <div className="container">
            <div className="center">
                <EventDetail1_header title="Taste of Vietnam" />
                <EventDetail_con img={img[0]} section={section[0]} />
                <EventDetail_des pmt={pmt[0]} event={event[0]} />
                <EventDetail1_othercard pkglist={pkglist.slice(0, 3)} />
            </div>
        </div>
    );
};

export default EventDetail1;
