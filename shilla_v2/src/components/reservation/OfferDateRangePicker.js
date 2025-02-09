import React, { useState } from "react";
import { DateRange } from "react-date-range";
import { format } from "date-fns";
import ko from "date-fns/locale/ko";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import "../../scss/spofferdateRangePicker.scss";

const OfferDateRangePicker = ({
  onDateChange,
  showPicker,
  togglePicker,
  minDate,
  maxDate,
}) => {
  // 오늘 날짜를 자정으로 초기화
  const today = new Date();
  // today.setHours(0, 0, 0, 0);

  // 날짜에 하루를 빼는 함수
  // const minusOneDay = (date) => {
  //   const newDate = new Date(date);
  //   newDate.setDate(newDate.getDate() - 1); // 하루 빼기
  //   return newDate;
  // };

  // 날짜에 하루를 더하는 함수
  const plusOneDay = (date) => {
    const newDate = new Date(date);
    newDate.setDate(newDate.getDate() + 1); // 하루 빼기
    return newDate;
  };

  // validMinDate 설정 (하루를 빼되 오늘 날짜 이전이 되지 않도록)
  const rawMinDate =
    minDate instanceof Date && !isNaN(minDate) ? minDate : today;

  const validMinDate = new Date(
    Math.max(today, rawMinDate) // 오늘과 rawMinDate-1 중 더 늦은 날짜
  );

  // validMaxDate 설정
  const validMaxDate =
  plusOneDay(maxDate) instanceof Date && !isNaN(plusOneDay(maxDate)) ? plusOneDay(maxDate) : null;

  console.log("오늘 날짜 (today):", today);
  console.log("validMinDate (조정된 최소 날짜):", validMinDate);
  console.log("validMaxDate (조정된 최대 날짜):", validMaxDate);

  const [range, setRange] = useState([
    {
      startDate: validMinDate,
      endDate: validMinDate,
      key: "selection",
    },
  ]);

  const handleSelect = (ranges) => {
    const { startDate, endDate } = ranges.selection;
  
    // 날짜만 비교 (시간 제외)
    const startDateOnly = new Date(startDate.getFullYear(), startDate.getMonth(), startDate.getDate());
    const endDateOnly = new Date(endDate.getFullYear(), endDate.getMonth(), endDate.getDate());
    const validMinDateOnly = new Date(validMinDate.getFullYear(), validMinDate.getMonth(), validMinDate.getDate());
    const validMaxDateOnly = validMaxDate
      ? new Date(validMaxDate.getFullYear(), validMaxDate.getMonth(), validMaxDate.getDate())
      : null;
  
    if (
      startDateOnly < validMinDateOnly || 
      (validMaxDateOnly && endDateOnly > validMaxDateOnly)
    ) {
      alert("선택 가능한 날짜 범위를 벗어났습니다.");
      return;
    }
  
    setRange([ranges.selection]);
    onDateChange({ startDate, endDate });
  };

  const formatDate = (date) =>
    date instanceof Date && !isNaN(date) ? format(date, "yyyy-MM-dd") : "";

  const handleCancel = () => {
    setRange([
      {
        startDate: validMinDate,
        endDate: validMinDate,
        key: "selection",
      },
    ]);
    togglePicker();
  };

  const handleConfirm = () => {
    togglePicker();
  };

  return (
    <div>
      <input
        type="text"
        readOnly
        value={`${formatDate(range[0].startDate)} ~ ${formatDate(range[0].endDate)}`}
        onClick={togglePicker}
        className="date-picker-input2"
        style={{ cursor: "pointer" }}
      />
      {showPicker && (
        <div className="date-picker-popup">
          <DateRange
            editableDateInputs
            onChange={handleSelect}
            moveRangeOnFirstSelection={false}
            ranges={range}
            months={2}
            direction="horizontal"
            minDate={validMinDate} // 조정된 최소 날짜
            maxDate={validMaxDate} // 조정된 최대 날짜
            locale={ko}
          />
          <div className="date-picker-footer">
            <div className="selected-dates">
              <p>시작일: {formatDate(range[0].startDate)}</p>
              <p>종료일: {formatDate(range[0].endDate)}</p>
            </div>
            <div className="footer-buttons">
              <button onClick={handleCancel} className="cancel-button">
                취소
              </button>
              <button onClick={handleConfirm} className="confirm-button">
                확인
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default OfferDateRangePicker;
