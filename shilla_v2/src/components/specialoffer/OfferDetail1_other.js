import React from "react";
import { Link } from "react-router-dom";
import OfferDetail1_othercard from "./OfferDetail1_othercard";

const OfferDetail1_other = () => {
    const pkglist = [
        {
            link: "/specialOffer/detail/78",
            img: "../../img/sub/offerWine.jpg",
            title: "Gathering Moment at Urban Cabana",
            date: "2024-11-01 ~ 2025-01-31",
            pay: "930,000원 ~",
        },
        {
            link: "/specialOffer/detail/65",
            img: "../../img/sub/offerstay.jpg",
            title: "Urban Morning",
            date: "2024-12-18 ~ 2025-01-22",
            pay: "360,000 원 ~",
        },
        {
            link: "/specialOffer/detail/60",
            img: "../../img/sub/offerBetter.jpg",
            title: "Better Stay",
            date: "2024-12-09 ~ 2025-02-07",
            pay: "740,000원 ~",
        },
    ];
    return (
        <div className="other-event">
            <div className="other-title">다른 패키지</div>
            <ul className="other-list">
                {pkglist.map((pkg, index) => (
                    <OfferDetail1_othercard data={pkg} key={index} />
                ))}
            </ul>
        </div>
    );
};

export default OfferDetail1_other;
