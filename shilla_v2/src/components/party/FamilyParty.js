import React, { useEffect } from 'react';
import Header from '../common/Header';
import Tab3 from './Tab3';
import SubTitle from './SubTitle';
import Gallery from './Gallery';
import Introduction from './Introduction';
import Footer from '../common/Footer';

import "../../scss/common.scss"
import "../../scss/header.scss"
import "../../scss/footer.scss"
import "../../scss/sub-list.scss"
import "../../scss/sub-detail.scss"

const FamilyParty = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const galleryImages = [
        "../../img/sub/cbInfo-1-01.jpg",
        "../../img/sub/cbInfo-1-02.jpg",
        "../../img/sub/cbInfo-1-03.jpg",
        "../../img/sub/cbInfo-1-04.jpg",
        "../../img/sub/cbInfo-1-05.jpg",
        "../../img/sub/cbInfo-1-06.jpg",
        "../../img/sub/cbInfo-1-07.jpg",
        "../../img/sub/cbInfo-1-08.jpg",
    ];
    
    const introData = {
        description: "상상력이 돋보이는 아이디어와 섬세하고 완벽한 진행으로 약혼식, 첫돌, 생신연 등의 특별한 가족모임을 더욱 소중한 추억으로 만들어 드립니다.",
        tel: "Tel) 02-2230-3321",
    };
    
    return (
        <>
        <Header/>
        <div className="container">
            <div className="center">
                <div className="depth3-tab-wrap">
                    <Tab3/>
                    <div className="tab-contents">
                        <div className="tab-cont cont1 on">
                            <SubTitle/>                    
                            <Gallery propImages={galleryImages} />
                            <div className="context">
                                <Introduction {...introData} labelType="inquiry" bdNone={true} />
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

export default FamilyParty;
