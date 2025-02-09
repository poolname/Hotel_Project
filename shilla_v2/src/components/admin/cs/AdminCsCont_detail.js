import React, { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from 'axios';
import Secret from '../../board/Secret';
import CommentView from '../../board/CommentView';
import Btns from '../../board/Btns';

const bkURL = process.env.REACT_APP_BACK_URL;

const AdminCsCont_detail = () => {

    const navigate = useNavigate();
    const {num} = useParams();

    const [detailText, setDetailText] = useState(null);  // 게시글 상세 정보
    const [commentText, setCommentText] = useState([]);  // 댓글 리스트
    const [user,setUser] = useState(null)



    // 페이지 로딩 시 게시글과 댓글 데이터 불러오기
    useEffect(() => {
        document.title = "게시글 상세보기";  

        // 로그인 여부 확인
        const id = sessionStorage.getItem("id");
        const name = sessionStorage.getItem("name");
        const grade = sessionStorage.getItem("grade");
        
        if(id){
            setUser({'id':id,"name": name,"grade":grade})
            
        }else{
            setUser(null)
        }



        axios.get(`${bkURL}/comment`)
        .then(res =>{
            setCommentText(res.data);
            console.log('댓글데이터:',res.data);
            
        })
        .catch(err=>{
            console.error('에러발생 : ', err);
        })

        fetchData();  // 게시글 상세 데이터 불러오기
        commentFetchData();  // 댓글 데이터 불러오기

    }, [num]);  
    


    // 게시글 상세 데이터 가져오기
    async function fetchData() {
        if (!num) {
            console.log('Num 없음');
            return;
        }
        try {
            const res = await axios.get(`${bkURL}/admin/cs/detail/${num}`);
            console.log('Fetched data:', res.data);  
            setDetailText(res.data);  
        } catch (error) {
            console.error('데이터 가져오기 오류:', error);
        }
    }

    // 댓글 데이터 가져오기
    async function commentFetchData() {
        if (!num) {
            console.log('Num 없음');
            return;
        }
        try {
            const res = await axios.get(`${bkURL}/comment`);  // board_id에 해당하는 댓글 가져오기
            console.log('res.data : ', res.data);
            setCommentText(res.data);  // 댓글 리스트 저장
        } catch (error) {
            console.error('에러발생 : ', error);
        }
    }

    // 댓글 삭제 
    function commentDelGo(no) {
        console.log('commentDelGo 진입', no);

        axios.delete(`${bkURL}/comment/detail/${no}`)  // 댓글 삭제 요청
        .then(res => {
            console.log('삭제완료', res.data);
            alert('삭제되었습니다.');
            commentFetchData();  // 댓글 리스트 새로고침
        })
        .catch(err => {
            console.log('삭제오류', err);
        });
    }

    // 게시글 삭제 함수
    function delGo() {
        // 삭제 확인 창 표시
        const isConfirmed = window.confirm("해당 게시글을 삭제하시겠습니까?");
        
        if (isConfirmed) {
            // 사용자가 '확인'을 클릭한 경우 삭제 진행
            console.log('delGo 진입', `${bkURL}/board/delete/${num}`);
    
            axios.delete(`${bkURL}/board/delete/${num}`)
                .then(res => {
                    console.log('삭제완료', res.data);
                    alert('삭제되었습니다.');
                    navigate('/admin/cs'); 
                })
                .catch(err => {
                    console.log('삭제오류', err);
                });
        } else {
            // 사용자가 '취소'를 클릭한 경우 아무것도 하지 않음
            console.log('삭제 취소');
        }
    }


    if (!detailText) {
        return <div>로딩 중...</div>;
    }

    return (
        <div className="container board">
            <div className="center board">
                <h2 className="ask">문의내용 {num}</h2>
                <div className="text-container">
                    <div className="title-wrap">
                        <div className="title">
                            <p className="subject">
                                <Secret detailText={detailText} />
                                {detailText.title}
                            </p>
                            <div className="writer-wrap">
                                <p className="writer">{detailText.writer_name}</p>
                                <p className="submit-time">{detailText.reg_str}</p>
                            </div>
                        </div>
                    </div>
                    <div className="content">
                        {detailText.context}
                    </div>

                    <div className="reply-container">
                        {/* 댓글 보이는 구간 */}
                        <CommentView 
                            commentText={commentText} 
                            setCommentText={setCommentText} 
                            detailText={detailText} 
                            setDetailText={setDetailText} 
                            user={user}
                            commentFetchData={commentFetchData} 
                            commentDelGo={commentDelGo} 
                        />
                    </div>
                </div>
                <div className="button-wrap">
                    <Link to="/admin/cs" className="list">목록으로</Link>

                    {/* 작성자나 관리자가 들어올 경우에만 수정, 삭제 버튼 노출된다. */}
                    <Btns  user={user} detailText={detailText} delGo={delGo} />
                </div>
            </div>
        </div>
    );
};

export default AdminCsCont_detail;
