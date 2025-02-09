import React from "react";
import { img, section, pkglist } from "./Eventdetaildata";
import EventDetail1_header from "./EventDetail1_header";
import EventDetail_con from "./EventDetail_con";
import EventDetail_des from "./EventDetail_des";
import EventDetail_othercard from "./EventDetail_othercard";

const EventDetail14 = () => {
    return (
        <div className="container">
            <div className="center">
                <EventDetail1_header title="Urban DJ Night Serenade" />
                <EventDetail_con img={img[13]} section={section[13]} />
                <EventDetail_des />
                <EventDetail_othercard pkglist={pkglist.slice(16, 19)} />
            </div>
        </div>
    );
};

export default EventDetail14;
