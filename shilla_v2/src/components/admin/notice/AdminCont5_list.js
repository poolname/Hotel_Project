import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Pagination from "../../sub/Pagination";

const AdminCont5_list = ({ Noticelists, setNoticelists }) => {
    const navigate = useNavigate();

    //페이지네이션
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10; // 한 페이지에 보여줄 아이템 수

    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentlist = Noticelists.slice(
        startIndex,
        startIndex + itemsPerPage
    );
    //삭제버튼
    const delGo = async id => {
        console.log("삭제요청 id:", id);
        const targetNotice = Noticelists.find(item => item.notice_id === id);
        // console.log("targetNotice", targetNotice);
        if (!targetNotice) {
            alert("공지사항을 찾을 수 없습니다.");
            return;
        }

        console.log("파일이름", targetNotice.system_name);
        try {
            const res = await axios.delete(
                `http://localhost:5002/bk/notice/delete/${id}`,
                {
                    data: { delUPfile: targetNotice.system_name },
                    headers: {
                        "Content-Type": "application/json", // JSON 본문
                    },
                }
            );
            alert("삭제되었습니다.");

            setNoticelists(prev => prev.filter(item => item.notice_id !== id));
        } catch (error) {
            console.error("삭제실패", error);
        }
    };
    // 날짜출력
    const formatter = new Intl.DateTimeFormat("ko-KR", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        // hour: "2-digit",
        // minute: "2-digit",
        // second: "2-digit",
        // hour12: false,
        timeZone: "Asia/Seoul",
    });

    return (
        <>
            <div className="list">
                <div className="listwrapper">
                    {/* <div className="header">
                        <h3>공지사항리스트 </h3>
                        <Link to="/admin/notice/register" className="submit">
                            공지사항 등록
                        </Link>
                    </div> */}
                    <div className="list-container">
                        <ul className="Nboard-nav">
                            {/* <li className="N-num">번호</li> */}
                            <li className="N-option">분류</li>
                            <li className="N-title">제목</li>
                            <li className="N-view">조회수</li>
                            <li className="N-date">작성일</li>
                            <li className="N-date">수정일</li>
                            <li className="add">비고</li>
                        </ul>
                        <ul className="Nboard">
                            {currentlist.map(data => (
                                <li className="listwrap" key={data.notice_id}>
                                    {/* <div className="N-num">{data.notice_id}</div> */}
                                    <div className="N-option">
                                        {data.category}
                                    </div>
                                    <div className="N-title">
                                        <span className="Nlink">
                                            {data.title}
                                        </span>
                                    </div>
                                    <div className="N-view">
                                        {" "}
                                        {data.view_point}
                                    </div>
                                    <div className="N-date">
                                        {formatter
                                            .format(new Date(data.reg_date))
                                            .replace(/\. ?/g, "-")
                                            .replace(/-$/, "")}
                                    </div>
                                    <div className="N-date">
                                        {formatter
                                            .format(new Date(data.edit_date))
                                            .replace(/\. ?/g, "-")
                                            .replace(/-$/, "")}
                                    </div>
                                    <div className="MDbtn">
                                        <Link
                                            to={`/admin/notice/modify/${data.notice_id}`}
                                            className="modify"
                                        >
                                            수정
                                        </Link>
                                        <button
                                            className="delete"
                                            onClick={() =>
                                                delGo(data.notice_id)
                                            }
                                        >
                                            삭제
                                        </button>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="btn-wrap">
                        <Link to="/admin/notice/register" className="submit">
                            공지사항 등록
                        </Link>
                    </div>
                </div>
            </div>
            {/* 페이지네이션 */}
            <Pagination
                totalItems={Noticelists.length}
                itemsPerPage={itemsPerPage}
                currentPage={currentPage}
                onPageChange={setCurrentPage}
            />
        </>
    );
};

export default AdminCont5_list;
