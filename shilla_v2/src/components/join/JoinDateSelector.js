import React, { useState, useEffect } from 'react';

const JoinDateSelector = ({setBirth}) => {
    const today = new Date();
    const currentYear = today.getFullYear();
    const currentMonth = today.getMonth() + 1; // 월은 0부터 시작하므로 1을 더해줌

    // 상태 변수
    const [year, setYear] = useState(currentYear);
    const [month, setMonth] = useState(currentMonth);
    const [day, setDay] = useState(today.getDate());

    // 각 월별 마지막 날짜 (윤년 고려 X)
    const daysInMonth = {
        1: 31, 2: 28, 3: 31, 4: 30, 5: 31, 6: 30,
        7: 31, 8: 31, 9: 30, 10: 31, 11: 30, 12: 31
    };

    // 윤년을 계산하는 함수
    const isLeapYear = (year) => {
        return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
    };

    // 2월의 날짜를 윤년에 맞게 설정
    const updateDays = (year, month) => {
        const days = { ...daysInMonth }; // 기존의 월별 날짜 복사
        if (isLeapYear(year)) {
        days[2] = 29; // 윤년인 경우 2월 29일
        }
        return days[month]; // 선택한 월의 마지막 날짜 리턴
    };

    // 월이 변경될 때마다 날짜를 업데이트
    useEffect(() => {
        const birthday = `${year}-${month < 10 ? `0${month}` : month}-${day < 10 ? `0${day}` : day}`.trim();
        setBirth(birthday);

        const maxDays = updateDays(year, month);
        if (day > maxDays) {
        setDay(maxDays); // 선택한 일이 그 달의 마지막 일보다 크면 마지막 날로 설정
        }
    }, [year, month]); // year 또는 month가 변경될 때마다 실행

    // 년도와 월 변경 핸들러
    const handleYearChange = (event) => {
        setYear(Number(event.target.value));
    };

    const handleMonthChange = (event) => {
        setMonth(Number(event.target.value));
    };

    const handleDayChange = (event) => {
        setDay(Number(event.target.value));
    };

    // 년도 옵션 생성
    const years = [];
    for (let i = currentYear; i >= 1930; i--) {
        years.push(i);
    }

    // 월 옵션 생성
    const months = [];
    for (let i = 1; i <= 12; i++) {
        months.push(i);
    }

    // 일 옵션 생성
    const days = [];
    const maxDays = updateDays(year, month);
    for (let i = 1; i <= maxDays; i++) {
        days.push(i);
    }



    return (
        <>
            <div className="info-group">
                <div className="input-container">
                    <label htmlFor="year">생년월일</label>
                    <div className="input-wrap">
                        <div className="birth">
                            <select id="year" name='year' value={year} onChange={handleYearChange}>
                            {years.map((y) => (
                                <option key={y} value={y}>
                                {y}년
                                </option>
                            ))}
                            </select>


                            <select id="month" name='month' value={month} onChange={handleMonthChange}>
                            {months.map((m) => (
                                <option key={m} value={m}>
                                {m < 10 ? `0${m}` : m}월
                                </option>
                            ))}
                            </select>



                            <select id="day" name='day' value={day} onChange={handleDayChange}>
                            {days.map((d) => (
                                <option key={d} value={d}>
                                {d < 10 ? `0${d}` : d}일
                                </option>
                            ))}
                            </select>
                        </div>
                        <span className="error-message" id="birth-error"></span>
                    </div>
                </div>
            </div>
        </>
    );
};

export default JoinDateSelector;