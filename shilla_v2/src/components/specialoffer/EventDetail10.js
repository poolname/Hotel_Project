import React from "react";
import { img, section, pkglist } from "./Eventdetaildata";
import EventDetail1_header from "./EventDetail1_header";
import EventDetail_con from "./EventDetail_con";
import EventDetail_des from "./EventDetail_des";
import EventDetail_othercard from "./EventDetail_othercard";

const EventDetail10 = () => {
    return (
        <div className="container">
            <div className="center">
                <EventDetail1_header title="An Enchanting Memory" />
                <EventDetail_con img={img[9]} section={section[9]} />
                <EventDetail_des />
                <EventDetail_othercard pkglist={pkglist.slice(9, 12)} />
            </div>
        </div>
    );
};

export default EventDetail10;
