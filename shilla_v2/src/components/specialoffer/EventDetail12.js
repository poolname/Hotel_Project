import React from "react";
import { img, section, pkglist } from "./Eventdetaildata";
import EventDetail1_header from "./EventDetail1_header";
import EventDetail_con from "./EventDetail_con";
import EventDetail_des from "./EventDetail_des";
import EventDetail_othercard from "./EventDetail_othercard";

const EventDetail12 = () => {
    return (
        <div className="container">
            <div className="center">
                <EventDetail1_header title="Birthday Bear Key Ring Special" />
                <EventDetail_con img={img[11]} section={section[11]} />
                <EventDetail_des />
                <EventDetail_othercard pkglist={pkglist.slice(11, 14)} />
            </div>
        </div>
    );
};

export default EventDetail12;
