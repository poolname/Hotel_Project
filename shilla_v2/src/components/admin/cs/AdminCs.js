import React, { useEffect } from "react"
import AdminTabMenu from '../AdminTabMenu'
import AdminCsCont from "./AdminCsCont"
import '../../../scss/admin.scss'


const AdminCs = () => {

    return (
        <>
            <div className="admin-wrap">
                <div className="center">
                    <AdminTabMenu/>
                    <div className="tab-contents">
                        <AdminCsCont/>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AdminCs;
