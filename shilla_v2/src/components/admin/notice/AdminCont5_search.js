import React, { useEffect, useState } from "react";
import "../../../scss/AdminCont5.scss";
import { Link } from "react-router-dom";
import AdminCont5_type from './AdminCont5_type'

const AdminCont5_search = ({ Txtinput, setTxtinput, Ntype, setNtype }) => {
    const handleInput = e => {
        setTxtinput(e.target.value);
        console.log("검색단어", e.target.value);
    };
    return (
        <div className="search-container">
            <div className="cell">검색어</div>
            <input
                type="text"
                name="keyword"
                value={Txtinput}
                className="con"
                placeholder="제목을 입력하세요."
                onChange={handleInput}
            />
            <AdminCont5_type Ntype={Ntype} setNtype={setNtype}/>
        </div>
    );
};

export default AdminCont5_search;
