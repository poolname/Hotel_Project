import React, { useEffect } from "react"
import Header from '../common/Header'
import Footer from '../common/Footer'
import ResOfferRoomId from "./ResOfferRoomId"
import "../../scss/res_search.scss";

const ResOffer = () => {

    useEffect(()=>{
        document.title = "예약하기"
    },[])

    return (
        <>
            <Header/>
            <ResOfferRoomId/>
            <Footer/>
        </>
    );
};

export default ResOffer;
