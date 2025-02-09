import React from "react";
import "../../scss/noticedetail.scss";
import { Link, Navigate, useParams } from "react-router-dom";

const NoticedetailOther = ({ id, Noticedetails }) => {
    // const { id } = useParams;
    console.log(id);
    const prevID = parseInt(id, 10) - 1;
    const nextID = parseInt(id, 10) + 1;
    console.log(prevID);
    return (
        <div className="Nother">
            <div className="prev">
                <div className="icn1">이전글</div>
                {prevID > 0 ? (
                    <Link to={`/notice/detail/${prevID}`} className="txt">
                        {" "}
                        이전으로{" "}
                    </Link>
                ) : (
                    <div className="txt">첫 공지사항입니다.</div>
                )}
            </div>
            <div className="next">
                <div className="icn2">다음글</div>
                {nextID <= id + 1 ? (
                    <Link to={`/notice/detail/${nextID}`} className="txt">
                        {" "}
                        다음으로{" "}
                    </Link>
                ) : (
                    <div className="txt">마지막 공지사항입니다.</div>
                )}
            </div>
        </div>
    );
};

export default NoticedetailOther;
