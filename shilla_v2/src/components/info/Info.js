import React,{useEffect} from "react";
import InfoComp1 from './InfoComp1'
import InfoComp2 from './InfoComp2'
import InfoComp3 from './InfoComp3'
import Header from '../common/Header'
import Footer from '../common/Footer'
import FloatingMenu from '../common/FloatingMenu'
import '../../scss/sub06_01.scss'

const Info = () => {
    useEffect(()=>{
        document.title = '연락처';
    });

    
    return (
        <>
            <Header/>
            <div className="container">
                <div className="center">
                    <div className="contact-wrap">
                        <InfoComp1/>
                        <InfoComp2/>
                        <InfoComp3/>
                    </div>
                </div>
            </div>
            <Footer/>
            <FloatingMenu/>
        </>
    );
};

export default Info;
