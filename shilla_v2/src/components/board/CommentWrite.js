import React from "react";
import axios from 'axios';

const bkURL = process.env.REACT_APP_BACK_URL;

const CommentWrite = ({user,detailText,setDetailText, commentFetchData}) => {

    function CommentsubmitGo(e){
        e.preventDefault()
        console.log("detailText",detailText);
        

        const frmData = new FormData(document.commentFrm) //아래 폼태그 name 값 가져옴

        const data = Object.fromEntries(frmData);


        
        data['board_id'] = detailText.board_id
        data['answer'] = detailText.answer
        data['member_id'] = user.id
        data['author'] = user.name

        

        console.log('CommentsubmitGo() 진입');
        console.log(data);


        axios.post(`${bkURL}/comment/detail/:board_id`,data)
        .then(res =>{
            console.log('등록 완료 : ', res.data);
            alert('등록되었습니다.');
            commentFetchData()


            // 댓글 작성 후 board 테이블의 answer 값을 업데이트 
            axios.put(`${bkURL}/board/answer/${detailText.board_id}`, { answer: 1 }) 
            .then(res => { 
                console.log('answer 업데이트 완료 : ', res.data); 
                // detailText의 answer 값을 업데이트 
                setDetailText(prev => ({ ...prev, answer: 1 })
                ); 
            }) 
            .catch(err => { 
                console.log('answer 업데이트 오류 : ', err); 
            });
            

        }).catch(err =>{
            console.log('등록 오류 : ', err);
        })
    }
    
    return (
        <form name="commentFrm" className="comment_write" onSubmit={CommentsubmitGo}>
            <span className="reply-title">댓글쓰기</span>
            <div className="reply-box-sec">
                {/* <!-- 댓글 창 전체 박스 --> */}
                <div className="reply-content-ing">
                    {/* <!-- 댓글 상단 작성자 이름 들어갈 박스 --> */}
                    <span className="user-name">{user.name} 님</span>
                </div>
                <textarea name="context" id="reply" placeholder="댓글을 작성하세요."></textarea>

                <div className="reply-info">
                    {/* <!-- 작성시간, 수정, 삭제 들어갈 박스--> */}
                    <button type="submit" id="plus">댓글등록</button>
                </div>
            </div>
        </form>
    );
};

export default CommentWrite;
