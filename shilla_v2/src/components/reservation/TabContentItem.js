import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./tabContentItem.scss"; // 필요 시 스타일 파일 추가

function TabContentItem({room}) {
  const navigate = useNavigate();
  const [isRoomTypeVisible, setIsRoomTypeVisible] = useState(false); // 상태 관리

  const toggleRoomType = () => {
    setIsRoomTypeVisible(!isRoomTypeVisible); // 토글 기능
  };

  return (
    <div className="tab-cont-wrap">
      <ul className="tab-cont package on">
        <li>
          <div className="box-wrap">
            <div className="l-box">
              <div className="img-wrap">
                <img src="../../img/sub/cabana-01.jpg" alt="Cabana" />
              </div>
              <div className="txt-wrap">
                <div className="context">
                  <span className="badge">추천</span>
                  <h3 className="tit">Member Exclusive</h3>
                  <p className="desc">리워즈 회원 전용 객실 할인</p>
                  <button
                    type="button"
                    className="pop-btn"
                    data-lybtn="pop-benefit-guide"
                    title="혜택 및 이용 안내 상세내용 팝업 열림"
                  >
                    혜택 및 이용 안내 +
                  </button>
                </div>
              </div>
            </div>
            <div className="r-box">
              <div className="price">
                <em></em> 4300원 ~
              </div>
              <div className="btn-wrap">
                <button type="button" className="reserve-btn" onClick={toggleRoomType}>
                  예약하기 <i className="fa-solid fa-chevron-down"></i>
                </button>
              </div>
            </div>
          </div>

          {/* Room Type 선택 부분 */}
          {isRoomTypeVisible && ( // 조건부 렌더링
            <ul className="room-type-select">
              <li>
                <div className="tit">룸타입</div>
                <div className="bed-type">
                  <div className="box">
                    <div>
                      <input
                        type="radio"
                        name="standard-deluxe"
                        id="standard-deluxe-double"
                      />
                      <label htmlFor="standard-deluxe-double">Double</label>
                    </div>
                    <button
                      type="button"
                      className="cart-btn"
                      onClick={() => navigate("/reserve/detail")}
                    >
                      보관함 담기
                    </button>
                  </div>
                  <div className="box twin">
                    <div>
                      <input
                        type="radio"
                        name="standard-deluxe"
                        id="standard-deluxe-twin"
                      />
                      <label htmlFor="standard-deluxe-twin">Twin</label>
                    </div>
                    <button
                      type="button"
                      className="cart-btn"
                      onClick={() => navigate("/reserve/detail")}
                    >
                      보관함 담기
                    </button>
                  </div>
                </div>
              </li>
            </ul>
          )}
        </li>
      </ul>
    </div>
  );
}

export default TabContentItem;
