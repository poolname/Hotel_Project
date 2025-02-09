import { format } from "date-fns";
import ko from "date-fns/locale/ko"; // locale 한글버전
import React, { useState } from "react";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // 메인 스타일
import "react-date-range/dist/theme/default.css"; // 기본 테마 스타일
import "../../scss/dateRangePicker.scss";

const OfferMain2_dateRangePicker = ({
    onDateChange,
    showPicker,
    togglePicker,
}) => {
    const [range, setRange] = useState([
        {
            startDate: null,
            endDate: null,
            key: "selection",
        },
    ]);

    const handleSelect = ranges => {
        setRange([ranges.selection]);
        const { startDate, endDate } = ranges.selection;
        onDateChange({ startDate, endDate });
    };

    const formatDate = date => {
        if (!date) {
            return "";
        }
        return format(date, "yyyy-MM-dd");
    };

    const handleCancel = () => {
        setRange([
            {
                startDate: null,
                endDate: null,
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
                name="date_range"
                placeholder="날짜를 입력하세요."
                value={
                    range[0]?.startDate && range[0]?.endDate
                        ? `${formatDate(range[0].startDate)} ~ ${formatDate(
                              range[0].endDate
                          )}`
                        : ""
                }
                onClick={togglePicker}
                className="date-picker-input"
                onChange={e => {
                    if (!e.target.value.trim()) {
                        console.log("날짜범위없음");
                    }
                }}
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
                        minDate={new Date()}
                        locale={ko} // 한글 로케일로 적용
                        showDateDisplay={false} // rdrDateDisplayWrapper 요소삭제
                    />
                    <div className="date-picker-footer">
                        <div className="selected-dates">
                            <p>시작일: {formatDate(range[0].startDate)}</p>
                            <p>종료일: {formatDate(range[0].endDate)}</p>
                        </div>
                        <div className="footer-buttons">
                            <button
                                onClick={handleCancel}
                                className="cancel-button"
                            >
                                취소
                            </button>
                            <button
                                onClick={handleConfirm}
                                className="confirm-button"
                            >
                                확인
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default OfferMain2_dateRangePicker;
