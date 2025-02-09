import React from "react";
import Header from "../../common/Header"
import Footer from "../../common/Footer"
import { Outlet } from "react-router-dom";
import { useEffect } from "react";

const AdminCsTemp = () => {
    useEffect(()=>{
        document.title = "신라호텔:관리자-문의하기"
    })

    return (
            <>
                <Header></Header>
                <Outlet/>
                <Footer></Footer>
            </>
        );
};

export default AdminCsTemp;
