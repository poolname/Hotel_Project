import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AdminCont5_type = ({ Ntype, setNtype }) => {
    const handleType = async e => {
        setNtype(e.target.value);
        console.log("선택타입", Ntype);
    };
    return (
        <div className="search-container">
            <div className="cell">상세검색</div>
            <select
                name="category"
                value={Ntype}
                className="category"
                onChange={handleType}
            >
                <option value="분류">전체</option>
                <option value="공지">공지</option>
                <option value="안내">안내</option>
                <option value="이벤트">이벤트</option>
            </select>
        </div>
    );
};

export default AdminCont5_type;
