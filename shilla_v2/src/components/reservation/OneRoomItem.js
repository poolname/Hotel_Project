import React, { useEffect,useState } from "react";
import "../../scss/oneRoomItem.scss";
import { useNavigate } from "react-router-dom";
import BtnModalRoom from "./BtnModalRoom";

function OneRoomItem({ rooms, checkInDate, checkOutDate, adultCount, childrenCount,index }) {

  const dataTitle = `pop-benefit-guide${index}`;
  const navigate = useNavigate();
  const memberId = sessionStorage.getItem("id");

  const roomImages = {
    "스탠다드 디럭스": "../../img/sub/roomStandardBusiness01.jpg",
    "비지니스 디럭스":"../../img/sub/roomStandardDelux01.jpg",
    "베리어프리 비지니스 디럭스":"../../img/sub/roomStandardGrand01.jpg",
    "그랜드코너 디럭스":"../../img/sub/roomStandardGrand02.jpg",
    "이그제큐티브 비지니스 디럭스":"../../img/sub/roomExecutiveBusiness02.jpg",
    "이그제큐티브 그랜드 디럭스":"../../img/sub/roomExecutiveGrand02.jpg",
    "수페리어 스위트":"../../img/sub/roomSuiteSuperior01.jpg", 
    "코리안 스위트":"../../img/sub/roomSuiteKorean02.jpg",
    "코너 스위트":"../../img/sub/roomExecutiveGrand02.jpg",
    "프리미어 스위트":"../../img/sub/roomSuitePremier01.jpg",
    "로열 스위트":"../../img/sub/roomSuiteRoyal01.jpg",
    "신라 스위트":"../../img/sub/roomSuiteShilla01.jpg",
    "프레지덴셜 스위트":"../../img/sub/roomSuitePresidential08.jpg",
  };

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
          adultCount: adultCount,
          childrenCount: childrenCount
        },
      });
      console.log(checkInDate, checkOutDate, room.day_price, room.room_type, room.room_id, room.product_id);
    } else {
      alert("체크인 및 체크아웃 날짜를 선택해주세요");
    }
  };


  useEffect(()=>{

    $(function () {
        // 레이어 팝업
        $(".lypop_close").on("click", function () {
            $(".lypop").hide();
        });
    
        $("[data-lybtn]").each(function () {
            var lypop = $(this).attr("data-lybtn");
            $(this).click(function () {
                $(".lypop").hide();
                $("[data-lyopen =" + lypop + "]")
                    .show()
                    .focus();
            });
            $("[data-lyclose]").click(function () {
                var lypopClose = $(this).attr("data-lyclose");
                $("[data-lyopen =" + lypop + "]").hide();
                $("[data-lybtn =" + lypopClose + "]").focus();
            });
        });

    });
  })


  return (
    <>
    <ul className="tab-cont room on">
        {Object.entries(roomGroups).map(([roomType, roomList]) => (
        <li key={roomType} className="room-type">
          <div className="box-wrap">

            <div className="l-box">
                <div className="img-wrap">
                    <img src={roomImages[roomType] || "../../img/sub/roomStandardBusiness01.jpg"} alt={roomType}/>
                </div>
                <div className="txt-wrap">
                    <div className="context">
                        <h3 className="tit room">{roomType}</h3>
                        <p className="desc">총 개수: {roomList.length}개</p>
                        <button type="button" className="pop-btn room" data-lybtn={`pop-benefit-guide`} title="혜택 및 이용 안내 상세내용 팝업 열림">혜택 및 이용 안내 +</button>

                    </div>
                </div>
            </div>
            <div className="r-box">
                <div className="price"><em>{roomList[0]?.day_price.toLocaleString()}</em>원</div>
                <div className="btn-wrap">
                    <button type="button" className="btn" onClick={() => toggleRoomType(roomType)}>{expandedRoomType === roomType ? "숨기기" : "남은 호수 보기"}<i className="fa-solid fa-chevron-down"></i></button>
                </div>

            </div>
          </div>


          {/* 모달 컴포넌트 */}
          <BtnModalRoom />
          
          <div className="room-type-list">
              {expandedRoomType === roomType && (
                <div className="room-list">
                  {roomList.map((room) => (
                    <div key={room.room_id} className="room-item">
                      <div className="room-type">
                        <h4>{room.room_type}</h4>
                        <p>룸 호수: {room.room_id}</p>
                      </div>
                      <button className="btn" onClick={() => handleReservation(room)}>예약하기</button>
                    </div>
                  ))}
                </div>
              )}
          </div>

        </li>
      ))}
    </ul>

    </>
  );
}

export default OneRoomItem;
