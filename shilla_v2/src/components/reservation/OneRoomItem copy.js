import React, { useState } from "react";
import "../../scss/oneRoomItem.scss";
import { useNavigate } from "react-router-dom";

function OneRoomItem({ rooms, checkInDate, checkOutDate }) {
  const navigate = useNavigate();
  const memberId = sessionStorage.getItem("id");

  // 룸 타입별 상태 관리
  const [expandedRoomType, setExpandedRoomType] = useState(null);

  // 룸 데이터를 룸타입별로 그룹화
  const roomGroups = rooms.reduce((acc, room) => {
    const { room_type } = room;
    if (!acc[room_type]) acc[room_type] = [];
    acc[room_type].push(room);
    return acc;
  }, {});

  // 룸 타입 클릭 핸들러
  const toggleRoomType = (roomType) => {
    setExpandedRoomType(expandedRoomType === roomType ? null : roomType);
  };

  const handleReservation = (room) => {
    if (!memberId) {
      alert("로그인이 필요합니다.");
      navigate("/login");
      return;
    }

    if (checkInDate && checkOutDate) {
      navigate("/reserve/detailallroom", {
        state: {
          checkInDate,
          checkOutDate,
          dayPrice: room.day_price,
          roomType: room.room_type,
          roomId: room.room_id,
          productId: room.product_id,
        },
      });
      console.log(checkInDate, checkOutDate, room.day_price, room.room_type, room.room_id, room.product_id);
    } else {
      alert("체크인 및 체크아웃 날짜를 선택해주세요");
    }
  };

  return (
    <div className="room-group">
      {Object.entries(roomGroups).map(([roomType, roomList]) => (
        <div key={roomType} className="room-type">
          {/* 룸 타입과 기본 정보 표시 */}
          <div className="room-type-header">
            <div className="room-info">
              <h4>{roomType}</h4>
              <p>가격: {roomList[0]?.day_price}원</p>
              <p>총 개수: {roomList.length}개</p>
            </div>
            <button onClick={() => toggleRoomType(roomType)}>
              {expandedRoomType === roomType ? "숨기기" : "남은 호수 보기"}
            </button>
          </div>

          {/* 호수 리스트 표시 */}
          {expandedRoomType === roomType && (
            <div className="room-list">
              {roomList.map((room) => (
                <div key={room.room_id} className="room-item">
                  <h4>{room.room_type}</h4>
                  <p>룸 호수: {room.room_id}</p>
                  <button onClick={() => handleReservation(room)}>예약하기</button>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default OneRoomItem;
