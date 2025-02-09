import React from "react";
import OfferDetail1_pkgdes1 from "./OfferDetail1_pkgdes1";
import OfferDetail1_pkgdes2 from "./OfferDetail1_pkgdes2";
import OfferDetail1_pkgdes3 from "./OfferDetail1_pkgdes3";

const OfferDetail1_pkgdes = () => {
    return (
        <>
            {/* <!-- 패키지 상세설명 메인 --> */}
            <div className="section-title">패키지 상세설명</div>
            <div className="pkg-description-wrap">
                <OfferDetail1_pkgdes1 />
                <OfferDetail1_pkgdes2 />
            </div>
        </>
    );
};

export default OfferDetail1_pkgdes;
