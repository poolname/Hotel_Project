import React, { useEffect } from "react"
import Header from '../../common/Header'
import Footer from '../../common/Footer'
import AdminTabMenu from '../AdminTabMenu'
import AdminCont1 from './AdminCont1'
import '../../../scss/admin.scss'

const AdminDashboard = () => {

    return (
        <>
            <Header/>
            <div className="admin-wrap">
                <div className="center">
                    <AdminTabMenu/>
                    <div className="tab-contents">
                        <AdminCont1 />
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    );
};

export default AdminDashboard;
