import React from "react";
import Header from "../common/Header";
import Footer from "../common/Footer";
import { Outlet } from "react-router-dom";
import { useEffect } from "react";

const Res_temp = () => {
    useEffect(() => {
        document.title = "예약";
    });

    return (
        <>
            <Header></Header>
            <Outlet />
            <Footer></Footer>
        </>
    );
};

export default Res_temp;
