import React from "react";
import { img, section, pkglist } from "./Eventdetaildata";
import EventDetail1_header from "./EventDetail1_header";
import EventDetail_con from "./EventDetail_con";
import EventDetail_des from "./EventDetail_des";
import EventDetail_othercard from "./EventDetail_othercard";

const EventDetail2 = () => {
    return (
        <div className="container">
            <div className="center">
                <EventDetail1_header title="A Marriage of Sweet Aromas" />
                <EventDetail_con img={img[1]} section={section[1]} />
                <EventDetail_des />
                <EventDetail_othercard pkglist={pkglist.slice(1, 4)} />
            </div>
        </div>
    );
};

export default EventDetail2;
