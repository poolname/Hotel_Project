import React from "react";
import '../../scss/packageRoomItem.scss'
import { useNavigate } from "react-router-dom";

function PackageRoomItem({ packageData, checkInDate, checkOutDate }) {
  const navigate = useNavigate();
  const memberId = sessionStorage.getItem("id");

  const formatDate = (date) => {
    if (!date) return "미정"; // null 또는 undefined 처리
    const parsedDate = new Date(date); // date가 ISO 문자열이어도 Date 객체로 변환
    if (isNaN(parsedDate)) return "유효하지 않은 날짜"; // 유효하지 않은 날짜 처리
  
    const year = parsedDate.getUTCFullYear(); // UTC 기준으로 연도 추출
    const month = String(parsedDate.getUTCMonth() + 1).padStart(2, '0'); // UTC 기준으로 월 추출
    const day = String(parsedDate.getUTCDate()).padStart(2, '0'); // UTC 기준으로 일 추출
  
    return `${year}-${month}-${day}`;
  };

  // 패키지의 기간 포맷
  const formattedStartDate = formatDate(packageData.start_date);
  const formattedEndDate = formatDate(packageData.end_date);

  // 체크인/체크아웃 날짜 포맷
  const formattedCheckInDate = formatDate(checkInDate);
  const formattedCheckOutDate = formatDate(checkOutDate);

  console.log("패키지 포맷 기간 시작날짜 : ",formattedStartDate)
  console.log("패키지 포맷 기간 시작날짜 : ",formattedEndDate)
  console.log("packageData.room_id : ",packageData.room_id)


  console.log("packageData,체크인, 체크아웃 : ",packageData, checkInDate, checkOutDate)

  const handleReservation = () => {
    if (!memberId) {
      alert("로그인이 필요합니다.");
      navigate("/login");
      return;
    }
    // 예약하기 버튼 클릭 시, Res_detail 페이지로 데이터 전달
    if (checkInDate && checkOutDate) {
      navigate("/reserve/detail", {
        state: {
          checkInDate: formattedCheckInDate,
          checkOutDate: formattedCheckOutDate, 
          offerPrice: packageData.offer_price,
          offerName: packageData.offer_name,
          roomId: packageData.room_id,
          productId: packageData.product_id,
        },
      });
      console.log(checkInDate, checkOutDate, packageData.offer_price, packageData.offer_name, packageData.room_id, packageData.product_id);
    } else {
      alert("체크인 및 체크아웃 날짜를 선택해주세요");
    }
  };
  
  return (
    <div className="package-item">
      <h4>{packageData.offer_name}</h4>
      <p>{packageData.offer_description}</p>
      <p>패키지 기간: {formattedStartDate} ~ {formattedEndDate}</p>
      <p>가격: {packageData.offer_price}원</p>
      <p>{packageData.room_id}</p>
      <div className="package-details">
        <button onClick={handleReservation}>예약하기</button>
      </div>
    </div>
  );
} 

export default PackageRoomItem;
