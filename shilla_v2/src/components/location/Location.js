import React from "react";
import Header from "../common/Header";
import Footer from "../common/Footer";
import FloatingMenu from "../common/FloatingMenu";
import LocationComp1 from "./LocationComp1";
import LocationComp2 from "./LocationComp2";
import LocationComp3 from "./LocationComp3";
import '../../scss/sub06_06.scss'

const Location = () => {
    return (
       <>
       <Header/>
       <div className="container">
            <div className="center">
                <div className="depth3-tab-wrap">
                    <div className="tab-contents">
                        <div className="tab-cont cont on">
                            <LocationComp1/>
                            <div className="context">
                                <LocationComp2/>
                                <LocationComp3/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
       <Footer/>
       <FloatingMenu/>
       </>
    );
};

export default Location;
