import React, { useState, useEffect } from "react";
import axios from "axios";
import "../../../scss/AdminCont6.scss";
import Pagination from "../../sub/Pagination";


const AdminCont6 = () => {
    const [selectedYear, setSelectedYear] = useState('');
    const [selectedMonth, setSelectedMonth] = useState('');
    const [selectedRoom, setSelectedRoom] = useState('');
    const [filteredData, setFilteredData] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);

    const [years, setYears] = useState([]);
    const [months, setMonths] = useState([]);
    const [rooms, setRooms] = useState([]);

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10; // 한 페이지에 보여줄 아이템 수

    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentData = filteredData.slice(startIndex, startIndex + itemsPerPage);



    // 날짜 변환 함수
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, "0");
        const day = String(date.getDate()).padStart(2, "0");
        return `${year}-${month}-${day}`;
    };

    // 연도, 월, 호수 데이터를 불러오는 함수
    useEffect(() => {
        const fetchFilterData = async () => {
            try {
                const response = await axios.get("http://localhost:5002/bk/sales/filters");
                setYears(response.data.years);
                setMonths(response.data.months);
                setRooms(response.data.rooms);
            } catch (error) {
                console.error("필터 데이터를 불러오는 중 오류 발생:", error);
            }
        };

        fetchFilterData();
    }, []);

    // 선택된 필터에 맞는 매출 데이터를 불러오는 함수
    useEffect(() => {
        const fetchSalesData = async () => {
            try {
                const response = await axios.get("http://localhost:5002/bk/sales", {
                    params: {
                        year: selectedYear,
                        month: selectedMonth,
                        room: selectedRoom,
                    },
                });
                
                setFilteredData(response.data);
    
                // 취소되지 않은 예약만 합산
                const total = response.data.reduce((acc, curr) => acc + (curr.Cancel === '0' ? curr.tot_price : 0), 0);
                setTotalPrice(total);
    
                // 필터링 걸리면 1페이지로 이동
                setCurrentPage(1);
            } catch (error) {
                console.error("매출 데이터를 불러오는 중 오류 발생:", error);
            }
        };
    
        fetchSalesData();
    }, [selectedYear, selectedMonth, selectedRoom]);
    
    

    return (
        <div className="cont cont6">
            <h2>매출현황</h2>
        
            {/* 필터링 드롭다운과 총 합계 */}
            <div className="filter-container">
                <div className="filters">
                    <label>연도</label>
                    <select onChange={(e) => setSelectedYear(e.target.value)} value={selectedYear}>
                        <option value="">전체</option>
                        {years.map((year) => (
                            <option key={year} value={year}>{year}년</option>
                        ))}
                    </select>
        
                    <label>월</label>
                    <select onChange={(e) => setSelectedMonth(e.target.value)} value={selectedMonth}>
                        <option value="">전체</option>
                        {months.map((month) => (
                            <option key={month} value={month}>{month}월</option>
                        ))}
                    </select>
        
                    <label>호수</label>
                    <select onChange={(e) => setSelectedRoom(e.target.value)} value={selectedRoom}>
                        <option value="">전체</option>
                        {rooms.map((room) => (
                            <option key={room} value={room}>{room}호</option>
                        ))}
                    </select>
                </div>
        
                <div className="total-price">
                    총 합계: {totalPrice.toLocaleString()}원
                </div>
            </div>
        
            {/* 매출 데이터 표 */}
            <table>
                <thead>
                    <tr>
                        <th>예약 번호</th>
                        <th>회원 id</th>
                        <th>호수</th>
                        <th>시작일</th>
                        <th>종료일</th>
                        <th>취소 여부</th>
                        <th>금액</th>
                    </tr>
                </thead>
                <tbody>
                    {currentData.map((data, index) => (
                        <tr key={index}>
                            <td>{data.reservation_id}</td>
                            <td>{data.member_id}</td>
                            <td>{data.room_id}</td>
                            <td>{formatDate(data.start_date)}</td>
                            <td>{formatDate(data.end_date)}</td>
                            <td>{data.Cancel === '0' ? 'N' : 'Y'}</td>
                            <td>{data.tot_price.toLocaleString()}원</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <Pagination
                totalItems={filteredData.length}
                itemsPerPage={itemsPerPage}
                currentPage={currentPage}
                onPageChange={setCurrentPage}
            />

        </div>
    
    );
};

export default AdminCont6;
