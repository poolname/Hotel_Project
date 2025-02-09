import { useState, useEffect } from "react";
import { useNavigate,Link } from 'react-router-dom';
import axios from 'axios';

const bkURL = process.env.REACT_APP_BACK_URL;

const MyInquiryCont = () => {
    const navigate = useNavigate();
    const [text, setText] = useState([]);  
    const [user, setUser] = useState(null); 

    useEffect(() => {
        // 로그인 여부 확인
        const id = sessionStorage.getItem("id");  
        const name = sessionStorage.getItem("name");
        const grade = sessionStorage.getItem("grade");

        console.log("로그인 정보:", { id, name, grade });  

        if (id) {
            setUser({ 'id': id, 'name': name, 'grade': grade });

            axios.get(`${bkURL}/mypage/myInquiry`, {
                params: { member_id: id } 
            })
            .then(res => {
                console.log('내 문의 내역:', res.data);  
                setText(res.data);  
            })
            .catch(err => {
                console.error('내 문의 내역 오류:', err);
            });
        } else {
            setUser(null);
        }
    }, []);  

    if(!text){
        return  <div className="myinquiry">
                    <h2 className="title">내 문의 내역</h2>
                    <ul className="board-nav my-page">
                        <li className="post-num">번호</li>
                        <li className="post-title">제목</li>
                        <li className="post-date">작성일</li>
                        <li className="post-status">답변 상태</li>
                    </ul>
                    <div>문의 내역이 없습니다. </div>
                </div>
    }

    return (
        <div className="myinquiry">
            <h2 className="title">내 문의 내역</h2>
            <ul className="board-nav my-page">
                <li className="post-num">번호</li>
                <li className="post-title">제목</li>
                <li className="post-date">작성일</li>
                <li className="post-status">답변 상태</li>
            </ul>
            <ul className="inquiry-list">
                { 
                    text.map((item,index) => (
                        <li key={index} className="inquiry-item">
                            <ul className="inquiry-details">
                                <li className="post-num">{item.board_id}</li>
                                <li className="inquiry-title"><Link to={`/board/detail/${item.board_id}`}>{item.title}</Link></li>
                                <li className="inquiry-date">{item.reg_str}</li>
                                <li className="inquiry-status">{(item.answer === 1)?"답변 완료":"답변 대기"}</li>
                            </ul>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
};

export default MyInquiryCont;
