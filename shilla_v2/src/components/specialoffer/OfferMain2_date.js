import React, { useState } from "react";
import "../../scss/sub01_01_main.scss";
import OfferMain2_dateRangePicker from "./OfferMain2_dateRangePicker";

const OfferMain2_date = () => {
    const [checkInDate, setCheckInDate] = useState(null); // 체크인 날짜
    const [checkOutDate, setCheckOutDate] = useState(null); // 체크아웃 날짜
    const [showPicker, setShowPicker] = useState(false); // 날짜 선택기 표시 여부
    const togglePicker = () => setShowPicker(!showPicker);
    // 날짜 변경 핸들러
    const handleDateChange = ({ startDate, endDate }) => {
        setCheckInDate(startDate);
        setCheckOutDate(endDate);
    };

    return (
        <>
            <div className="pkg-datepicker-box">
                <label htmlFor="daterange3" className="kw-title">
                    기간조회
                </label>
                <OfferMain2_dateRangePicker
                    onDateChange={handleDateChange}
                    showPicker={showPicker}
                    togglePicker={togglePicker}
                />

                {/* <span className="pkg-date">
                    <input
                        type="text"
                        className="date"
                        name="daterange3"
                        id="daterange3"
                        value=""
                        autoComplete="off"
                        placeholder="예약기간을 선택하세요."
                    />
                </span> */}
            </div>
        </>
    );
};

export default OfferMain2_date;
