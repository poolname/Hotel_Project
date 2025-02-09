import React, { useEffect } from 'react';
import Header from '../common/Header';
import SubTitle from './SubTitle';
import Gallery2 from './Gallery2';
import Introduction3 from './Introduction3';
import Card2 from './Card2';
import Footer from '../common/Footer';

import "../../scss/common.scss"
import "../../scss/header.scss"
import "../../scss/footer.scss"
import "../../scss/sub-list.scss"
import "../../scss/sub-detail.scss"

function Jogging() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    
    const galleryImages = "../../img/sub/R0000002471W_KR.jpg";

    return (
        <>
        <Header/>
        <div className="container">
            <div className="center">
                <div className="depth3-tab-wrap">
                    <div className="tab-contents">
                        <div className="tab-cont cont1 on">
                            <SubTitle/>
                            <Gallery2 propImages={galleryImages}/>
                            <div className="context">
                                <Introduction3/>
                                <Card2/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
        </>
    )
    
}

export default Jogging