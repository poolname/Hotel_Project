import React, { useEffect } from "react";
import AdminCont1Chart from './AdminCont1Chart'
import AdminCont2Chart from './AdminCont2Chart'
import AdminCont3Chart from './AdminCont3Chart'
import AdminCont4Chart from './AdminCont4Chart'
import '../../../scss/admin.scss'

const AdminCont1 = () => {
    // useEffect (() => {
    //     document.title = "신라호텔:관리자 - 대시보드"
    // }, [])

    return (
        <div className="cont cont1 on">
            <h2>대시보드</h2>
            <div className="chart-group">
                <div className="chart-wrap">
                    <h3>방문자 현황(월별 비교)</h3>
                    <div className="chart">
                        <AdminCont1Chart />
                    </div>
                </div>
                <div className="chart-wrap">
                    <h3>매출 현황(월별 비교)</h3>
                    <div className="chart">
                        <AdminCont2Chart />
                    </div>
                </div>
                <h3>객실별 판매 현황(월별 비교)</h3>
                <div className="chart-wide">
                    <div className="chart">
                        <AdminCont3Chart />
                    </div>
                </div>
                <h3>객실별 취소 현황(월별 비교)</h3>
                <div className="chart-wide">
                    <div className="chart">
                        <AdminCont4Chart />
                    </div>
                </div>
            </div>
        </div>
    );

    
};

export default AdminCont1;