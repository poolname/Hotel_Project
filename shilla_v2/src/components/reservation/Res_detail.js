import React, { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import "../../scss/res_detail.scss";
import axios from "axios";

function Res_detail(props) {
  const navigate = useNavigate();
  const location = useLocation(); // 전달된 상태 가져오기

  // 상태관리
  const [upSystemImg, setUpSystemImg] = useState("");

  // const addOneDay = (date) => {
  //   const newDate = new Date(date); // 새로운 날짜 객체 생성
  //   newDate.setDate(newDate.getDate() + 1); // 하루 더하기
  //   return newDate;
  // };

  // 전달된 데이터
  const {
    checkInDate,
    checkOutDate,
    offerPrice,
    offerName,
    roomId,
    productId,
    adultCount,
    childrenCount
  } = location.state || {};

  console.log("Res_search.js에서 받은 데이터");
  console.log("product아이디 : ", productId);
  console.log("체크인 : ", checkInDate);
  console.log("체크아웃 : ", checkOutDate);
  console.log("이름 : ", offerName);
  console.log("가격 : ", offerPrice);
  console.log("객실호수 : ", roomId);
  console.log("adultCount : ", adultCount);
  console.log("childrenCount :", childrenCount);
  // productId가 없다면 오류 처리
  if (!productId) {
    console.error("productId가 전달x");
  }

  // 날짜에 하루를 더하는 함수
  // const addOneDay = (date) => {
  //   const newDate = new Date(date); // 새로운 날짜 객체 생성
  //   newDate.setDate(newDate.getDate() + 1); // 하루 더하기
  //   return newDate;
  // };

  // const formattedCheckInDate = addOneDay(checkInDate)
  //   .toISOString()
  //   .split("T")[0];
  // const formattedCheckOutDate = addOneDay(checkOutDate)
  //   .toISOString()
  //   .split("T")[0];

  console.log("체크인 : ", checkInDate);
  console.log("체크아웃 : ", checkOutDate);

  // console.log("포멧체크인 : ", formattedCheckInDate);
  // console.log("포멧체크아웃 : ", formattedCheckOutDate);

  const [options, setOptions] = useState({
    adultBf: 0, // 성인 조식 수
    childBf: 0, // 어린이 조식 수
    extraBed: 0, // 엑스트라 베드 수
  });
  const [paySum, setPaySum] = useState(offerPrice || 0); // 기본 요금 설정
  const [modalMessage, setModalMessage] = useState(""); // 모달 메시지
  const [showModal, setShowModal] = useState(false); // 모달 표시 여부
  const [guideChecked, setGuideChecked] = useState(false); // 유의사항 체크 여부
  const [personalInfoAgree, setPersonalInfoAgree] = useState(""); // 개인정부 동의 상태
  const [thirdPartyAgree, setThirdPartyAgree] = useState(""); // 제ㄱ자 제공 동의 상태

  const updateOption = (type, value) => {
    setOptions((prev) => ({
      ...prev,
      [type]: Math.max(prev[type] + value, 0), // 0 미만 방지
    }));
  };

  useEffect(() => {
    // productId로 upSystem 이미지를 가져오기
    const fetchUpSystem = async () => {
      try {
        const response = await axios.post(
          "http://localhost:5002/bk/reserve/detail",
          {
            productId, // location.state에서 productId를 전달받는다고 가정
          }
        );
        setUpSystemImg(response.data.upSystem);
        console.log("upSystemImg:", upSystemImg);
      } catch (error) {
        console.error("upSystem 이미지를 가져오지 못했습니다:", error);
      }
    };

    if (productId) {
      fetchUpSystem();
    }
  }, [productId]);

  // options 샅애가 벼경될 때 요금을 다시 계산
  useEffect(() => {
    window.scrollTo(0, 0);
    const total =
      offerPrice +
      options.adultBf * 60000 +
      options.childBf * 38000 +
      options.extraBed * 66000;
    setPaySum(total);
  }, [options, offerPrice]);

  // 합계 구하는 함수
  // const priceSum = () => {
  //   const total =
  //     468000 +
  //     options.adultBf * 60000 +
  //     options.childBf * 38000 +
  //     options.extraBed * 66000;
  //   setPaySum(total);
  // };

  const handlePayment = () => {
    // 유의사항 체크 여부 확인
    if (!guideChecked) {
      // setModalMessage("유의사항, 취소 및 환불 규정을 모두 체크를 해주셔야 결제 가능합니다");
      // setShowModal(true);
      alert(
        "유의사항, 취소 및 환불 규정을 모두 체크를 해주셔야 결제 가능합니다"
      );
      console.log("유의사항 에러");
      return;
    }

    // 개인정보 수집 동의 여부 확인
    if (personalInfoAgree !== "agree") {
      // setModalMessage("개인정보 수집ㆍ이용 동의해야지만 결제 가능합니다.");
      // setShowModal(true);
      alert("개인정보 수집ㆍ이용 동의해야지만 결제 가능합니다");
      console.log("개인정보 수집 에러");
      return;
    }

    // 제3자 제공 동의 여부 확인
    if (thirdPartyAgree !== "agree") {
      // setModalMessage("개인정보 제3자 제공에 대한 동의해야 결제가 가능합니다.");
      // setShowModal(true);
      alert("개인정보 제3자 제공에 대한 동의해야 결제가 가능합니다");
      console.log("제3자 에러");
      return;
    }

    //      // 결제하기 페이지
    //      setModalMessage("결제가 완료되었습니다. 이용해 주셔서 감사합니다!");
    //   setShowModal(true);
    // }

    // PaymentPage로 이동
    navigate("/reserve/detail/payment", {
      state: {
        reservationDate: `${checkInDate} ~ ${checkOutDate}`, // 예약 날짜
        roomName: offerName, // offerName 객실
        // adultBf: options.adultBf,
        // childBf: options.childBf,
        // extraBed: options.extraBed,
        roomId: roomId,
        productId: productId,
        paySum: paySum,
        adultCount: adultCount,
        childrenCount: childrenCount,
      },
    });
  };
  // 모달 창 닫기
  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="container">
      <div className="center">
        <section className="payment">
          <div className="center">
            <h2>예약 확인 및 결제</h2>
            <div className="content">
              <div className="info">
                <h3>예약 정보</h3>
                <div className="room-img">
                  {upSystemImg ? (
                    <img src={upSystemImg} alt="Room Image" />
                  ) : (
                    <p>이미지 없음</p>
                  )}
                </div>
                <ul className="rsv-info">
                  <li className="list">
                    <h4>CHECK IN / OUT</h4>
                    <input
                      className="date"
                      type="text"
                      name="rsv-date"
                      value={`${checkInDate} ~ ${checkOutDate}`}
                      readOnly
                    />
                  </li>
                  <li className="list">
                    <h4>ROOM</h4>
                    <div className="box room">
                      <input
                        className="room-name"
                        type="text"
                        name="rsv-date"
                        value={`${offerName} [${roomId}호]`}
                        readOnly
                      />
                    </div>
                  </li>
                  <li className="list">
                    <h4>인원수</h4>
                    <div className="box adult">
                      <span>성인</span>
                      <span className="mem-num"> {adultCount}</span>
                    </div>
                    <div className="box child">
                      <span>어린이</span>
                      <span className="mem-num"> {childrenCount}</span>
                    </div>
                  </li>
                  <li className="list">
                    <h4>객실 요금</h4>
                    <div className="box price">
                      <span className="rsv-price">
                        {offerPrice.toLocaleString()}
                      </span>
                      <span>원</span>
                    </div>
                  </li>
                </ul>
              </div>
              <ul className="guide">
                <h3>유의사항</h3>
                <li className="list">
                  <h4>호텔 이용안내</h4>
                  <div className="txt-wrap">
                    <ul className="txt">
                      <li>
                        기준 인원을 초과하여 투숙 시 추가 인원에 대해 별도의
                        요금이 부과됩니다. 추가 인원에 대한 기본 요금은 성인
                        60,500원, 어린이 36,300원이며, 객실 타입 및 패키지
                        혜택에 따라 상이합니다. (성인 기준 : 만 13세 이상,
                        어린이 기준 : 37개월 이상 ~ 만 12세 이하){" "}
                      </li>
                      <li>
                        37개월 미만의 유아 동반 시 추가 인원 요금 및 조식은
                        무료이며, 유아(37개월 미만) 동반 여부는 체크인 시 프런트
                        데스크 직원에게 알려 주셔야 무료로 이용 가능합니다.
                      </li>
                      <li>
                        체크인은 오후 3시 이후, 체크아웃은 오전 11시까지입니다.
                        오후 3시 이전 Early Check-in 또는 오전 11시 이후 Late
                        Check-out 하실 경우 추가 요금이 부과될 수 있습니다.
                      </li>
                      <li>
                        체크인 시 등록카드 작성 및 투숙객 본인 확인을 위해 본인
                        사진이 포함된 신분증을 반드시 제시해 주시기 바랍니다.
                      </li>
                      <li>
                        본 홈페이지 요금은 할인 적용된 요금이며, 카드사 할인
                        등의 중복 할인 혜택이 적용되지 않습니다.
                      </li>
                      <li>
                        어린이 동반 고객을 위한 영유아 용품(아기 욕조, 아기
                        침대, 어린이 베개 및 아동용 배스 로브와 슬리퍼)은
                        객실예약과를 통해 사전 요청 가능하며, 이용 상황에 따라
                        조기 마감될 수 있습니다.(단, 유모차는 현장에서만 대여
                        가능합니다.)
                      </li>
                      <li>
                        대출 요청이 완료된 영유아 용품, 엑스트라 베드는 체크인
                        당일 18시까지 객실에 준비해 드립니다.
                      </li>
                      <li>
                        호텔 내 객실과 공공장소는 모두 금연 장소입니다. 흡연은
                        금지되며 위반 시 페널티가 부과됩니다.
                      </li>
                      <li>
                        관내 레스토랑은 사전 예약으로 편리하게 이용하실 수
                        있습니다.
                      </li>
                      <li>
                        자원재활용법을 준수하여 일회용품인 칫솔, 치약, 면도기는
                        무료 제공하지 않습니다. 환경보호를 위해 개별 지참을
                        부탁드립니다.
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="list">
                  <h4>부대시설 이용 안내</h4>
                  <div className="txt-wrap">
                    <ul className="txt">
                      <li>
                        체련장(Gym), 및 수영장, 실내 사우나(유료 시설)는 매월
                        3번째 수요일 정기 휴무입니다.
                      </li>
                      <li>
                        체련장은 만 16세 이상, 실내 사우나는 만 13세 이상부터
                        이용 가능합니다.
                      </li>
                      <li>
                        실내 수영장은 성인 고객 전용 시설로, 만 13세 미만 고객은
                        주말 및 공휴일에 한해 성인 보호자의 보호 하에 이용
                        가능합니다.
                      </li>
                      <li>
                        야외 수영장인 어번 아일랜드는 유료 시설로서 입장 혜택이
                        포함된 상품 외에는 이용 시 입장료가 추가로 부과되며 사전
                        예약은 불가합니다. 쾌적하고 안전한 운영을 위해 적정 인원
                        초과 시 입장이 제한될 수 있습니다.
                      </li>
                      <li>
                        2024년 어번 아일랜드(야외 수영장) 운영 기간 : 3월 22일 ~
                        11월 17일
                      </li>
                      <li>
                        실내 및 야외 수영장의 성인풀에서는 신장 140cm 미만인
                        고객은 성인 보호자의 보호 하에 구명조끼 착용 시에만 이용
                        가능합니다.
                      </li>
                      <li>
                        실내 및 야외 수영장에서 다이빙은 금지되어 있습니다.
                      </li>
                      <li>
                        성인풀, 키즈풀 및 자쿠지 등의 시설 이용 시 현장 라이프
                        가드 직원의 안내를 받으시기 바랍니다.
                      </li>
                      <li>
                        호텔 부대시설은 감염병 예방법, 재난 안전법 등 관련 법령
                        및 방역당국 등의 규제, 조치 사항 등에 따라 사전 고지
                        없이 이용이 제한되거나 변경될 수 있습니다.
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="list">
                  <h4>취소/변경 및 노쇼 (No-show) 안내</h4>
                  <div className="txt-wrap">
                    <ul className="txt">
                      <li>숙박 예정일 1일 전 18시까지는 위약금 없음</li>
                      <li>
                        숙박 예정일 1일 전 18시 이후 취소/변경/노쇼 발생 시
                        <br />
                        <strong>
                          * 성수기(5월~10월, 12월24일~31일) : 최초 1일 숙박
                          요금의 80%가 위약금으로 부과
                          <br />* 비수기(성수기 외 기간) : 최초 1일 숙박 요금의
                          10%가 위약금으로 부과
                        </strong>
                      </li>
                    </ul>
                  </div>
                </li>
                <div className="chk-wrap">
                  <input
                    id="guide-chk"
                    type="checkbox"
                    className="guide-chk"
                    name="guide-chk"
                    value="chk"
                    // checked="guidedChecked"
                    onChange={() => setGuideChecked(!guideChecked)}
                  />
                  <label htmlFor="guide-chk">
                    유의사항, 취소 및 환불 규정을 모두 확인해주세요.
                  </label>
                </div>
              </ul>
              <div className="agr">
                <h3>개인정보 수집ㆍ이용 동의</h3>
                <div className="collect-agr">
                  <h4>필수적인 개인정보의 수집ㆍ이용에 관한 사항</h4>
                  <div className="txt-box">
                    <p>
                      신라호텔 객실예약과 관련하여 귀사가 아래와 같이 본인의
                      개인정보를 수집 및 이용하는데 동의합니다.
                    </p>

                    <p>
                      ① 수집 이용 항목 | 성명(국문·영문), 성별, 지역(여권기준),
                      이메일, 연락처(휴대전화·자택전화), 구매 및 예약 내역,
                      투숙기간, 결제정보(카드종류, 카드번호, 유효기간) <br />
                      ② 수집 이용 목적 | 호텔 예약 및 고객 응대 <br />
                      ③ 보유 이용 기간 | 예약일 후 1년 <br />
                    </p>

                    <p>
                      ※위 사항에 대한 동의를 거부할 수 있으나, 이에 대한 동의가
                      없을 경우 예약 서비스 제공과 관련된 제반 절차 진행이
                      불가능 할 수 있음을 알려드립니다.
                    </p>
                  </div>
                  <div className="chk-wrap">
                    <input
                      type="radio"
                      name="personalInfoAgree"
                      id="personalInfoAgree-agree"
                      value="agree"
                      onChange={(e) => setPersonalInfoAgree(e.target.value)}
                    />
                    <label htmlFor="personalInfoAgree-agree">동의함</label>
                    <input
                      type="radio"
                      name="personalInfoAgree"
                      id="personalInfoAgree-disagree"
                      value="disagree"
                      onChange={(e) => setPersonalInfoAgree(e.target.value)}
                    />
                    <label htmlFor="personalInfoAgree-disagree">
                      동의하지 않음
                    </label>
                  </div>
                </div>
                <div className="suggest-agr">
                  <h4>개인정보 제3자 제공에 대한 동의</h4>
                  <div className="txt-box">
                    <p>
                      ① 제공받는 자 | 신라에이치엠㈜
                      <br />
                      ② 제공 목적 | 호텔 예약 및 고객 응대
                      <br />
                      ③ 제공하는 항목 | 성명(국문·영문), 지역(여권기준), 이메일,
                      연락처(휴대전화·자택전화), 구매 및 예약 내역, 투숙기간,
                      결제정보(카드종류, 카드번호, 유효기간)
                      <br />
                      ④ 제공 기간 | 예약일 후 1년간
                      <br />
                    </p>
                    <p>
                      ※위 사항에 대한 동의를 거부할 수 있으나, 이에 대한 동의가
                      없을 경우 신라 리워즈 회원가입 및 서비스 제공이 불가능함을
                      알려드립니다.
                    </p>
                  </div>
                  <div className="chk-wrap">
                    <input
                      type="radio"
                      name="thirdPartyAgree"
                      id="thirdPartyAgree-agree"
                      value="agree"
                      onChange={(e) => setThirdPartyAgree(e.target.value)}
                    />
                    <label htmlFor="thirdPartyAgree-agree">동의함</label>
                    <input
                      type="radio"
                      name="thirdPartyAgree"
                      id="thirdPartyAgree-disagree"
                      value="disagree"
                      onChange={(e) => setThirdPartyAgree(e.target.value)}
                    />
                    <label htmlFor="thirdPartyAgree-disagree">
                      동의하지 않음
                    </label>
                  </div>
                </div>
              </div>
              <div className="total-wrap">
                <div className="total">
                  <span>요금 합계 : </span>
                  <span className="total-price">{paySum.toLocaleString()}</span>
                  <span>원</span>
                </div>
                <div className="btn-wrap type1">
                  <button className="btn btn-03" onClick={() => navigate(-1)}>
                    이전으로 돌아가기
                  </button>
                  <button
                    className="btn btn-01"
                    id="pay"
                    data-lybtn="pop-alert"
                    onClick={handlePayment}
                  >
                    결제하기
                  </button>
                </div>
              </div>
            </div>
          </div>
          {showModal && (
            <PaymentModal message={modalMessage} onClose={closeModal} />
          )}
        </section>
      </div>
    </div>
  );
}

export default Res_detail;
