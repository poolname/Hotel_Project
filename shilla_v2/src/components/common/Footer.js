import React, { useState } from "react";
import { Link } from "react-router-dom";
import FloatingMenu from "./FloatingMenu";
import '../../scss/footer.scss'

const Footer = () => {
    const footerDataSns = [
        { link : "https://www.instagram.com/theshillaseoul/", title : "instagram 새창 열기", iClass : "fa-brands fa-instagram"},
        { link : "https://www.facebook.com/theshillahotels", title : "facebook 새창 열기", iClass : "fa-brands fa-facebook-f"},
        { link : "https://post.naver.com/my.nhn?memberNo=46212769", title : "네이버 포스트 새창 열기", iClass : "fa-solid fa-blog"},
    ]
    const footerDataMenu = [
        {link :"#self", title : "호텔소개"},
        {link :"#self", title : "호텔정보"},
        {link :"#self", title : "층별안내도"},
        {link :"/sub/sitemap", title : "사이트맵"},
    ]
    const footerDataList = [
        {title : "이용약관"},
        {title : "개인정보 처리방침"},
        {title : "사업자정보확인"},
    ]
    const footerDataInfo = [
        {context : "법인명: (주) 호텔신라"},
        {context : "대표자: 이부진 사업자 등록번호: 203.81.43363"},
        {context : "통신판매신고번호: 중구00272호"},
        {context : "호스팅서비스제공자: 삼성SDS(주)"},
        {context : "객실예약 shilla.reserve@samsung.com"},
        {context : "주소: 서울특별시 중구 동호로 249"},
        {context : "TEL: 02-2233-3131"},
        {context : "FAX. 02-2230-3769"},
    ]
    const footerDataHistory = [
        {context : '2024 Forbes Travel Guide$' ,context2 : '국내 최초 6년 연속 5성 호텔 수상'},
        {context : '한국 능률협회컨설팅 선정' ,context2 : '브랜드파워 호텔 부문 7년 연속 1위'},
        {context : '2024 한국생산성본부 선정' ,context2 : '국가브랜드경쟁력지수 호텔 부문 1위'},
        {context : '한국표준협회 평가' ,context2 : '실내공기질 인증 획득'},
        {context : '한국환경산업기술원 평가' ,context2 : '친환경 호텔 인증 획득'},
    ]

    let [snsData,snsDataSet] = useState(footerDataSns);
    let [menuData,menuDataSet] = useState(footerDataMenu);
    let [listData,listDataSet] = useState(footerDataList);
    let [infoData,infoDataSet] = useState(footerDataInfo);
    let [historyData,historyDataSet] = useState(footerDataHistory);



    return (
        <>
            <footer>
                <div className="center">
                    <div className="f_menu">
                        <img src="/img/common/logo.png" alt="신라호텔 로고" className="footer-logo"/>
                        <div>SNS</div>
                        <ul className="sns">
                            {
                                snsData.map((item,index)=><li key={index}><Link to={item.link} target="_blank" title={item.title}><i className={item.iClass}></i></Link></li>)
                            }
                        </ul>
                        <div>MENU</div>
                        <ul className="menu">
                            {
                                menuData.map((item,index)=><li key={index}><Link to={item.link}>{item.title}</Link></li>)
                            }
                        </ul>
                    </div>
                    <div className="f_bot">
                        <div className="f_list">
                            {
                                listData.map((item,index)=><span key={index}><Link to="#self">{item.title}</Link></span>)
                            }
                        </div>
                        <ul className="f_info">
                            {
                                infoData.map((item,index)=><li key={index}>{item.context}</li>)
                            }
                        </ul>
                        <p className="copy">Copyright <span>&copy;</span> HOTEL SHILLA CO.,LTD All Rights Reserved.</p>
                    </div>
                    <div className="info">
                        {
                            historyData.map((item,index)=><p key={index}>{item.context}<br/>{item.context2}</p>)
                        }
                    </div>
                </div>
            </footer>
            <FloatingMenu />
        </>
    );
};

export default Footer;
