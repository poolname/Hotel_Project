import React from 'react'
import Header from '../common/Header'
import Footer from '../common/Footer'
import MyPageTab from './MyPageTab'
import MyInfoCont from './MyInfoCont'
import '../../scss/mypage.scss'


const MyInfo = () => {


    return (
        <>
            <Header/>
            <div className="container">
                <div className="center">
                    <div className="depth3-tab-wrap  my-page">
                        <MyPageTab/>
                        <div className="content">
                            <MyInfoCont/>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default MyInfo
