AOS.init();

// 메인페이지 Header
const mainHeader = document.querySelector(".main-header header");
const gnb = document.querySelector(".gnb");
const gnbBg = document.querySelector(".gnbbg");
const gnb1Depth = document.querySelectorAll(".gnb > li");
const mainCont1 = document.querySelector("main > .cont1");
const mainLogo = document.querySelector(".main-header .logo img");
// 모바일메뉴
const mBtn = document.querySelector(".m_btn");
const mWrap = document.querySelector(".m_wrap");
const depth1 = document.querySelectorAll(".m_gnb > li");


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
// 스크롤바의 위치값
let scTop = 0;
// 메인 비주얼 높이값
let mainCont1Height = 0;

// 스크롤 이벤트
window.addEventListener("scroll",function(){

    scTop = window.scrollY;
    mainCont1Height = mainCont1.offsetHeight-300;
    
    //스크롤바 내리면 헤더는 사라지고 스크롤바 올리면 헤더 나타남
    if(scTop == 0){
        mainHeader.classList.add("active");
        mWrap.style.paddingTop = 80 + "px"
        // mainLogo.setAttribute("src","../img/common/logo-w.png"); // 로고 흰색으로 변경
    }
    else if(scTop > lastScrollTop) {
        mainHeader.classList.remove("active");
        mWrap.style.paddingTop = 0 + "px"
        // mainLogo.setAttribute("src","../img/common/logo.png"); //로고가 갈색으로 변경됨
    }
    else if(scTop > mainCont1Height && scTop < lastScrollTop){
        mainHeader.classList.add("active");
        mainHeader.classList.add("on");
        mainLogo.setAttribute("src","../img/common/logo.png");
        mWrap.style.paddingTop = 80 + "px"
    }
    else if(scTop < mainCont1Height && scTop < lastScrollTop){
        mainHeader.classList.remove("on");
        mainHeader.classList.add("active");
        mainLogo.setAttribute("src","../img/common/logo-w.png");
        mWrap.style.paddingTop = 80 + "px"
    }

    lastScrollTop = scTop;
});


// 메인 헤더에 마우스를 올렸을 때
mainHeader.addEventListener("mouseover",function(){

    mainHeader.classList.add("on"); //메인 헤더에 배경색이 들어가고 
    mainLogo.setAttribute("src","../img/common/logo.png"); //로고가 갈색으로 변경됨

});

// 메인헤더에서 마우스를 내렸을 때
mainHeader.addEventListener("mouseleave",function(){

    // 스크롤이 메인 비주얼 안에 있고, 햄버거버튼에 move 클래스가 있다면 
    if(scTop < mainCont1Height && mBtn.classList.contains("move")){
        mainHeader.classList.add("on");  // 메인 헤더에 배경색 유지
        mainLogo.setAttribute("src","../img/common/logo.png"); // 로고 갈색으로 유지
    }
    // 스크롤이 메인 비주얼 안에 있고, 햄버거버튼에 move 클래스가 없다면
    else if(scTop < mainCont1Height && !mBtn.classList.contains("move")){
        mainHeader.classList.remove("on"); // 메인 헤더 배경이 투명해지고
        mainLogo.setAttribute("src","../img/common/logo-w.png"); // 로고 흰색으로 변경
    }

});


// 모바일 햄버거 버튼을 클릭했을 때
mBtn.addEventListener("click",function(){
    // 모바일 버튼에 move 클래스가 없을 때
    if(!mBtn.classList.contains("move")){
        mWrap.classList.add("move");    // 모바일GNB 가 열림
        mBtn.classList.add("move");     // 모바일 햄버거 버튼이 X자로 바뀜
    }
    else{ // 모바일 버튼에 move 클래스가 있을 때
        mWrap.classList.remove("move"); // 모바일GNB 가 사라짐
        mBtn.classList.remove("move");  // 모바일 햄버거 버튼이 원상복구됨
    }
});


// 창 사이즈가 1500 보다 커지면 모바일GNB는 안보이게 된다
window.addEventListener("resize",function(){
    console.log(window.innerWidth);
    if(window.innerWidth > 1500){
        mWrap.classList.remove("move");
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



// 스와이퍼 API 슬라이드
var mainSwiper = new Swiper(".cont1 .swiper", {
  spaceBetween: 30,
  loop: true,
  effect: "fade",
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});



