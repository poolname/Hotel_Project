import React from 'react'
import Header from '../common/Header'
import Footer from '../common/Footer'
import MyPageTab from './MyPageTab'
import MyInquiryCont from './MyInquiryCont'
import '../../scss/mypage.scss'
import '../../scss/myinquiry.scss'


const MyInquiry = () => {


    return (
        <>
            <Header/>
            <div className="container">
                <div className="center">
                    <div className="depth3-tab-wrap  my-page">
                        <MyPageTab/>
                        <div id="board-container">
                            <div className="inquiry-info" id="inquiry-info">
                                <MyInquiryCont/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default MyInquiry
