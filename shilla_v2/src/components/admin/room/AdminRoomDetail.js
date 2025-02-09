import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom"; 
import axios from "axios";
import Header from '../../common/Header'
import Footer from '../../common/Footer'
import AdminTabMenu from '../AdminTabMenu'
import "../../../scss/AdminRoomDetail.scss";
import '../../../scss/admin.scss'



const AdminRoomDetail = () => {
    const { id } = useParams(); // URL에서 room_id 가져오기
    const navigate = useNavigate(); // 페이지 이동을 위한 hook 추가
    const [roomDetails, setRoomDetails] = useState(null); // 방 정보 상태
    const [reservations, setReservations] = useState([]); // 예약 정보 상태
    const [error, setError] = useState(""); // 오류 메시지 상태

    // 날짜 변환 함수
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, "0");
        const day = String(date.getDate()).padStart(2, "0");
        return `${year}-${month}-${day}`;
    };

    useEffect(() => {
        document.title = "신라호텔:관리자"
        const fetchRoomDetails = async () => {
            try {
                const response = await axios.get(`http://localhost:5002/bk/admin/roomManagement/detail/${id}`);
                setRoomDetails(response.data);
            } catch (err) {
                console.error("방 정보 가져오는 중 오류 발생:", err);
                setError("방 정보를 가져올 수 없습니다.");
            }
        };

        const fetchReservations = async () => {
            try {
                const response = await axios.get(`http://localhost:5002/bk/admin/roomManagement/reservations/${id}`);
                setReservations(response.data);
            } catch (err) {
                console.error("예약 정보 가져오는 중 오류 발생:", err);
                setError("예약 정보를 가져올 수 없습니다.");
            }
        };

        fetchRoomDetails();
        fetchReservations();
    }, [id]);

    if (error) {
        return <div>{error}</div>; 
    }

    if (!roomDetails) {
        return <div>방 정보 불러오는 중</div>; 
    }

    return (

        <>
            <Header/>
            <div className="admin-wrap">
                <div className="center">
                    <AdminTabMenu/>
                    <div className="tab-contents">
                        <div className="room-man-detail">
                            <h2>{roomDetails.room_id}호 예약 내역</h2>
                            {reservations.length > 0 ? (
                                <table className="reservation-table">
                                    <thead>
                                        <tr>
                                            <th>예약 번호</th>
                                            <th>회원 id</th>
                                            <th>시작일</th>
                                            <th>종료일</th>
                                            <th>취소 여부</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {reservations.map((reservation) => (
                                            <tr key={reservation.reservation_id}>
                                                <td>{reservation.reservation_id}</td>
                                                <td>{reservation.member_id}</td>
                                                <td>{formatDate(reservation.start_date)}</td>
                                                <td>{formatDate(reservation.end_date)}</td>
                                                <td>{reservation.Cancel === "0" ? "N" : "Y"}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            ) : (
                                <div className="noRes">
                                    <h4>예약 정보가 없습니다.</h4>
                                </div>
                            )}

                            <button className="back-button" onClick={() => navigate(-1)}>
                                목록으로
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
        
        
    );
};

export default AdminRoomDetail;

