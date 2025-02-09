import React, { useEffect } from 'react'
import axios from 'axios';

const bkURL = process.env.REACT_APP_BACK_URL;

const MyPwChkCont = ({user,pwChkSet}) => {


    const myPwChkGo = () => {
        const frmData = new FormData(document.myPwChkFrm);
        const data = Object.fromEntries(frmData); // { id: '...', pw: '...' }
        data.id = user.id
    
        console.log('myPwChkGo() 진입');
        console.log(data);
    
        // Axios 요청 시, 헤더에 Content-Type을 설정해주는 것도 중요합니다.
        axios.post(`${bkURL}/mypage/myInfoChg`, data, {
            headers: {
                'Content-Type': 'application/json'  // JSON 형식으로 전송
            }
        })
        .then(res => {
            console.log('서버 응답 수신 : ', res.data);
            if (res.data) {
                pwChkSet(1)
            } else {
                alert("비밀번호 확인 실패");
            }
        })
        .catch(err => {
            console.log('비밀번호 확인 서버에러 발생 : ', err.response ? err.response.data : err.message);
        });
    }



    return (
        <div className="change-info-chk" id="change-info-chk">
            <h2 className="title">비밀번호 확인</h2>
            <form className="pwdiv" name='myPwChkFrm'>
                <label><input type="password" id="pw-chk" name='pw'/></label>
                <p id="error-message1"></p>
                <input type="button" id="btn-confirm" value="확인" onClick={myPwChkGo}/>
            </form>
        </div>
    )
}

export default MyPwChkCont
