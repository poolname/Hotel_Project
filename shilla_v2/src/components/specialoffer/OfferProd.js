import React from "react";
import "../../scss/sub01_01_main.scss";
import { Link } from "react-router-dom";

function OfferProd({ rec, index }) {
    const imgurl = `http://localhost:5002/bk/files/${rec.upSystem}`;
    const className = index > 2 ? "rec-section none" : "rec-section";
    // 날짜출력
    const formatter = new Intl.DateTimeFormat("ko-KR", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
        timeZone: "Asia/Seoul",
    });
    return (
        <div className={className}>
            <Link to={`/specialOffer/detail/${rec.offer_id}`}>
                <div className="img-wrap">
                    <img src={imgurl} />
                </div>
                <div className="txt-wrap">
                    <h2 className="rec-inner">{rec.offer_name}</h2>
                    <p className="rec-inner">
                        {formatter
                            .format(new Date(rec.start_date))
                            .replace(/\. /g, "-") // 날짜 구분자를 "-"로 변경
                            .replace(/-\d{2}:\d{2}:\d{2}$/, "")}{" "}
                        ~{/* {rec.start_date.split("T")[0]} ~{" "} */}
                        {/* {rec.end_date.split("T")[0]} */}
                        {formatter
                            .format(new Date(rec.end_date))
                            .replace(/\. /g, "-") // 날짜 구분자를 "-"로 변경
                            .replace(/-\d{2}:\d{2}:\d{2}$/, "")}{" "}
                    </p>
                </div>
            </Link>
        </div>
    );
}

export default OfferProd;
