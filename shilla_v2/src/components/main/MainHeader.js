import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import HeaderComp1 from "../common/HeaderComp1";
import HeaderComp2 from "../common/HeaderComp2";
import HeaderComp3 from "../common/HeaderComp3";
import HeaderComp4 from "../common/HeaderComp4";
// import HeaderComp4Login from "../common/HeaderComp4Login";
// import HeaderComp4Admin from "../common/HeaderComp4Admin";
import HeaderComp5 from "../common/HeaderComp5";
import '../../scss/reset.css'
import '../../scss/common.scss'
import '../../scss/header.scss'
import '../../scss/footer.scss'
import '../../scss/main.scss'


const MainHeader = () => {
    const gnbTitle = [
        {
            link : '/specialOffer', 
            title : '스페셜 오퍼',
            gnbMenu : [
                {link : '/specialOffer', text : '객실패키지'},
                {link : '/event', text : '이벤트'},
            ]
        },
        {
            link : '/room', 
            title : '객실',
            gnbMenu : [
                {link : '/standard', text : '스탠다드'},
                {link : '/executive', text : '이그제큐티브'},
                {link : '/suite', text : '스위트'},
                {link : '/executiveLounge', text : '더 이그제큐티브 라운지'},
                {link : '/room', text : '전체 객실 보기'},
            ]
        },
        {
            link : '/dining', 
            title : '다이닝',
            gnbMenu : [
                {link : '/restaurant', text : '레스토랑'},
                {link : '/lounge', text : '라운지 & 바'},
                {link : '/bakery', text : '베이커리'},
        
            ]
        },
        {
            link : '/lifeStyle', 
            title : '라이프스타일',
            gnbMenu : [
                {link : '/outdoorPool', text : '야외수영장'},
                {link : '/fitness', text : '피트니스'},
                {link : '/walkingTrails', text : '산책로'},
                {link : '/jogging', text : '조깅코스'},
                {link : '/shopping', text : '쇼핑'},
            ]
        },
        {
            link : '/party', 
            title : '웨딩 & 연회',
            gnbMenu : [
                {link : '/wedding', text : '웨딩'},
                {link : '/corporateParty', text : '기업연회'},
                {link : '/familyParty', text : '가족연회'},
            ]
        },
        {
            link : '/info', 
            title : '고객센터',
            gnbMenu : [
                {link : '/info', text : '연락처'},
                {link : '/notice', text : '공지사항'},
                {link : '/board', text : '문의하기'},
                {link : '/location', text : '오시는길'},
            ]
        },
    ]

    const [gnbMenu,gnbMenuSet] = useState(gnbTitle);

    const [user,setUser] = useState(null)


    useEffect(()=>{
        const id = sessionStorage.getItem("id");
        const name = sessionStorage.getItem("name");
        const grade = sessionStorage.getItem("grade");

        if(id){
            setUser({'id':id,"name": name,"grade":grade})
        }else{
            setUser(null)
        }

    },[])


    return (
        <div className="main-header" id="MainHeader">
            <header className="active" >
                <div className="gnbbg" ></div>
                <div className="center">
                    <h1 className="logo">
                        <Link to='/'>
                            <img src="img/common/logo-w.png" alt=""/>
                        </Link>
                    </h1>
                    <HeaderComp1 gnbMenu={gnbMenu}/>
                    <HeaderComp2 user={user}/>
                    
                    {/* <!-- 모바일 햄버거 버튼 --> */}
                    <HeaderComp3/>
                </div>
            </header>
            {/* <!-- 모바일 메뉴 --> */}
            <div className="m_wrap">
                <HeaderComp4 user={user}/>
                <HeaderComp5 gnbMenu={gnbMenu}/>
            </div>
        </div>
    )

}

export default MainHeader


