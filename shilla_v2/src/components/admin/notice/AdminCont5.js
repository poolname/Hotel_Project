import React, { useEffect, useState } from "react";
import "../../../scss/AdminCont5.scss";
import { Link, Outlet } from "react-router-dom";
import AdminCont5_list from "./AdminCont5_list";
import AdminCont5_form from "./AdminCont5_form";

const AdminCont5 = () => {
    return (
        <div className="cont cont5">
            <h2>공지사항</h2>
            <Outlet />
        </div>
    );
};

export default AdminCont5;
