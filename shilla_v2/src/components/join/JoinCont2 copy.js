import React, { useEffect,useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import '../../scss/myinfo.scss'

const bkURL = process.env.REACT_APP_BACK_URL;


var idPubChk = false

const JoinCont2 = () => {

    const navigate = useNavigate()

    const [memId,setMemId] = useState([])
   // const [idchk, setIdchk] = useState(false); // 아이디 중복 확인 상태 저장

    useEffect(()=>{

        document.title = '회원가입:정보입력';

        $(document).ready(function () {
            // 수정된 부분
            let today = new Date();
            let year = today.getFullYear();

            for (let i = year; i >= 1930; i--) {
                $('#year').append('<option value="' + i + '">' + i + '년 </option>');
            }

            for (let i = 1; i <= 12; i++) {
                if(i < 10){
                    $('#month').append('<option value="' + ('0'+ i) + '">' + ('0'+ i) + '월 </option>');
                }
                $('#month').append('<option value="' + i + '">' + i + '월 </option>');
            }

            for (let i = 1; i <= 31; i++) {
                if(i < 10){
                    $('#day').append('<option value="' + ('0'+ i) + '">' + ('0'+ i) + '일 </option>');
                }
                $('#day').append('<option value="' + i + '">' + i + '일 </option>');
            }

            let startnum = ['010', '02', '031', '032', '033', '041', '042', '043', '044', '051', '052', '053', '054', '055', '061', '062', '063', '064'];
            for (let t = 0; t < startnum.length; t++) {
                $('#start').append('<option value="' + startnum[t] + '">' + startnum[t] + '</option>');
            }
        });

        let idchk = false;
        let valid = false;

        document.getElementById('submit').addEventListener('click', function () {
            const koname = document.getElementById('ko-name').value.trim();
            const firstname = document.getElementById('firstname').value.trim();
            const lastname = document.getElementById('lastname').value.trim();
            const pid = document.getElementById('pid').value.trim();
            const pw = document.getElementById('pw').value.trim();
            const pwchk = document.getElementById('pwchk').value.trim();
            const startNum = document.getElementById('start').value.trim();
            const middleNum = document.getElementById('middle').value.trim();
            const lastNum = document.getElementById('last').value.trim();
            const mail = document.getElementById('mail').value.trim();

            // 오류 메시지 초기화
            const errorMessages = document.querySelectorAll('.error-message');
            errorMessages.forEach(message => (message.textContent = ''));

            // 국문 이름 유효성 검사
            const konametype = /^[가-힣]{2,5}$/;
            if (!koname) {
                document.getElementById('koname-error').textContent = '국문 이름을 입력하세요.';
                valid = false;
            } else if (!konametype.test(koname)) {
                document.getElementById('koname-error').textContent = '국문 이름은 한글(2~5자)만 사용 가능합니다.';
                valid = false;
            } else if (konametype.test(koname)) {
                document.getElementById('koname-error').textContent = '';
                valid = true;
            }

            // 영문 이름 유효성 검사
            const ennametype = /^[A-Za-z]+$/;
            if (!(firstname && lastname)) {
                document.getElementById('enname-error').textContent = '영문 이름을 입력하세요.';
                valid = false;
            } else if (!(ennametype.test(firstname) && ennametype.test(lastname))) {
                document.getElementById('enname-error').textContent = '영문 이름은 영어만 사용 가능합니다.';
                valid = false;
            } else if (ennametype.test(firstname) && ennametype.test(lastname)) {
                document.getElementById('enname-error').textContent = '';
                valid = true;
            }

            // 아이디 유효성 검사는 모달(중복확인)에서 진행 -- 아이디 중복확인을 안했을때
            if (!idchk) {
                document.getElementById('id-error').textContent = '아이디 중복확인을 해주세요.';
                valid = false;
            } else {
                document.getElementById('id-error').textContent = '';
                valid = true;
            }

            // 패스워드 유효성 검사
            const pwtype = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%~]).{12,16}$/;
            if (!pw) {
                document.getElementById('pw-error').textContent = '패스워드를 입력하세요.';
                valid = false;
            } else if (!pwtype.test(pw)) {
                document.getElementById('pw-error').textContent = '패스워드는 영문, 숫자, 특수문자를 포함하여 12~16자여야 합니다.';
                valid = false;
            } else if (pwtype.test(pw)) {
                document.getElementById('pw-error').textContent = '';
                valid = true;
            }

            if (!pwchk) {
                document.getElementById('pwchk-error').textContent = '패스워드를 입력하세요.';
                valid = false;
            } else if (pwchk !== pw) {
                document.getElementById('pwchk-error').textContent = '패스워드가 일치하지 않습니다.';
                valid = false;
            } else if (pwchk == pw) {
                document.getElementById('pwchk-error').textContent = '';
                valid = true;
            }

            // 연락처 유효성 검사
            if (!middleNum || !lastNum) {
                document.getElementById('tel-error').textContent = '연락처를 입력하세요.';
                valid = false;
            } else {
                const isStartNum010 = startNum === '010';
                const isMiddleValid = isStartNum010 ? /^\d{4}$/.test(middleNum) : /^\d{3,4}$/.test(middleNum);
                const isLastValid = /^\d{4}$/.test(lastNum);

                if (!isMiddleValid || !isLastValid) {
                    document.getElementById('tel-error').textContent = isStartNum010 ? '연락처의 자리수를 확인하세요.' : '연락처의 자리수를 확인하세요.';
                    valid = false;
                } else if (isMiddleValid && isLastValid) {
                    document.getElementById('tel-error').textContent = '';
                    valid = true;
                }
            }

            // 이메일 유효성 검사
            const mailtype = /^[A-Za-z0-9._+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
            if (!mail) {
                document.getElementById('mail-error').textContent = '이메일을 입력하세요.';
                valid = false;
            } else if (!mailtype.test(mail)) {
                document.getElementById('mail-error').textContent = '정확한 이메일 주소를 입력하세요.';
                valid = false;
            } else if (mailtype.test(mail)) {
                document.getElementById('mail-error').textContent = '';
                valid = true;
            }

            // 모든 유효성 검사 통과 시
            // if (valid) {
            //     setTimeout(function () {
            //         window.location.href = 'welcome.html'; // 이동할 홈페이지 URL로 변경
            //     }, 100);
            // }
        });



        function maxLengthCheck(object) {
            object.value = object.value.replace(/[^0-9]/g, '');
        }
    })

    // 아이디 유효성 검사
    // 아이디 중복확인 함수
    const checkIdDuplicate = (inputId) => {
       
        const idtype = /^[A-Za-z0-9]{6,}$/;
        if (!inputId) {
            document.querySelector('.pop-using .modal-txt').innerHTML = '아이디를 입력하세요.';
            document.getElementById('id-error').textContent = '아이디를 입력하세요.';
            //setIdchk(false); // 아이디가 없으면 중복확인 불가능
            return;
        } else if (inputId.length < 6) {
            document.querySelector('.pop-using .modal-txt').innerHTML = '아이디는 6글자 이상이어야 합니다.';
            document.getElementById('id-error').textContent = '아이디는 6글자 이상이어야 합니다.';
           // setIdchk(false); // 아이디 길이가 짧으면 중복확인 불가능
            return;
        } else if (!idtype.test(inputId)) {
            document.querySelector('.pop-using .modal-txt').innerHTML = '아이디는 영문자와 숫자만 사용 가능합니다.';
            document.getElementById('id-error').textContent = '아이디는 영문자와 숫자만 사용 가능합니다.';
          //  setIdchk(false); // 아이디 형식이 틀리면 중복확인 불가능
            return;
        } else {
            // 아이디 중복 확인
            const isIdUsed = memId.some(member => member.member_id === inputId); // 중복 확인
            if (isIdUsed) {
                // document.querySelector('.pop-using .modal-txt').innerHTML = '현재 사용중인 아이디 입니다.<br> 다른 아이디를 사용해주세요.';
               // setIdchk(false); // 아이디가 중복되면 중복확인 불가능
            } else {
                document.querySelector('.pop-using .modal-txt').innerHTML = '사용가능한 아이디입니다.';
                document.getElementById('id-error').textContent = '';
               // setIdchk(true); // 아이디가 중복되지 않으면 사용가능
                

                // setIdchk(idPubChk);
            }
        }
    };



    async function idDBCnt(inputId) {

        if(!inputId){
            console.log('Num 없음');
            return 
        }
        try {
            const res = await axios.get(`${bkURL}/join/idChk/${inputId}`);
           
            console.log('idDBCnt : ',res.data.cnt);
            return res.data.cnt
            
            
            
        } catch (error) {
            console.error('에러발생 : ', error);
            return 1
        }
    }



    // 아이디 입력 시 실시간 중복 확인
    const handleIdChange = (e) => {
        const inputId = e.target.value.trim();
        //if(checkIdDuplicate(inputId)) {// 아이디 입력 시 실시간으로 중복확인 진행

        if(idDBCnt(inputId)==0){
            document.querySelector('.pop-using .modal-txt').innerHTML = '사용가능한 아이디입니다.';
            document.getElementById('id-error').textContent = '';
            idPubChk = true;

        }else{
            document.querySelector('.pop-using .modal-txt').innerHTML = '현재 사용중인 아이디 입니다.<br> 다른 아이디를 사용해주세요.';
            idPubChk = false;
        }
        
        console.log("handleIdChange : ", idPubChk)
    };

    // 중복 확인 버튼 클릭 시
    const handleIdChkClick = () => {
        idPubChk = false
       
        const inputId = document.getElementById('pid').value.trim();
        checkIdDuplicate(inputId);  // 중복 확인 함수 호출 후, idchk 상태가 변경됨




        idPubChk = true
    };




    const joinSubmitGo = (e) => {
        e.preventDefault();
    
        // 아이디 중복확인 여부 체크
        if (!idPubChk) {  // 아이디 중복확인 상태가 false일 경우, 가입을 진행하지 않음
            document.getElementById('id-error').textContent = '아이디 중복확인을 해주세요.';
            return;  // 가입이 진행되지 않도록 함
        }
    
        const frmData = new FormData(document.joinFrm); //폼태그 name 값 가져옴
        const totData = Object.fromEntries(frmData);
    
        const data = {
            member_id: totData.member_id,
            pw: totData.pw,
            name: totData.name,
            name_eng: totData.firstname + " " + totData.lastname, // 영문 이름 결합
            email: totData.email,
            phone: totData.startNum + "-" + totData.middleNum + "-" + totData.lastNum, // 연락처 형식 맞추기
            birth: totData.year + "-" + totData.month + "-" + totData.day, // 생년월일 형식 맞추기
            grade: 3
        };
    
        axios.post(`${bkURL}/join`, data, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(res => {
            console.log('회원정보입력 등록 완료 : ', res.data);
            alert('회원 가입 되었습니다.');
            navigate(`/welcome`);
        })
        .catch(err => {
            console.log('회원정보입력 등록 오류 : ', err);
        });
    };


    useEffect(() => {
        // 아이디 중복 확인을 위한 초기 데이터 가져오기
        axios.get(`${bkURL}/join`)
            .then(res => {
                setMemId(res.data);
            })
            .catch(err => {
                console.error('에러발생 : ', err);
            });
    }, []);



    return (
        <>
            <div className="form-wrap">
                <div className="center">
                    <form name="joinFrm" id="shilla-join" method="post"  onSubmit={joinSubmitGo}>
                        <div className="join-container">
                            <h3 className="info-title">개인정보 입력</h3>

                            <div className="info-group">
                                <div className="input-container">
                                    <label htmlFor="ko-name">국문 이름 <font color="#F00">*</font> </label>
                                    <div className="input-wrap">
                                        <input name="name" type="text" id="ko-name" minlength="2" maxLength="5" placeholder="홍길동" />
                                        <span className="error-message" id="koname-error"></span>
                                    </div>
                                </div>
                            </div>

                            <div className="info-group">
                                <div className="input-container">
                                    <label htmlFor="en-name">영문 이름 <font color="#F00">*</font> </label>
                                    <div className="input-wrap">
                                        <div className="eng">
                                            <input type="text" id="firstname" placeholder="First name" className="name-input" name="firstname"/>
                                            <input type="text" id="lastname" placeholder="Last name" className="name-input" name="lastname"/>
                                        </div>
                                        <span className="error-message" id="enname-error"></span>
                                    </div>
                                </div>
                            </div>

                            <div className="info-group">
                                <div className="input-container">
                                    <label htmlFor="birth">생년월일</label>
                                    <div className="input-wrap">
                                        <div className="birth">
                                            <select name="year" id="year"></select>
                                            <select name="month" id="month"></select>
                                            <select name="day" id="day"></select>
                                        </div>
                                        <span className="error-message" id="birth-error"></span>
                                    </div>
                                </div>
                            </div>

                            <div className="info-group">
                                <div className="input-container">
                                    <label htmlFor="pid">아이디 <font color="#F00">*</font></label>
                                    <div className="input-wrap">
                                        <input name="member_id" type="text" id="pid" minlength="6" placeholder="영문자, 숫자로 구성 (6자 이상)" onChange={handleIdChange}/>
                                        <button type="button" id="id-chk" data-lybtn="pop-using" onClick={handleIdChkClick}>중복확인</button>
                                        <span className="error-message" id="id-error"></span>
                                    </div>
                                </div>
                            </div>

                            <div className="info-group">
                                <div className="input-container">
                                    <label htmlFor="pw">패스워드 <font color="#F00">*</font></label>
                                    <div className="input-wrap">
                                        <input name="pw" type="password" id="pw" minlength="12" maxLength="16" placeholder="영문, 숫자, 특수문자 포함 12-16자" />
                                        <span className="error-message" id="pw-error"></span>
                                    </div>
                                </div>
                            </div>

                            <div className="info-group">
                                <div className="input-container">
                                    <label htmlFor="pwchk">패스워드확인 <font color="#F00">*</font></label>
                                    <div className="input-wrap">
                                        <input type="password" id="pwchk" minlength="12" maxLength="16" placeholder="영문, 숫자, 특수문자 포함 12-16자" />
                                        <span className="error-message" id="pwchk-error"></span>
                                    </div>
                                </div>
                            </div>

                            <div className="info-group">
                                <div className="input-container">
                                    <label htmlFor="tel">연락처 <font color="#F00">*</font></label>
                                    <div className="input-wrap">
                                        <div className="tel-num">
                                            <select name="startNum" id="start"></select>
                                            <input name="middleNum" type="text" id="middle" maxLength="4" oninput="maxLengthCheck(this)" />
                                            <input name="lastNum" type="text" id="last" maxLength="4" oninput="maxLengthCheck(this)" />
                                            <span className="error-message" id="tel-error"></span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="info-group">
                                <div className="input-container">
                                    <label htmlFor="mail">이메일 <font color="#F00">*</font></label>
                                    <div className="input-wrap">
                                        <input name="email" type="text" id="mail" placeholder="honggildong@naver.com" />
                                        <span className="error-message" id="mail-error"></span>
                                    </div>
                                </div>
                            </div>

                            <div className="info-group">
                                <div className="input-container">
                                    <button type="submit" id="submit">가입하기</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>


            <div className="lypop pop-using" data-lyopen="pop-using" tabindex="0">
                <div className="lypop-wp min">
                    <div className="lypop-content">
                        <div className="lypop-title">
                            <strong>중복확인</strong>
                        </div>
                        <div className="lypop-ct">
                            <p className="modal-txt"></p>
                            <div className="btn-wrap type5">
                                <button className="btn btn-04" data-lyclose="pop-using"><span>확인</span></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default JoinCont2;

