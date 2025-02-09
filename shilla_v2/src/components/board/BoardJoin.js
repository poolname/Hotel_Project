import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import '../../scss/sub06_03_01.scss';

const bkURL = process.env.REACT_APP_BACK_URL;

const BoardJoin = () => {

    const navigate = useNavigate();
    const [user, setUser] = useState(null);

    useEffect(() => {
        document.title = '게시판 글쓰기';

        // 로그인 여부 확인
        const id = sessionStorage.getItem("id");
        const name = sessionStorage.getItem("name");
        const grade = sessionStorage.getItem("grade");

        if (id) {
            setUser({ 'id': id, "name": name, "grade": grade });
        } else {
            setUser(null);
        }

    }, []);

    function submitGo(e) {
        e.preventDefault();

        // 폼 데이터 가져오기
        const frmData = new FormData(document.myFrm);
        const data = Object.fromEntries(frmData);

        // user가 있을 때, user.id를 데이터에 추가
        if (user) {
            data.member_id = user.id; // user.id를 member_id로 추가
        } else {
            alert("로그인이 필요합니다.");
            return;
        }

        console.log('submitGo() 진입');
        console.log(data);

        const checked = (!data.secret) ? data.secret = false : data.secret = true;

        axios.post(`${bkURL}/board/join`, data)
            .then(res => {
                console.log('등록 완료 : ', res.data);
                alert('등록되었습니다.');
                navigate(`/board/detail/${res.data.newId}`);
            })
            .catch(err => {
                console.log('등록 오류 : ', err);
            });
    }

    return (
        <div className="container">
            <div className="center">
                <form name="myFrm" onSubmit={submitGo}>
                    <h2 className="ask">문의하기</h2>
                    <div className="text-container">
                        <input type="text" name="title" id="title" required />
                        <textarea name="context" id="content" required></textarea>
                    </div>
                    <div className="secret-wrap">
                        <input type="checkbox" name="secret" id="secret" value="off" />
                        <label htmlFor="secret">비밀글로 등록</label>
                    </div>
                    <div className="button-wrap">
                        <Link to={'/board'} className="list">목록으로</Link>
                        <div className="button-container">
                            <button type="reset" id="cancel">취소</button>
                            <button type="submit" id="submit">등록</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default BoardJoin;
