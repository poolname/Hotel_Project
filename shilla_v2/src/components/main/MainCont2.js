import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import DateRangePicker from "../reservation/DateRangePicker"; // 경로 확인
import "../../scss/reset.css";
import "../../scss/common.scss";
import "../../scss/main.scss";

const MainCont2 = () => {
  const navigate = useNavigate();

  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);
  const [adultCount, setAdultCount] = useState(1);
  const [childrenCount, setChildrenCount] = useState(0);
  const [showDatePicker, setShowDatePicker] = useState(false);

  const toggleDatePicker = () => setShowDatePicker(!showDatePicker);

  const handleDateChange = ({ startDate, endDate }) => {
    setCheckInDate(startDate);
    setCheckOutDate(endDate);
  };

  const handleButtonConfirm = () => {
    const startDate = checkInDate ? checkInDate.toISOString().split("T")[0] : "";
    const endDate = checkOutDate ? checkOutDate.toISOString().split("T")[0] : "";

    // navigate 호출 시 state로 값 전달
    navigate("/reserve/", {
      state: {
        startDate,
        endDate,
        adultCount,
        childrenCount,
      },
    });
  };

  return (
    <section className="cont2">
      <div className="center">
        <div className="reservation-wrap">
          <div className="date-wrap" onClick={handleButtonConfirm}>
          {/* onClick={toggleDatePicker} */}
            <span className="tit">
              CHECK IN / OUT
              <DateRangePicker
                onDateChange={handleDateChange}
                showPicker={showDatePicker}
                togglePicker={toggleDatePicker}
              />
            </span>
          </div>
          <div className="room-wrap">
            <div className="box adult">
              <span className="tit">ADULT</span>
              <span className="num">{adultCount}</span>
            </div>
            <div className="box children">
              <span className="tit">CHILDREN</span>
              <span className="num">{childrenCount}</span>
            </div>
          </div>
          <button
            type="button"
            onClick={handleButtonConfirm}
            className="search"
            title="예약페이지로 이동"
          >
            검색
          </button>
        </div>
      </div>
    </section>
  );
};

export default MainCont2;
