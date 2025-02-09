import React from "react";
import Header from "../common/Header";
import Footer from "../common/Footer"
import { Outlet } from "react-router-dom";
import { useEffect } from "react";


const BoardTemp = () => {
    useEffect(()=>{
        document.title = "문의하기"
    })

    return (
            <>
                <Header/>
                <Outlet/>
                <Footer></Footer>
            </>
        );
};

export default BoardTemp;
