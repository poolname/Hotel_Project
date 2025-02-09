const header = document.querySelector("header");
const gnb = document.querySelector(".gnb");
const gnbBg = document.querySelector(".gnbbg");
const gnb1Depth = document.querySelectorAll(".gnb > li");
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



// 모바일 햄버거 버튼
mBtn.addEventListener("click",function(){
    if(!mBtn.classList.contains("move")){
        mWrap.classList.add("move");
        mBtn.classList.add("move");
    }
    else{
        mWrap.classList.remove("move");
        mBtn.classList.remove("move");
    }
});
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