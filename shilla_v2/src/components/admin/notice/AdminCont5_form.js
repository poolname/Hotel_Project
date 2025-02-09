import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AdminCont5_search from "./AdminCont5_search";
import AdminCont5_type from "./AdminCont5_type";
import AdminCont5_btn from "./AdminCont5_btn";
import axios from "axios";

const AdminCont5_form = ({
    Txtinput,
    setTxtinput,
    Ntype,
    setNtype,
    handleSearch,
}) => {
    console.log("제목과타입", Txtinput, Ntype);
    const handleReset = e => {
        setTxtinput(""); // 상태 초기화
        setNtype(""); // 상태 초기화
    };

    return (
        <form className="searchwrap" name="myfrm">
            <AdminCont5_search
                Txtinput={Txtinput}
                setTxtinput={setTxtinput}
                setNtype={setNtype}
                Ntype={Ntype}
            />
            {/* <AdminCont5_type setNtype={setNtype} Ntype={Ntype} /> */}
            <AdminCont5_btn
                handleReset={handleReset}
                handleSearch={handleSearch}
            />
        </form>
    );
};

export default AdminCont5_form;
