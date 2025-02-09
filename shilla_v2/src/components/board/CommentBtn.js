import React from "react";
import axios from 'axios';

const bkURL = process.env.REACT_APP_BACK_URL;

const CommentBtn = ({data,user,commentDelGo,commentModify,commentModifySet}) => {

    const handleDelete = () => {
        commentDelGo();
        // 댓글 삭제 후 board 테이블의 answer 값을 0으로 업데이트
        axios.put(`${bkURL}/board/answer/${data.board_id}`, { answer: 0 })
        .then(res => {
            console.log('answer 업데이트 완료 : ', res.data);
        })
        .catch(err => {
            console.log('answer 업데이트 오류 : ', err);
        });
    };

    if(data.member_id == user.id){
        return  <>
                    <button className="edit" onClick={(commentModify == 1)?()=>commentModifySet(0):()=>commentModifySet(1)}>수정</button>
                    <button className="delete" onClick={handleDelete}>삭제</button>
                </>
    }
    return ;
};

export default CommentBtn;
