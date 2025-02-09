import { useState, useEffect } from "react";
import Header from "../common/Header";
import Footer from "../common/Footer";
import "../../scss/sub01_01_main.scss";
import { Link } from "react-router-dom";
import OfferMain2_type from "./OfferMain2_type";
import OfferMain2_date from "./OfferMain2_date";
import OfferMain2_kewords from "./OfferMain2_keword";
import OfferMain2_btn from "./OfferMain2_btn";

const OfferMain2 = ({ setOfferlists }) => {
    const [range, setRange] = useState([{ startDate: null, endDate: null }]);
    const [offertype, setoffertype] = useState("");
    const [offerkeword, setofferkeword] = useState("");
    const [filterKewords, setfilterKewords] = useState({
        breakfast: 0,
        lounge: 0,
        anniversry: 0,
        pool: 0,
        three_people: 0,
        consecutive_night: 0,
        kids: 0,
    });

    //검색버튼
    const handleSearch = async e => {
        // e.preventDefault();

        // setfiltered(myData);
        const frmData = new FormData(document.myFrm);
        const myData = Object.fromEntries(frmData);
        if (myData.date_range) {
            const [start_date, end_date] = myData.date_range
                .toString()
                .split(" ~ ");
            console.log(start_date);
            console.log(end_date);
            myData.start_date = start_date;
            myData.end_date = end_date;
        }
        try {
            console.log("폼데이터", myData);
            const res = await axios.put(
                "http://localhost:5002/bk/specialOffer",
                myData
            );
            console.log("필터데이터", res.data);
            alert("검색완료");
            setOfferlists(res.data);
        } catch (err) {
            console.error("에러메세지", err);
        }
    };
    //초기화버튼
    const handleReset = e => {
        // e.preventDefault();
        setRange([{ startDate: null, endDate: null }]);
        setoffertype("");
        setofferkeword("");
    };
    return (
        <>
            {/* <!-- 필터박스 --> */}
            <form
                className="pkg-filter-box-wrapper"
                name="myFrm"
                // onReset={handleReset}
            >
                <div className="pkg-filter-box">
                    <OfferMain2_date />
                    <OfferMain2_type
                        offertype={offertype}
                        setoffertype={setoffertype}
                    />
                    <OfferMain2_kewords
                        offerkeword={offerkeword}
                        setofferkeword={setofferkeword}
                        filterKewords={filterKewords}
                        setfilterKewords={setfilterKewords}
                    />
                    <OfferMain2_btn
                        handleReset={handleReset}
                        handleSearch={handleSearch}
                    />
                </div>
            </form>
        </>
    );
};

export default OfferMain2;
