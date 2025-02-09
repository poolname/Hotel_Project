import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Pagination from "../../sub/Pagination";
import axios from 'axios';
import "../../../scss/AdminCont3.scss";


function AdminCont3() {
    const [member, memberSet] = useState([]); // 회원 목록
    const [modify, modifySet] = useState({}); // 수정할 회원 데이터
    const navigate = useNavigate();
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5;

    // 회원 데이터 가져오기
    const fetchData = () => {
        axios.get('http://localhost:5002/bk/admin/member')
            .then(res => {
                memberSet(res.data.members);
            })
            .catch(err => {
                console.error("에러 발생 : ", err);
            });
    };

    useEffect(() => {
        fetchData();
    }, []);

    // 현재 페이지 데이터 계산
    const startIndex = (currentPage - 1) * itemsPerPage;
    const members = member.slice(startIndex, startIndex + itemsPerPage);

    // 회원등급 select 변경
    const handleGradeChange = (e, item) => {
        modifySet(prev => ({
            ...prev,
            [item.member_id]: {
                ...prev[item.member_id],
                grade: e.target.value,
            },
        }));
    };

    // 비고 텍스트 변경
    const handleChange = (value, member_id) => {
        modifySet(prev => ({
            ...prev,
            [member_id]: {
                ...prev[member_id],
                description: value, // description을 빈 문자열로 변경할 때도 제대로 처리
            },
        }));
    };

    // 수정 버튼 클릭 시 API 호출
    const handleUpdate = (item) => {
        const modifiedData = modify[item.member_id] || {};
        const updatedData = {
            member_id: item.member_id,
            grade: modifiedData.grade ?? item.grade,
            description: modifiedData.description !== undefined ? modifiedData.description : item.description,
        };

        console.log("수정된 데이터", updatedData);

        axios.put("http://localhost:5002/bk/admin/member", updatedData)
            .then(() => {
                alert("수정되었습니다");
                fetchData();
            })
            .catch(err => {
                console.error("회원 데이터 수정 오류", err);
            });
    };

    return (
        <div className="cont cont3">
            <h2>회원관리</h2>
            <div className="board-member-table">
                <ul className="table-title">
                    <li>아이디</li>
                    <li>이름</li>
                    <li>생일</li>
                    <li>전화번호</li>
                    <li>이메일</li>
                    <li>회원가입일</li>
                    <li>회원등급</li>
                    <li>비고</li>
                    <li>변경</li>
                </ul>
                {members.map((item) => (
                    <ul className="table-contents" key={item.member_id}>
                        <li onClick={() => navigate(`/admin/member/${item.member_id}`)}> {item.member_id} </li>
                        <li> {item.name} </li>
                        <li> {item.birth} </li>
                        <li> {item.phone} </li>
                        <li> {item.email} </li>
                        <li> {`${new Date(item.join_date).getFullYear().toString().slice(2)}-${(new Date(item.join_date).getMonth() + 1).toString().padStart(2, '0')}-${new Date(item.join_date).getDate().toString().padStart(2, '0')}`} </li>
                        <li>
                            <select 
                                value={modify[item.member_id]?.grade ?? item.grade}
                                onChange={(e) => handleGradeChange(e, item)}
                            >
                                <option value="2">우수</option>
                                <option value="3">일반</option>
                                <option value="4">BL</option>
                                <option value="5">탈퇴</option>
                            </select>
                        </li>
                        <li>
                            <input
                                type="text"
                                minLength={0}
                                maxLength={20}
                                value={modify[item.member_id]?.description ?? item.description ?? ''}
                                onChange={(e) => handleChange(e.target.value, item.member_id)}
                            />
                        </li>
                        <li>
                            <button onClick={() => handleUpdate(item)}>수정</button>
                        </li>
                    </ul>
                ))}
            </div>
            {/* 페이지네이션 */}
            <Pagination
                totalItems={member.length}
                itemsPerPage={itemsPerPage}
                currentPage={currentPage}
                onPageChange={setCurrentPage}
            />
        </div>
    );
}

export default AdminCont3;