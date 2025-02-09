import React, { useEffect, useRef, useState } from "react";
import CommentBtn from './CommentBtn'
import CommentWrite from './CommentWrite'
import { useParams, useNavigate } from "react-router-dom";

const bkURL = process.env.REACT_APP_BACK_URL;

const CommentView = ({commentText,setCommentText,detailText,setDetailText,user,commentFetchData,commentDelGo}) => {

    const navigate = useNavigate()

    const [commentModify,commentModifySet] = useState(1)

    const {id} = useParams();

    const textareaRef = useRef(null);

    const handleChange = (e) => {
        textareaRef.current.value = e.target.value;
    };

    console.log("CommentView 댓글 목록",commentText);
    

    useEffect(()=>{

        if(!id){
            console.log('id 없음');
            return 
        }


        axios.get(`${bkURL}/board/detail/${id}`)
        .then(res=>{
            console.log('댓글 받기 성공',res.data);
            setDetailText(res.data)
            console.log('detailText :',detailText);
            
        })
        .catch(err=>{
            console.error('댓글 받기 실패',err);
        })
    },[id])

    function textChg(kk,me) {
        var newArr = [...commentText]
        newArr[kk].context = me.value
        //console.log("textChg : ",kk );
        //console.log("textChg : ", newArr[parseInt(kk) ]);
        
        setCommentText(newArr)
        //setCommentText({...commentText,[key]:me.value})
    }

    function submitGo(e) {
        e.preventDefault();

        console.log("submitGo  수정 진입")
        const frmData = new FormData(document.commentModifyFrm);
        const myData = Object.fromEntries(frmData)
        console.log(myData);
        console.log(id);

        axios.put(`${bkURL}/comment/detail/${id}`,myData)
        .then(res=>{
            console.log('댓글 수정 성공',res.data);
            commentFetchData();
            commentModifySet(1);
        })
        .catch(err=>{
            console.error('댓글 수정 실패',err);
        })

    }

    const ModifyGo = ({kk,modifyData}) => {
        console.log("ModifyGo ", kk)
        if(commentModify === 1){
            return  <>
                        <div className="textarea">
                            <textarea readOnly className="new-reply">{modifyData.context}</textarea>
                        </div>

                        <div className="reply-info">
                            <span className="time">{modifyData.reg_str} 등록</span>
                            <CommentBtn data={modifyData} user={user} commentDelGo={()=>commentDelGo(modifyData.comment_id)} commentModify={commentModify} commentModifySet={commentModifySet}/>
                        </div>
                    </>
        }
        else if(commentModify === 0){
            console.log("modifyData.context",modifyData.context);
            return  <form name="commentModifyFrm">
                        <input name="comment_id" value={modifyData.comment_id} type="hidden"/>
                        <div className="textarea">
                            <textarea className="new-reply" name="context" autofocus="autofocus" ref={textareaRef} onChange={handleChange} >{modifyData.context}</textarea>
                        </div>

                        <div className="reply-info">
                            <span className="time">{modifyData.reg_str} 등록</span>
                            <button type="reset" className="edit" onClick={(commentModify == 1)?()=>commentModifySet(0):()=>commentModifySet(1)}>취소</button>
                            <button className="delete" onClick={submitGo}>수정완료</button>
                        </div>
                    </form>
        }
    }
    // console.log("commentModify:",commentModify);

    for(let i = 0; i < commentText.length; i++){
        if(detailText.board_id == commentText[i].board_id){
            return  <div>
                        <span className="reply-title">댓글</span>
                        <div className="reply-box">
                            <div className="reply-content">
                                <span className="name">관리자</span>
                            </div>
                            <ModifyGo kk={i} modifyData={commentText[i]} />
                        </div>
                    </div>
        }
    }
    if(user.grade == 1){
        return (<CommentWrite user={user} detailText={detailText} setDetailText={setDetailText} commentFetchData={commentFetchData}/>)
    }
    return;
};

export default CommentView;
