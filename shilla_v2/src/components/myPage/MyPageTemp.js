import React from "react";
import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import '../../scss/common.scss'
import '../../scss/mypage.scss'
import '../../scss/myreservation.scss'



const MyPageTemp = () => {
    useEffect(()=>{
        document.title = "신라호텔:마이페이지"
    },[])

    return (
            <>
                <Outlet/>
            </>
        );
};

export default MyPageTemp;