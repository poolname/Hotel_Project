import React from "react";
import "../../../scss/adminResTodayTb.scss";

const AdminTodayRes = ({ todayReservations, cancelledReservations }) => {
  // 날짜 포맷을 YYYY-MM-DD로 변환하는 함수
  const formatDate = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0"); // 월은 0부터 시작하므로 +1을 해줍니다.
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  return (
    <div className="cont cont4">
      <h2>예약관리</h2>
      <h3>당일 예약 현황</h3>
      <table border="">
        <thead>
          <tr>
            <th>예약 ID</th>
            <th>회원 ID</th>
            <th>예약 날짜</th>
            <th>성인 수</th>
            <th>아동 수</th>
            <th>객실 타입 / 오퍼 패키지</th>
            <th>총 가격</th>
          </tr>
        </thead>
        <tbody>
          {todayReservations.length > 0 ? (
            todayReservations.map((reservation) => {
              const startDate = new Date(reservation.start_date);
              const endDate = new Date(reservation.end_date);
              const formattedStartDate = formatDate(startDate);
              const formattedEndDate = formatDate(endDate);

              return (
                <tr key={reservation.reservation_id}>
                  <td>{reservation.reservation_id}</td>
                  <td>{reservation.member_id}</td>
                  <td>
                    {formattedStartDate} ~ {formattedEndDate}
                  </td>
                  <td>{reservation.adult_cnt}</td>
                  <td>{reservation.child_cnt}</td>
                  <td>{reservation.room_or_offer}</td>
                  <td>{reservation.tot_price}원</td>
                </tr>
              );
            })
          ) : (
            <tr>
              <td colSpan="7">오늘 예약이 없습니다.</td>
            </tr>
          )}
        </tbody>
      </table>

      <h3>당일 취소 현황</h3>
      <table border="">
        <thead>
          <tr>
            <th>예약 ID</th>
            <th>회원 ID</th>
            <th>예약 날짜</th>
            <th>성인 수</th>
            <th>아동 수</th>
            <th>객실 타입 / 오퍼 패키지</th>
            <th>총 가격</th>
          </tr>
        </thead>
        <tbody>
          {cancelledReservations.length > 0 ? (
            cancelledReservations.map((reservation) => {
              const startDate = new Date(reservation.start_date);
              const endDate = new Date(reservation.end_date);
              const formattedStartDate = formatDate(startDate);
              const formattedEndDate = formatDate(endDate);

              return (
                <tr key={reservation.reservation_id}>
                  <td>{reservation.reservation_id}</td>
                  <td>{reservation.member_id}</td>
                  <td>
                    {formattedStartDate} ~ {formattedEndDate}
                  </td>
                  <td>{reservation.adult_cnt}</td>
                  <td>{reservation.child_cnt}</td>
                  <td>{reservation.room_or_offer}</td>
                  <td>{reservation.tot_price}원</td>
                </tr>
              );
            })
          ) : (
            <tr>
              <td colSpan="7">오늘 취소된 예약이 없습니다.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default AdminTodayRes;
