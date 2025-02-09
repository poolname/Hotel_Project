import React, { useEffect } from "react"
import AdminTabMenu from '../AdminTabMenu'
import AdminCsCont_detail from "./AdminCsCont_detail"
import '../../../scss/admin.scss'


const AdminCsDstail = () => {

    return (
        <>
            <div className="admin-wrap">
                <div className="center">
                    <AdminTabMenu/>
                    <div className="tab-contents">
                        <AdminCsCont_detail/>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AdminCsDstail;
