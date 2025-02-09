import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Pagination from "../../sub/Pagination";
import "../../../scss/AdminCont2.scss";

const bkURL = process.env.REACT_APP_BACK_URL;

const AdminCont2 = () => {
    const [rooms, setRooms] = useState([]);
    const [editedRooms, setEditedRooms] = useState({}); // 수정된 데이터 저장
    const navigate = useNavigate();
    
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5; // 한 페이지에 보여줄 아이템 수

    // 객실 목록 가져오는 함수
    const fetchRooms = () => {
        axios
            .get("http://localhost:5002/bk/admin/roomManagement")
            .then((response) => {
                setRooms(response.data);
            })
            .catch((error) => {
                console.error("객실 데이터를 가져오는 중 오류 발생:", error);
            });
    };

    useEffect(() => {
        fetchRooms();
    }, []);

    // 입력값 변경
    const handleChange = (roomId, key, value) => {
        setEditedRooms((prev) => ({
            ...prev,
            [roomId]: {
                ...prev[roomId],
                [key]: value,
            },
        }));
    };

    // 수정완료 버튼 클릭
    const handleUpdate = (roomId) => {

        axios
            .post(`http://localhost:5002/bk/admin/roomManagement/update`, {
                roomId,
                ...editedRooms[roomId],
            })
            .then(() => {
                alert("수정이 완료되었습니다.");
                fetchRooms(); // 수정 후 데이터 새로고침
            })
            .catch((error) => {
                console.error("수정 중 오류 발생:", error);
                alert("수정에 실패했습니다.");
            });
    };


    // 현재 페이지 데이터 계산
    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentRooms = rooms.slice(startIndex, startIndex + itemsPerPage);

    return (
        <div className="cont cont2">
            <h2>객실관리</h2>
            <div className="table">
                <div className="table-header">
                    <div className="table-row">
                        <div className="cell small">호수</div>
                        <div className="cell wide">특이사항</div>
                        <div className="cell">체크인</div>
                        <div className="cell type">타입</div>
                        <div className="cell small">침대</div>
                        <div className="cell">금액</div>
                        <div className="cell small">최대인원</div>
                        <div className="cell small">변경</div>
                    </div>
                </div>
                <div className="table-body">
                    {currentRooms.map((room) => (
                        <div key={room.room_id} className="table-row">
                            <div className="cell  small clickable"
                                onClick={() => navigate(`/admin/room/detail/${room.room_id}`)}
                            >
                                {room.room_id}
                            </div>
                            <div className="cell wide">
                                <input
                                    type="text"
                                    defaultValue={room.description}
                                    onChange={(e) =>
                                        handleChange(room.room_id, "description", e.target.value)
                                    }
                                />
                            </div>
                            <div className="cell">
                                <select
                                    defaultValue={room.check_in}
                                    onChange={(e) =>
                                        handleChange(room.room_id, "check_in", e.target.value)
                                    }
                                >
                                    <option value="0">체크아웃</option>
                                    <option value="1">체크인</option>
                                </select>
                            </div>
                            <div className="cell type">{room.room_type}</div>
                            <div className="cell small">{room.bed_type}</div>
                            <div className="cell">{room.day_price}</div>
                            <div className="cell small">{room.max_occupancy}</div>
                            <div className="cell small">
                                <button onClick={() => handleUpdate(room.room_id)}>수정</button>
                            </div>
                        </div>
                        
                    ))}
                </div>
            </div>
            {/* 페이지네이션 */}
            <Pagination
                totalItems={rooms.length}
                itemsPerPage={itemsPerPage}
                currentPage={currentPage}
                onPageChange={setCurrentPage}
            />
        </div>
    );
};

export default AdminCont2;
