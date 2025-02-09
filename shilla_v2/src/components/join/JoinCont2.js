import React, { useState } from "react";
import JoinDateSelector from "./JoinDateSelector";
import JoinName from "./JoinName";
import JoinNameEng from "./JoinNameEng";
import JoinPw from "./JoinPw";
import JoinPhone from "./JoinPhone";
import JoinEmail from "./JoinEmail";
import '../../scss/myinfo.scss';

const bkURL = process.env.REACT_APP_BACK_URL;

const JoinCont2 = () => {
    const [id, setId] = useState('');  // 아이디 상태
    const [valid, setValid] = useState(false);  // 유효성 상태
    const [errorMessage, setErrorMessage] = useState('');  // 에러 메시지 상태
    const [idAvailable, setIdAvailable] = useState(null);  // 중복 여부 상태
    const [isPopupVisible, setIsPopupVisible] = useState(false);  // 팝업 표시 여부
    const [popupMessage, setPopupMessage] = useState('');  // 팝업 메시지
    const [nameEng, setNameEng] = useState('');  // 영어 이름 상태 (JoinNameEng 컴포넌트와 연동)
    const [pw, setPw] = useState('');  // 패스워드 상태
    const [nameKor, setNameKor] = useState('');  // 이름 상태
    const [email, setEmail] = useState('');  // 이메일 상태
    const [phone, setPhone] = useState('');  // 전화번호 상태
    const [birth, setBirth] = useState('');  // 생년월일 상태

    const [isEmailValid, setEmailValid] = useState(true);
    const [isNameValid, setNameValid] = useState(true);
    const [isNameEngValid, setNameEngValid] = useState(true);
    const [isPhoneValid, setPhoneValid] = useState(true);
    const [isPwValid, setPwValid] = useState(true);

    const idtype = /^[A-Za-z0-9]{6,}$/; // 아이디 유효성 정규표현식

    // 아이디 유효성 검사
    const validateId = (id) => {
        if (!id) {
            setValid(false);
            setErrorMessage('아이디를 입력해주세요.');
        } else if (!idtype.test(id)) {
            setValid(false);
            setErrorMessage('아이디는 영문자와 숫자만 사용 가능하며, 6자 이상이어야 합니다.');
        } else {
            setValid(true);
            setErrorMessage('');
        }
    };

    // 아이디 입력 처리
    const handleIdChange = (e) => {
        const value = e.target.value;
        setId(value);
        validateId(value);
    };

    // 아이디 중복 체크 API 호출
    const handleIdCheck = async () => {
        if (id === '') {
            setErrorMessage('아이디를 입력해주세요.');
            return;
        }

        try {
            const response = await fetch(`${bkURL}/join/idChk/${id}`);
            const data = await response.json();

            if (data.cnt === 0) {
                setIdAvailable(true); // 중복 없음
                setPopupMessage('사용 가능한 아이디입니다.');
            } else {
                setIdAvailable(false); // 중복 있음
                setPopupMessage('이미 사용 중인 아이디입니다.');
            }
        } catch (error) {
            console.error("아이디 중복 확인 오류:", error);
            setPopupMessage('아이디 중복 확인 오류');
        } finally {
            // 팝업을 보이게 설정
            setIsPopupVisible(true);
        }
    };

    // 팝업 닫기
    const closePopup = () => {
        setIsPopupVisible(false);
    };

    // 회원가입 폼 제출
    const handleSubmit = async (e) => {
        e.preventDefault(); // 폼 제출 기본 동작 방지
    
        const formData = {
            member_id: id,  // 아이디 상태 값
            pw: pw,  // 패스워드 상태 값
            name: nameKor,  // 이름 상태 값
            name_eng: nameEng,  // 영어 이름 상태 값
            email: email,  // 이메일 상태 값
            phone: phone,  // 전화번호 상태 값
            birth: birth,  // 생년월일 상태 값
        };
    
        try {
            const response = await fetch(`${bkURL}/join/`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData), // JSON 형식으로 보내기
            });
    
            const data = await response.json();
    
            if (data.ret) {
                alert('회원가입 성공');
            } else {
                alert('회원가입 실패');
            }
        } catch (error) {
            console.error("회원가입 오류:", error);
            alert("회원가입 오류 발생");
        }
    };

    // 모든 유효성 검사가 통과했는지 확인하는 함수
    const isFormValid = isEmailValid && isNameValid && isNameEngValid && isPhoneValid && isPwValid && valid;

    return (
        <div className="form-wrap">
            <div className="center">
                <form name="joinFrm" id="shilla-join" method="post" onSubmit={handleSubmit}>
                    <div className="join-container">
                        <h3 className="info-title">개인정보 입력</h3>
                        {/* 국문 이름 입력 */}
                        <JoinName valid={isNameValid} setValid={setNameValid} setNameKor={setNameKor} />
                        {/* 영문 이름 입력 */}
                        <JoinNameEng valid={isNameEngValid} setValid={setNameEngValid} setNameEng={setNameEng} />
                        {/* 생년월일 입력 */}
                        <JoinDateSelector valid={valid} setValid={setValid} setBirth={setBirth}/>
                        {/* 아이디 입력 */}
                        <div className="info-group">
                            <div className="input-container">
                                <label htmlFor="pid">아이디 <font color="#F00">*</font></label>
                                <div className="input-wrap">
                                    <input
                                        name="member_id"
                                        type="text"
                                        id="pid"
                                        minLength="6"
                                        placeholder="영문자, 숫자로 구성 (6자 이상)"
                                        value={id}
                                        onChange={handleIdChange}
                                    />
                                    <button type="button" id="id-chk" data-lybtn="pop-using" onClick={handleIdCheck}>중복확인</button>
                                    <span className="error-message" id="id-error">{errorMessage}</span>
                                </div>
                            </div>
                        </div>
                        {/* 비밀번호 입력 */}
                        <JoinPw valid={isPwValid} setValid={setPwValid} setPw={setPw} />
                        {/* 연락처 입력 */}
                        <JoinPhone valid={isPhoneValid} setValid={setPhoneValid} setPhone={setPhone} />
                        {/* 이메일 입력 */}
                        <JoinEmail valid={isEmailValid} setValid={setEmailValid} setEmail={setEmail} errorMessage={errorMessage} setErrorMessage={setErrorMessage} />

                        <div className="info-group">
                            <div className="input-container">
                                <button type="submit" id="submit" disabled={!isFormValid}>가입하기</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>

            {/* 레이어 팝업 */}
            {isPopupVisible && (
                <div className="lypop pop-using" data-lyopen="pop-using" tabIndex="0">
                    <div className="lypop-wp min">
                        <div className="lypop-content">
                            <div className="lypop-title">
                                <strong>중복확인</strong>
                            </div>
                            <div className="lypop-ct">
                                <p className="modal-txt">{popupMessage}</p>
                                <div className="btn-wrap type5">
                                    <button className="btn btn-04" onClick={closePopup}><span>확인</span></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default JoinCont2;
