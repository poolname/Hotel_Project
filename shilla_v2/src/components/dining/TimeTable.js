import React from 'react';

const TimeTable = () => {
  return (
    <>
      <p className="txt">
        원목과 대리석의 자연 친화적 인테리어와 남산의 녹음이 어우러진 올 데이 다이닝 공간입니다. 라이브 키친에서 신선한 식재료로 즉석에서 조리한 음식을 맛볼 수 있습니다.
      </p>
      <div className="timetable-wrap">
        <strong className="flex">
          <span>운영시간 안내 </span>
          <span>All Day dining 06:00 ~ 22:00</span>
        </strong>
        <ul className="timetable">
          <li>
            <div className="time">아침 뷔페</div>
            <div className="context">
              <p>주중/주말/공휴일 06:00 ~ 10:00</p>
              <span>성인 86,000원 / 어린이 43,000원</span>
            </div>
          </li>
          <li>
            <div className="time">브런치 뷔페</div>
            <div className="context">
              <p>주중 12:00 ~ 14:30</p>
              <span>성인 173,000원 / 어린이 90,000원</span>
              <p>주말/공휴일 1부(11:00 ~13:00), 2부(14:00 ~ 16:00)</p>
              <span>성인 185,000원 / 어린이 93,000원</span>
            </div>
          </li>
          <li>
            <div className="time">저녁 뷔페</div>
            <div className="context">
              <p>월 ~ 목요일 18:00 ~ 21:30</p>
              <p>금 ~ 일요일 1부(17:00 ~19:00), 2부(19:30 ~ 21:30)</p>
              <p>공휴일 1부(17:00 ~19:00), 2부(19:30 ~ 21:30)</p>
              <span>성인 192,000원 / 어린이 96,000원</span>
            </div>
          </li>
        </ul>
        <em>* 어린이 : 37개월 이상 ~ 만 12세 이하</em>
        <em>* 10월 1일 (화), 2일 (수) 저녁 뷔페를 2부제로 운영합니다.</em>
      </div>
    </>
  );
};

export default TimeTable;
