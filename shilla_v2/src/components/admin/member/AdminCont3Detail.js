import { useState, useEffect } from 'react'; // useState, useEffect 불러오기
import { useParams, useNavigate, Link } from 'react-router-dom'; // useParams, useNavigate, Link 불러오기
import axios from 'axios'; // axios 불러오기

import Header from '../../common/Header' // Header UI 불러오기
import Footer from '../../common/Footer' // Footer UI 불러오기
import AdminTabMenu from '../AdminTabMenu' // 좌측 탭메뉴 불러오기
import '../../../scss/admin.scss' // admin scss 불러오기

const AdminCont3Detail = () => {
    const navigate = useNavigate(); 
    const [ member, memberSet ] = useState(null); 
    const [ reservation, reservationSet ] = useState([]); 
    const { id } = useParams(); 

    useEffect(() => {
        document.title = "신라호텔:관리자"
        
        const fetchReservations = async () => {
            try {
                const response = await axios.get(`http://localhost:5002/bk/admin/member/detail/${id}`) 
                reservationSet(response.data.reserve)
                memberSet(response.data.mem)
            } catch (err) {
                console.error("예약 정보 가져오는 중 오류 발생:", err) 
            }
        }
        fetchReservations() 
    }, [id]) 

    if (!member) {
        return <>
            <Header/> 
            <div className="admin-wrap">
                <div className="center">
                    <AdminTabMenu/>
                    <div className="tab-contents">
                        <h2>{`${name}(${id})님의 회원 정보`}</h2> 
                        <Link to="/admin/member">목록으로</Link>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    }

    const getReservation = (item) => {
        const today = new Date();
        const formattedToday = today.setHours(0, 0, 0, 0); 
        const startDate = new Date(item.start_date).setHours(0, 0, 0, 0);
        const joinDate = new Date(item.join_date).setHours(0, 0, 0, 0); 
    
        if (item.Cancel === "1") {
            return "예약 취소";
        } else if (startDate < formattedToday) {
            return "이용 완료"; 
        } else if (startDate >= formattedToday && joinDate <= formattedToday) {
            return "예약 완료"; 
        } else if (joinDate > formattedToday) {
            return "예약 확정"; 
        } else {
            return "예약 상태 불명"; 
        }
    };


    return (
        <>
            <div className="cont cont3">
                <Header/>
                <div className="admin-wrap">
                    <div className="center">
                        <AdminTabMenu/>
                        <div className="tab-contents">
                            <h2>{`${member.name}(${id})님의 회원 정보`}</h2>
                            <div className="board-memberInfo-table">
                                <ul className="table-title">
                                    <li>예약번호</li>
                                    <li>체크인</li>
                                    <li>체크아웃</li>
                                    <li>총금액</li>
                                    <li>성인</li>
                                    <li>어린이</li>
                                    <li>이용 현황</li>
                                </ul>
                                {reservation.length > 0 ? (
                                    reservation.map((item, idx) => (
                                        <ul className="table-contents" key={idx}>
                                            <li>{item.reservation_id} </li>
                                            <li>{`${new Date(item.start_date).getFullYear().toString().slice(2)}-
                                            ${(new Date(item.start_date).getMonth() + 1).toString().padStart(2, '0')}-
                                            ${new Date(item.start_date).getDate().toString().padStart(2, '0')}`} </li>
                                            <li>{`${new Date(item.end_date).getFullYear().toString().slice(2)}-
                                            ${(new Date(item.end_date).getMonth() + 1).toString().padStart(2, '0')}-
                                            ${new Date(item.end_date).getDate().toString().padStart(2, '0')}`} </li>
                                            <li>{item.tot_price.toLocaleString()}원 </li>
                                            <li>{item.adult_cnt} 명 </li>
                                            <li>{item.child_cnt} 명 </li>
                                            <li>{getReservation(item)}</li>
                                        </ul>
                                    ))
                                ) : (
                                    <ul className="table-reserve-none">
                                        <li>예약 정보가 없습니다.</li>
                                    </ul>
                                )}
                            </div>
                            <Link to="/admin/member" className="toList">목록으로</Link>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
};

export default AdminCont3Detail;