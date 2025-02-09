import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import DateRangePicker from "./DateRangePicker";
import PackageRoomItem from "./PackageRoomItem"; // 패키지 컴포넌트
import OneRoomItem from "./OneRoomItem"; // 객실 컴포넌트
// import "../../scss/res_search.scss";
import "../../scss/common.scss";
import "../../scss/reservation.scss";

function Res_search() {
  const navigate = useNavigate();

  // 상태 관리
  const [checkInDate, setCheckInDate] = useState(null); // 체크인 날짜
  const [checkOutDate, setCheckOutDate] = useState(null); // 체크아웃 날짜
  const [availablePackages, setAvailablePackages] = useState([]); // 예약 가능한 패키지 목록
  const [availableRooms, setAvailableRooms] = useState([]); // 예약 가능한 객실 목록
  const [showPicker, setShowPicker] = useState(false); // 날짜 선택기 표시 여부
  const [tab, setTab] = useState("package"); // 'package' or 'room' 탭 선택 상태
  const [popupAdultCount, setPopupAdultCount] = useState(1); // 팝업에서 사용하는 성인 수
  const [popupChildrenCount, setPopupChildrenCount] = useState(0); // 팝업에서 사용하는 어린이 수
  const [confirmedAdultCount, setConfirmedAdultCount] = useState(1); // 확인버튼을 누를 때의 성인 수
  const [confirmedChildrenCount, setConfirmedChildrenCount] = useState(0); // 확인버튼을 누를 때의 어린이 수
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [sortingOrder, setSortingOrder] = useState(""); // 정렬 상태 (낮은 가격 순 / 높은 가격 순)
  const [isSortingOpen, setIsSortingOpen] = useState(false); // 정렬 옵션 드롭다운 열기/닫기
  const [isSearchClicked, setIsSearchClicked] = useState(false); // 검색 버튼 클릭 여부

  const togglePicker = () => setShowPicker(!showPicker);
  // 팝업 상태 토글
  const togglePopup = () => {
    setIsPopupVisible(!isPopupVisible);
    console.log("Popup Visible:", !isPopupVisible);

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
    if (type === "adult" && popupAdultCount < 2) {
      setPopupAdultCount((prev) => prev + 1);
    }
    if (type === "children" && popupChildrenCount < 3) {
      setPopupChildrenCount((prev) => prev + 1);
    }
  };

  const decrementCount = (type) => {
    if (type === "adult" && popupAdultCount > 1) {
      setPopupAdultCount((prev) => prev - 1);
    }
    if (type === "children" && popupChildrenCount > 0) {
      setPopupChildrenCount((prev) => prev - 1);
    }
  };

  // 가격 정렬 함수
  const sortPackages = (packages) => {
    return packages.sort((a, b) => {
      if (sortingOrder === "lowToHigh") {
        return a.offer_price - b.offer_price;
      } else if (sortingOrder === "highToLow") {
        return b.offer_price - a.offer_price;
      } else {
        return 0; // 기본 정렬 없음
      }
    });
  };

  const sortRooms = (rooms) => {
    return rooms.sort((a, b) => {
      if (sortingOrder === "lowToHigh") {
        return a.day_price - b.day_price;
      } else if (sortingOrder === "highToLow") {
        return b.day_price - a.day_price;
      } else {
        return 0; // 기본 정렬 없음
      }
    });
  };

  // 정렬 기준 변경 함수
  const handleSortChange = (order) => {
    setSortingOrder(order);
    setIsSortingOpen(false); // 드롭다운을 닫음
  };

  useEffect(() => {
    if (tab === "package") {
      const sortedPackages = sortPackages([...availablePackages]);
      setAvailablePackages(sortedPackages);
    } else if (tab === "room") {
      const sortedRooms = sortRooms([...availableRooms]);
      setAvailableRooms(sortedRooms);
    }
  }, [sortingOrder, tab]);

  // 드롭다운 토글 함수
  const toggleSortingDropdown = () => {
    setIsSortingOpen(!isSortingOpen); // 드롭다운 열기/닫기
  };

  // Axios 요청에서 오류 처리
  const handleSearch = async () => {
    // 날짜가 선택되지 않았으면 alert
    if (!checkInDate || !checkOutDate) {
      alert("날짜를 선택해주세요");
      return;
    }

    setIsSearchClicked(true); // 검색 버튼 클릭 여부 설정
    
    // 날짜에 하루를 더하는 함수
    const addOneDay = (date) => {
      const newDate = new Date(date); // 새로운 날짜 객체 생성
      newDate.setDate(newDate.getDate() + 1); // 하루 더하기
      return newDate;
    };
    // const startDate = addOneDay(checkInDate).toISOString().split("T")[0];
    // const endDate = addOneDay(checkOutDate).toISOString().split("T")[0];
    const startDate = checkInDate
    const endDate = checkOutDate

    console.log("시작일:", startDate);
    console.log("종료일:", endDate);

    try {
      const response = await axios.post("http://localhost:5002/bk/reserve", {
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
    <div className="container reservation">
      <section className="reservation">
        <div className="center">
          <h2>날짜, 인원 선택</h2>
          <div className="reservation-wrap">
            <div className="date-wrap">
              <span className="tit">CHECK IN / OUT</span>
              <DateRangePicker
                onDateChange={handleDateChange}
                showPicker={showPicker}
                togglePicker={togglePicker}
              />
            </div>
            <div className="room-wrap" onClick={togglePopup}>
              <div className="box adult">
                <span className="tit">ADULT</span>
                <span className="num">{confirmedAdultCount}</span>
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
            <div className={`reservation-popup ${isPopupVisible ? "on" : ""}`}>
              <form action="">
                <ul className="popup-left">
                  <li>
                    <div className="tit">객실 1</div>
                    <div className="count-wrap adult">
                      <button
                        type="button"
                        className="btn-down"
                        onClick={() => decrementCount("adult")}
                      >
                        <span className="blind">숫자 내리기</span>
                      </button>
                      <p className="adult">
                        성인 <span className="num">{popupAdultCount}</span>
                      </p>
                      <button
                        type="button"
                        className="btn-up"
                        onClick={() => incrementCount("adult")}
                      >
                        <span className="blind">숫자 올리기</span>
                      </button>
                    </div>
                    <div className="count-wrap children">
                      <button
                        type="button"
                        className="btn-down"
                        onClick={() => decrementCount("children")}
                      >
                        <span className="blind">숫자 내리기</span>
                      </button>
                      <p className="children">
                        어린이 <span className="num">{popupChildrenCount}</span>
                      </p>
                      <button
                        type="button"
                        className="btn-up"
                        onClick={() => incrementCount("children")}
                      >
                        <span className="blind">숫자 올리기</span>
                      </button>
                    </div>
                  </li>
                </ul>
                <div className="popup-right">
                  <p className="desc">* 어린이 기준 : 37개월 - 12세</p>
                  <button type="button" onClick={handleConfirm}>
                    확인
                  </button>
                </div>
              </form>

              <button
                className="close-btn"
                onClick={() => setIsPopupVisible(false)}
              >
                <span className="blind">닫기</span>
              </button>
            </div>
          </div>
          <div className={`no-select ${isSearchClicked ? "" : "on"}`}>
            예약을 원하시는 날짜, 인원을 선택해주세요.
          </div>
          <div className={`search-results-wrap ${isSearchClicked ? "on" : ""}`}>
            {isSearchClicked && (
              <div>
            <div className="tab-wrap">
              <ul className="tab">
                <li
                  className={tab === "package" ? "on" : ""}
                  onClick={() => setTab("package")}
                >
                  패키지 (
                  <em className="num">
                    {availablePackages.length > 0
                      ? `${availablePackages.length}`
                      : "0"}
                  </em>
                  )
                </li>
                <li
                  className={tab === "room" ? "on" : ""}
                  onClick={() => setTab("room")}
                >
                  객실 (
                  <em className="num">
                    {availableRooms.length > 0
                      ? `${availableRooms.length}`
                      : "0"}
                  </em>
                  )
                </li>
              </ul>

              <div className="keyword-sorting">
                <div className="sorting-wrap">
                  <div
                    className={`selected ${isSortingOpen ? "on" : ""}`}
                    onClick={toggleSortingDropdown}
                  >
                    {sortingOrder === ""
                      ? "필터 가격 순"
                      : sortingOrder === "lowToHigh"
                      ? "낮은 가격 순"
                      : "높은 가격 순"}
                  </div>
                  {isSortingOpen && (
                    <ul className="select-sort">
                      <li
                        className={sortingOrder === "lowToHigh" ? "on" : ""}
                        onClick={() =>
                          handleSortChange("lowToHigh", "낮은 가격 순")
                        }
                      >
                        낮은 가격 순
                      </li>
                      <li
                        className={sortingOrder === "highToLow" ? "on" : ""}
                        onClick={() =>
                          handleSortChange("highToLow", "높은 가격 순")
                        }
                      >
                        높은 가격 순
                      </li>
                    </ul>
                  )}
                </div>
              </div>
            </div>

            {/* 선택된 탭에 따라 콘텐츠 표시 */}
            <div className="tab-cont-wrap">
              {tab === "package" ? (
                <div className="tab-cont package on">
                  {availablePackages.map((pkg,index) => (
                    <PackageRoomItem
                      key={pkg.offer_id}
                      packageData={pkg}
                      index={index}
                      checkInDate={checkInDate}
                      checkOutDate={checkOutDate}
                      adultCount={confirmedAdultCount}
                      childrenCount={confirmedChildrenCount}
                    />
                  ))}
                </div>
              ) : (
                <div className="tab-cont room on">
                  <OneRoomItem
                    rooms={availableRooms}
                    checkInDate={checkInDate}
                    checkOutDate={checkOutDate}
                    adultCount={confirmedAdultCount}
                    childrenCount={confirmedChildrenCount}
                  />
                </div>
              )}
            </div>
            </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Res_search;
