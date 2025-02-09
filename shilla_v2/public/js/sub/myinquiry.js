const inquiryTitle = document.querySelectorAll(".inquiry-title");// 내 문의내역 제목
const inquiryContent = document.querySelectorAll(".inquiry-content"); // 내 문의내역 본문

// 내 문의내역 아코디언
for(let i = 0; i < inquiryTitle.length; i++){
    inquiryTitle[i].addEventListener("click",function(){
        for(let j = 0; j < inquiryTitle.length; j++){
            inquiryContent[j].classList.remove("on")
        }

        if(!inquiryTitle[i].classList.contains("on")){
            inquiryContent[i].classList.add("on");
        }
        else {
            inquiryContent[i].classList.remove("on");
        }
    });

}
