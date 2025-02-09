import { useEffect, useState } from "react";
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
    const navigate = useNavigate()

    const header = document.querySelector("header");
    const gnb = document.querySelector(".gnb");
    const gnbBg = document.querySelector(".gnbbg");
    const gnb1Depth = document.querySelectorAll(".gnb > li");
    // 모바일메뉴
    const mBtn = document.querySelector(".m_btn");
    const mWrap = document.querySelector(".m_wrap");
    const depth1 = document.querySelectorAll(".m_gnb > li");

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

    const [gnbMenu,gnbMenuSet] = useState(gnbTitle);

    const [user,setUser] = useState(null)

    // 함수 부분 시작 -----------------------------------------------------------------------------------------------------------------------

    function logout() {
        sessionStorage.clear() //한번에 다 지우는 방법. removeItem으로 하면 하나씩 지울 수도 있다.
        alert(`${user.name}님, 로그아웃되었습니다`);
        navigate('/login');
    }

    // 스크롤 이벤트 관련 함수
    // 과거의 스크롤바 위치값
    let lastScrollTop = 0;
    function scrollHeader() {
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
    }

    // 화면 사이즈가 1500px보다 작아지면 모바일gnb가 닫힌다.
    function resizeGo() {
        if(window.innerWidth > 1500){
            mWrap.classList.remove("move");
        }
    }

    // 함수 부분 끝 -----------------------------------------------------------------------------------------------------------------------

    useEffect(()=>{

        // 로그인 여부 확인
        const id = sessionStorage.getItem("id");
        const name = sessionStorage.getItem("name");
        const grade = sessionStorage.getItem("grade");

        if(id){
            setUser({'id':id,"name": name,"grade":grade})
        }else{
            setUser(null)
        }


        if(header && gnb && gnbBg && gnb1Depth && mBtn && mWrap && depth1){
            // gnb에 마우스를 올렸을 때 동작
            gnb.addEventListener("mouseover",()=>{
                console.log("gnb mouseover 진입");
                
                gnbBg.classList.add("on");
            });
            
            // gnb에서 마우스를 내렸을 때 동작
            gnb.addEventListener("mouseleave",()=>{
                gnbBg.classList.remove("on");
            });
            // gnb menu의 각 부분에 마우스 올리고 내렸을 때
            for(let i = 0; i < gnb1Depth.length; i++){
                gnb1Depth[i].addEventListener("mouseleave",function(){
                    gnb1Depth.current[i].classList.remove("on");
                });
                gnb1Depth[i].addEventListener("mouseover",function(){
                    gnb1Depth.current[i].classList.add("on");
                });
            }

            // 스크롤 했을 때 header 변경 함수 호출
            window.addEventListener("scroll", scrollHeader);
            // 창 크기 1500 이하일 때 모바일 메뉴 닫기 함수 호출
            window.addEventListener("resize", resizeGo);

            // 모바일 햄버거 버튼
            mBtn.addEventListener("click",()=>{
                // console.log('모바일버튼 클릭 진입');
                
                if(!mBtn.classList.contains("move")){
                    // console.log('move 없을때');
                    mWrap.classList.add("move");
                    mBtn.classList.add("move");
                    // console.log(mBtn.classList)
                }
                else{
                    // console.log('move 있을때');
                    mWrap.classList.remove("move");
                    mBtn.classList.remove("move");
                    // console.log(mBtn.classList)

                }
            });
            
            
            // console.log(depth1.length);
            
            // 모바일 GNB
            for(let i = 0; i < depth1.length; i++){
                depth1[i].addEventListener("click",()=>{
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


        // 다른 페이지로 이동할 때 이벤트를 없애준다.
        // return()=>{
        //     // 스크롤 했을 때 header 변경 함수 호출
        //     window.removeEventListener("scroll", scrollHeader);
        //     // 창 크기 1500 이하일 때 모바일 메뉴 닫기 함수 호출
        //     window.removeEventListener("resize",resizeGo);
        // }
    },[])

    // if(!user){
    //     return (
    //         <>
    //             <header className="active" >
    //                 <div className="gnbbg" ></div>
    //                 <div className="center">
    //                     <h1 className="logo">
    //                         <Link to="/">
    //                             <img src="/img/common/logo.png" alt="" />
    //                         </Link>
    //                     </h1>
    //                     <HeaderComp1 gnbMenu={gnbMenu}/>
    //                     <HeaderComp2 user={user}/>
                        
    //                     {/* <!-- 모바일 햄버거 버튼 --> */}
    //                     <HeaderComp3/>
    //                 </div>
    //             </header>
    //             {/* <!-- 모바일 메뉴 --> */}
    //             <div className="m_wrap" >
    //                 <HeaderComp4Login user={user}/>
    //                 <HeaderComp5 gnbMenu={gnbMenu}/>
    //             </div>
    //         </>
    //     )
    // }


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
                    <HeaderComp1 gnbMenu={gnbMenu}/>
                    <HeaderComp2 user={user}/>
                    
                    {/* <!-- 모바일 햄버거 버튼 --> */}
                    <HeaderComp3/>
                </div>
            </header>
            {/* <!-- 모바일 메뉴 --> */}
            <div className="m_wrap" >
                <HeaderComp4 user={user}/>
                <HeaderComp5 gnbMenu={gnbMenu}/>
            </div>
        </>
    );
};

export default Header;
