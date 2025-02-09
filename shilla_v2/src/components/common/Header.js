import { useEffect, useState, useRef } from "react";
import { Link,useNavigate } from "react-router-dom";
import HeaderComp1 from "./HeaderComp1";
import HeaderComp2 from "./HeaderComp2";
import HeaderComp3 from "./HeaderComp3";
import HeaderComp4 from "./HeaderComp4";
import HeaderComp5 from "./HeaderComp5";
import '../../scss/reset.css'
import '../../scss/common.scss'
import '../../scss/header.scss'



const Header = () => {

   
    

    const gnbTitle = [
        {
            link: "/specialOffer",
            title: "스페셜 오퍼",
            gnbMenu: [
                { link: "/specialOffer", text: "객실패키지" },
                { link: "/event", text: "이벤트" },
            ],
        },
        {
            link: "/room",
            title: "객실",
            gnbMenu: [
                { link: "/standard", text: "스탠다드" },
                { link: "/executive", text: "이그제큐티브" },
                { link: "/suite", text: "스위트" },
                { link: "/executiveLounge", text: "더 이그제큐티브 라운지" },
                { link: "/room", text: "전체 객실 보기" },
            ],
        },
        {
            link: "/dining",
            title: "다이닝",
            gnbMenu: [
                { link: "/restaurant", text: "레스토랑" },
                { link: "/lounge", text: "라운지 & 바" },
                { link: "/bakery", text: "베이커리" },
            ],
        },
        {
            link: "/lifeStyle",
            title: "라이프스타일",
            gnbMenu: [
                { link: "/outdoorPool", text: "야외수영장" },
                { link: "/fitness", text: "피트니스" },
                { link: "/walkingTrails", text: "산책로" },
                { link: "/jogging", text: "조깅코스" },
                { link: "/shopping", text: "쇼핑" },
            ],
        },
        {
            link: "/party",
            title: "웨딩 & 연회",
            gnbMenu: [
                { link: "/wedding", text: "웨딩" },
                { link: "/corporateParty", text: "기업연회" },
                { link: "/familyParty", text: "가족연회" },
            ],
        },
        {
            link: "/info",
            title: "고객센터",
            gnbMenu: [
                { link: "/info", text: "연락처" },
                { link: "/notice", text: "공지사항" },
                // { link: "/faq", text: "FAQ" },
                { link: "/board", text: "문의하기" },
                // {link : '/review', text : '리뷰'},
                { link: "/location", text: "오시는길" },
            ],
        },
    ];

    //const [gnbMenu,gnbMenuSet] = useState(gnbTitle);
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

    

    useEffect(() => {
      
        

        const header = document.querySelector("header");
        const gnb = document.querySelector(".gnb");
        const gnbBg = document.querySelector(".gnbbg");
        const gnb1Depth = document.querySelectorAll(".gnb > li");
        // 모바일메뉴
        const mBtn = document.querySelector(".m_btn");
        const mWrap = document.querySelector(".m_wrap");
        const depth1 = document.querySelectorAll(".m_gnb > li");

        if(header && gnb && gnbBg && gnb1Depth  && mBtn && mWrap && depth1){
        
            gnb.addEventListener("mouseover",function(){
                gnbBg.classList.add("on");
            });
            
            gnb.addEventListener("mouseleave",function(){
                gnbBg.classList.remove("on");
            });

            for(let i = 0; i < gnb1Depth.length; i++){
                gnb1Depth[i].addEventListener("mouseleave",function(){
                    gnb1Depth[i].classList.remove("on");
                });
                gnb1Depth[i].addEventListener("mouseover",function(){
                    gnb1Depth[i].classList.add("on");
                });
            }
            
            // 과거의 스크롤바 위치값
            let lastScrollTop = 0;
            
            window.addEventListener("scroll",function(){
                // 스크롤바의 위치값
                let scTop = window.scrollY;
            
                //스크롤바 내리면 헤더는 사라지고 스크롤바 올리면 헤더 나타남
                if(scTop == 0){
                    header.classList.add("active");
                    mWrap.style.paddingTop = 80 + "px"
                }
                if(scTop > lastScrollTop) {
                    header.classList.remove("active");
                    mWrap.style.paddingTop = 0 + "px"
                }
                else{
                    header.classList.add("active");
                    mWrap.style.paddingTop = 80 + "px"
                }
                lastScrollTop = scTop;
            });
            
            // 리사이즈 이벤트
            window.addEventListener("resize",function(){
                if(window.innerWidth > 1500){
                    mWrap.classList.remove("move");
                }
            });

            // 모바일 햄버거 버튼
            mBtn.addEventListener("click",function(){
              //  console.log("mBtn 클릭 실행");
                if(!mBtn.classList.contains("move")){
                    mWrap.classList.add("move");
                    mBtn.classList.add("move");
                }
                else{
                    mWrap.classList.remove("move");
                    mBtn.classList.remove("move");
                }
            });

            
            // 모바일 GNB
            for(let i = 0; i < depth1.length; i++){
                depth1[i].addEventListener("click",function(){
                    if(depth1[i].classList.contains("on")){
                        depth1[i].classList.remove("on");
                    }
                    else{
                        const depth1On = document.querySelectorAll(".m_gnb > li.on");
                        for(let j = 0; j < depth1On.length; j++){
                            depth1On[j].classList.remove("on");
                        }
                        depth1[i].classList.add("on");
                    }
                });
            }
        }

        
    },[]);



    return (
        <>
            <header className="active" >
                <div className="gnbbg" ></div>
                <div className="center">
                    <h1 className="logo">
                        <Link to="/">
                            <img src="/img/common/logo.png" alt="" />
                        </Link>
                    </h1>
                    <HeaderComp1 gnbMenu={gnbTitle} />
                    <HeaderComp2 user={user}/>
                    
                    {/* <!-- 모바일 햄버거 버튼 --> */}
                    <HeaderComp3/>
                </div>
            </header>
            {/* <!-- 모바일 메뉴 --> */}
            <div className="m_wrap" >
                <HeaderComp4 user={user}/>
                <HeaderComp5 gnbMenu={gnbTitle} />
               
            </div>
        </>
    );
};

export default Header;
