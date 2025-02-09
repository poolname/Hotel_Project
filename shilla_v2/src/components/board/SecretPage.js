import React from "react";
import { Link } from "react-router-dom";
import Secret from "./Secret";
import Answer from "./Answer";

const SecretPage = ({data,user}) => {
    if(data.secret == 1 && user.id != data.member_id){
        if(user.grade == 1){
            return <li className="post-title"><Link to={`/board/detail/${data.board_id}`}><Answer data={data}/><Secret detailText={data}/>{data.title}</Link></li>
        }
        return <li className="post-title" onClick={()=>alert('비밀글입니다. 작성하신 회원님만 열람 가능합니다.')}><Link to={`/board`}><Answer data={data}/><Secret detailText={data}/>{data.title}</Link></li>
    }

    return <li className="post-title"><Link to={`/board/detail/${data.board_id}`}><Answer data={data}/><Secret detailText={data}/>{data.title}</Link></li>
};

export default SecretPage;
