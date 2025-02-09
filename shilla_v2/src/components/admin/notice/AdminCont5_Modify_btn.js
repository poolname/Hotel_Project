import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AdminCont5_Modify_option = ({ modifyGo }) => {
    return (
        <div className="button-container">
            {/* <button type="reset" className="cancel"> */}
            <Link to="/admin/notice" className="cancel">
                취소
            </Link>
            {/* </button> */}
            <button type="submit" className="submit" onClick={modifyGo}>
                저장
            </button>
        </div>
    );
};

export default AdminCont5_Modify_option;
