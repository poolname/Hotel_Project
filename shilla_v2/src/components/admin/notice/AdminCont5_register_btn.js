import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AdminCont5_register_btn = () => {
    return (
        <div className="button-container">
            <Link to="/admin/notice" className="cancel">
                취소
            </Link>
            <input type="submit" className="submit" value="등록" />
        </div>
    );
};

export default AdminCont5_register_btn;
