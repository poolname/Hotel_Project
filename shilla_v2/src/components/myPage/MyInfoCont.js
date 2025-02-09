import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import MyPwChkCont from "./MyPwChkCont";

const bkURL = process.env.REACT_APP_BACK_URL;

const MyInfoCont = () => {

    const navigate = useNavigate();

    const [text, setText] = useState([]);
    const [user, setUser] = useState(null);

    useEffect(() => {
        // 로그인 여부 확인
        const id = sessionStorage.getItem("id");
        const name = sessionStorage.getItem("name");
        const grade = sessionStorage.getItem("grade");

        if (id) {
            setUser({ 'id': id, "name": name, "grade": grade });
        } else {
            setUser(null);
        }

        console.log("회원정보수정 시작 ", id);
        axios.get(`${bkURL}/mypage/${id}`)
            .then(res => {
                console.log("회원정보수정 시작데이터 받아옴 ", res.data);
                setText(res.data);
            })
            .catch(err => {
                console.error('마이페이지 에러발생 : ', err);
            });

    }, []);

    const myInfoText = [
        { title: "아이디", id: "userid", value: text.member_id },
        { title: "이름(국문)", id: "username", value: text.name },
        { title: "이름(영문)", id: "username_eng", value: text.name_eng },
        { title: "생년월일", id: "userbirth", value: text.birth },
        { title: "연락처", id: "contact", value: text.phone },
        { title: "이메일", id: "mail", value: text.email },
    ];

    // pwChkGo 함수는 navigate를 호출하여 페이지 이동
    function pwChkGo() {
        navigate('/myPage/myInfoChg');  // 페이지 이동
    }

    function withdrawalGo() {
        if (window.confirm("정말로 회원 탈퇴를 진행하시겠습니까?")) {
            if (user && user.id) {
                axios.put(`${bkURL}/mypage/withdraw/${user.id}`)
                    .then(res => {
                        alert(`${user.name}님, 회원 탈퇴가 완료되었습니다.`);
                        sessionStorage.clear();
                        navigate('/');
                    })
                    .catch(err => {
                        console.error('회원 탈퇴 실패: ', err);
                    });
            }
        }
    }

    return (
        <div className="mypage-info user-info-wrap" id="user-info-wrap">
            <h2 className="title">회원정보</h2>
            {
                myInfoText.map((item, index) => {
                    return (
                        <label className="my-info" key={index}>
                            <p>{item.title}</p>
                            <input type="text" id={item.id} value={item.value} readOnly />
                        </label>
                    );
                })
            }
            <input type="button" className="edit-btn" value="회원정보 수정" onClick={pwChkGo} />
            <input type="button" className="withdrawal-btn" value="회원 탈퇴" onClick={withdrawalGo} />
        </div>
    );
};

export default MyInfoCont;
