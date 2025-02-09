import React from "react";
import { Link } from "react-router-dom";

const Btns = ({user,detailText,delGo}) => {
    if(!user || detailText.member_id != user.id){
        if(user.grade == 1){
            return  <div className="button-container">
                        <button className="delete" onClick={delGo}><span>삭제</span></button>
                        <Link to={`/board/modify/${detailText.board_id}`} className="edit">수정</Link>
                    </div>
        }
        return ;
    }else{
        return  <div className="button-container">
                    <button className="delete" onClick={delGo}><span>삭제</span></button>
                    <Link to={`/board/modify/${detailText.board_id}`} className="edit">수정</Link>
                </div>
    }
};

export default Btns;
