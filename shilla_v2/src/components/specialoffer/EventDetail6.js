import React from "react";
import { img, section, pkglist } from "./Eventdetaildata";
import EventDetail1_header from "./EventDetail1_header";
import EventDetail_con from "./EventDetail_con";
import EventDetail_des from "./EventDetail_des";
import EventDetail_othercard from "./EventDetail_othercard";

const EventDetail6 = () => {
    return (
        <div className="container">
            <div className="center">
                <EventDetail1_header title="Rich Autumn Royal Tea" />
                <EventDetail_con img={img[5]} section={section[5]} />
                <EventDetail_des />
                <EventDetail_othercard pkglist={pkglist.slice(5, 8)} />
            </div>
        </div>
    );
};

export default EventDetail6;
