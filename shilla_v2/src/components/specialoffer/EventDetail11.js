import React from "react";
import { img, section, pkglist } from "./Eventdetaildata";
import EventDetail1_header from "./EventDetail1_header";
import EventDetail_con from "./EventDetail_con";
import EventDetail_des from "./EventDetail_des";
import EventDetail_othercard from "./EventDetail_othercard";

const EventDetail11 = () => {
    return (
        <div className="container">
            <div className="center">
                <EventDetail1_header title="Shilla Bear X Blue Dragon Keyring Limited Edition" />
                <EventDetail_con img={img[10]} section={section[10]} />
                <EventDetail_des />
                <EventDetail_othercard pkglist={pkglist.slice(10, 13)} />
            </div>
        </div>
    );
};

export default EventDetail11;
