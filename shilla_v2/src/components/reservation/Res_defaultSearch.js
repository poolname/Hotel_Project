// 객실에서 예약하기 버튼하면 들어가는 js

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import DateRangePicker from "./DateRangePicker";
import PackageRoomItem from "./PackageRoomItem"; // 패키지 컴포넌트
import OneRoomItem from "./OneRoomItem"; // 객실 컴포넌트
import "../../scss/res_search.scss";

function Res_search() {
  const navigate = useNavigate();

  // 상태 관리
  const [checkInDate, setCheckInDate] = useState(null); // 체크인 날짜
  const [checkOutDate, setCheckOutDate] = useState(null); // 체크아웃 날짜
//   const [availablePackages, setAvailablePackages] = useState([]); // 예약 가능한 패키지 목록
  const [availableRooms, setAvailableRooms] = useState([]); // 예약 가능한 객실 목록
  const [showPicker, setShowPicker] = useState(false); // 날짜 선택기 표시 여부
//   const [tab, setTab] = useState("package"); // 'package' or 'room' 탭 선택 상태
  const [popupAdultCount, setPopupAdultCount] = useState(0); // 팝업에서 사용하는 성인 수
  const [popupChildrenCount, setPopupChildrenCount] = useState(0); // 팝업에서 사용하는 어린이 수
  const [confirmedAdultCount, setConfirmedAdultCount] = useState(0); // 확인버튼을 누를 때의 성인 수
  const [confirmedChildrenCount, setConfirmedChildrenCount] = useState(0); // 확인버튼을 누를 때의 어린이 수
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const togglePicker = () => setShowPicker(!showPicker);
  // 팝업 상태 토글
  const togglePopup = () => {
    setIsPopupVisible(!isPopupVisible);

    // 팝업이 열릴 때 현재 확인된 값을 팝업 초기 값으로 설정
    if (!isPopupVisible) {
      setPopupAdultCount(confirmedAdultCount);
      setPopupChildrenCount(confirmedChildrenCount);
    }
  };

  // 날짜 변경 핸들러
  const handleDateChange = ({ startDate, endDate }) => {
    setCheckInDate(startDate);
    setCheckOutDate(endDate);
  };
  // 확인 버튼 핸들러
  const handleConfirm = () => {
    setConfirmedAdultCount(popupAdultCount);
    setConfirmedChildrenCount(popupChildrenCount);
    setIsPopupVisible(false); // 팝업 닫기
  };

  const incrementCount = (type) => {
    if (type === "adult") setPopupAdultCount((prev) => prev + 1);
    if (type === "children") setPopupChildrenCount((prev) => prev + 1);
  };

  const decrementCount = (type) => {
    if (type === "adult" && popupAdultCount > 0)
      setPopupAdultCount((prev) => prev - 1);
    if (type === "children" && popupChildrenCount > 0)
      setPopupChildrenCount((prev) => prev - 1);
  };

  // Axios 요청에서 오류 처리
  const handleSearch = async () => {
    // 날짜가 선택되지 않았으면 alert
    if (!checkInDate || !checkOutDate) {
      alert("날짜를 선택해주세요");
      return;
    }
    // 날짜에 하루를 더하는 함수
    const addOneDay = (date) => {
      const newDate = new Date(date); // 새로운 날짜 객체 생성
      newDate.setDate(newDate.getDate() + 1); // 하루 더하기
      return newDate;
    };
    const startDate = addOneDay(checkInDate).toISOString().split("T")[0];
    const endDate = addOneDay(checkOutDate).toISOString().split("T")[0];

    console.log("시작일:", startDate);
    console.log("종료일:", endDate);

    try {
      const response = await axios.post("http://192.168.0.13:5002/bk/reserve", {
        startDate,
        endDate,
      });

      if (response.status === 200) {
        const { availableRooms, availablePackages } = response.data;
        setAvailableRooms(availableRooms); // 객실 목록 업데이트
        setAvailablePackages(availablePackages); // 패키지 목록 업데이트
      }
    } catch (error) {
      console.error("예약 가능한 객실 조회 실패:", error.message); // 오류 메시지 출력
      if (error.response) {
        // 서버 응답이 있을 때
        console.error("서버 응답 오류:", error.response.data);
        console.error("서버 응답 상태:", error.response.status);
      } else if (error.request) {
        // 요청이 보내졌지만 응답이 없을 때
        console.error("응답 없음:", error.request);
      } else {
        // 기타 오류
        console.error("오류 발생:", error.message);
      }
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container">
      <div className="center">
        <section className="reservation">
          <div className="center">
            <h2>날짜, 인원 선택</h2>
            <div className="reservation-wrap">
              <div className="date-wrap">
                <h4>CHECK IN / OUT</h4>
                <DateRangePicker
                  onDateChange={handleDateChange}
                  showPicker={showPicker}
                  togglePicker={togglePicker}
                />
              </div>
              <div className="room-wrap" onClick={togglePopup}>
                <div className="box room">
                  <span className="tit">ROOM</span>
                  <span className="num">1</span>
                </div>
                <div className="box adult">
                  <span className="tit">ADULT</span>
                  <span className="num">1</span>
                </div>
                <div className="box children">
                  <span className="tit">CHILDREN</span>
                  <span className="num">{confirmedChildrenCount}</span>
                </div>
              </div>
              <button
                type="button"
                className="reservation-search-btn"
                onClick={handleSearch}
              >
                검색
              </button>
            </div>
          </div>

          {/* 탭 변경 */}
          {/* <div className="tabs">
            <button onClick={() => setTab("package")}>
              패키지{" "}
              {availablePackages.length > 0 ? `${availablePackages.length}` : ""}
            </button>
            <button onClick={() => setTab("room")}>
              객실 {availableRooms.length > 0 ? `${availableRooms.length}` : ""}
            </button>
          </div> */}

          {/* 객실만 보이도록 탭 제거 */}
          <div className="room-list">
            <h3>객실</h3>
            {availableRooms.map((room,index) => (
              <OneRoomItem
                key={room.room_id}
                roomData={room}
                checkInDate={checkInDate}
                checkOutDate={checkOutDate}
                index={index}
              />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default Res_search;
