// 3depth tab 공통 변수
const depth3Tab = document.querySelector(".depth3-tab-wrap > .tab");
const tabs = document.querySelectorAll(".depth3-tab-wrap .tab > li");
const tabContents = document.querySelectorAll(".depth3-tab-wrap .tab-cont");

for (let i = 0; i < tabs.length; i++) {
    tabs[i].addEventListener("click", function () {
        for (let j = 0; j < tabs.length; j++) {
            tabs[j].classList.remove("on");
            tabContents[j].classList.remove("on");
        }
        tabs[i].classList.add("on");
        tabContents[i].classList.add("on");
    });
}

// DEPTH3 스와이퍼 슬라이드 갤러리
var swiper = new Swiper(".mySwiper", {
    loop: true,
    spaceBetween: 10,
    slidesPerView: 2,
    freeMode: true,
    watchSlidesProgress: true,
    breakpoints: {
        1240: {
            slidesPerView: 4,
        },
    }
});
var swiper2 = new Swiper(".mySwiper2", {
    loop: true,
    spaceBetween: 10,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    thumbs: {
        swiper: swiper,
    },
});

// 제이쿼리
$(function () {
    // 레이어 팝업
    $(".lypop_close").on("click", function () {
        $(".lypop").hide();
    });

    $("[data-lybtn]").each(function () {
        var lypop = $(this).attr("data-lybtn");
        $(this).click(function () {
            $(".lypop").hide();
            $("[data-lyopen =" + lypop + "]")
                .show()
                .focus();
        });
        $("[data-lyclose]").click(function () {
            var lypopClose = $(this).attr("data-lyclose");
            $("[data-lyopen =" + lypop + "]").hide();
            $("[data-lybtn =" + lypopClose + "]").focus();
        });
    });

    // 플로팅 메뉴
    const topBtn = $(".floating-menu > .top-btn");
    // top버튼은 스크롤 위치값이 1000 이상인 곳에서만 나타난다
    $(window).on("scroll", function () {
        let scTop = window.scrollY;

        if (scTop > 1000) {
            topBtn.addClass("on");
        } else {
            topBtn.removeClass("on");
        }
    });

    // 탑 버튼을 누르면 부드럽게 최상단으로 이동
    topBtn.on("click", function (e) {
        e.preventDefault();

        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    });

    // daterangepicker - 메인
    $('input[name="daterange"]').daterangepicker(
        {
            minYear: 1000,
            maxYear: 9999,
            locale: {
                format: "YYYY.MM.DD",
                separator: " - ",
                applyLabel: "확인",
                cancelLabel: "취소",
                fromLabel: "From",
                toLabel: "To",
                customRangeLabel: "Custom",
                weekLabel: "주",
                daysOfWeek: ["일", "월", "화", "수", "목", "금", "토"],
                monthNames: [
                    "1월",
                    "2월",
                    "3월",
                    "4월",
                    "5월",
                    "6월",
                    "7월",
                    "8월",
                    "9월",
                    "10월",
                    "11월",
                    "12월",
                ],
                firstDay: 1,
            },
            drops: "up", // up, down, auto 중 선택
        },
        function (start, end, label) {
            console.log(
                "New daterange selected:" +
                    start.format("YYYY.MM.DD") +
                    " - " +
                    end.format("YYYY.MM.DD") +
                    "(predefined range:" +
                    label +
                    ")"
            );
        }
    );
    // daterangepicker - 예약
    $('input[name="daterange2"]').daterangepicker(
        {
            minYear: 1000,
            maxYear: 9999,
            locale: {
                format: "YYYY.MM.DD",
                separator: " - ",
                applyLabel: "확인",
                cancelLabel: "취소",
                fromLabel: "From",
                toLabel: "To",
                customRangeLabel: "Custom",
                weekLabel: "주",
                daysOfWeek: ["일", "월", "화", "수", "목", "금", "토"],
                monthNames: [
                    "1월",
                    "2월",
                    "3월",
                    "4월",
                    "5월",
                    "6월",
                    "7월",
                    "8월",
                    "9월",
                    "10월",
                    "11월",
                    "12월",
                ],
                firstDay: 1,
            },
            drops: "down", // up, down, auto 중 선택
        },
        function (start, end, label) {
            console.log(
                "New daterange selected:" +
                    start.format("YYYY.MM.DD") +
                    " - " +
                    end.format("YYYY.MM.DD") +
                    "(predefined range:" +
                    label +
                    ")"
            );
        }
    );

    // reservation-popup
    // 예약의 .room-wrap 클릭하면 룸 수량, 인원수 입력하는 팝업이 나오고, 한 번 더 누르면 닫힌다
    $(".reservation-wrap .room-wrap").on("click", function () {
        if (!$(".reservation-popup").hasClass("on")) {
            $(".reservation-popup").addClass("on");
        } else {
            $(".reservation-popup").removeClass("on");
        }
    });

    // 예약 수량 팝업의 X 버튼 누르면 팝업 닫힘
    $(".reservation-wrap .close-btn").on("click", function () {
        $(".reservation-popup").removeClass("on");
    });


    // 인원 숫자 올리고 내리기
    const adultDownBtn = $(".count-wrap.adult .btn-down"); //성인 숫자 올리기 버튼
    const adultUpBtn = $(".count-wrap.adult .btn-up"); // 성인 숫자 내리기 버튼
    let adultNum = $(".count-wrap.adult .num"); // 성인 숫자 출력하는 태그
    let adultNumVal = parseInt($(".count-wrap.adult .num").text()); // 성인 숫자 
    const childrenDownBtn = $(".count-wrap.children .btn-down"); // 어린이 숫자 올리기 버튼
    const childrenUpBtn = $(".count-wrap.children .btn-up"); // 어린이 숫자 내리기 버튼
    let childrenNum = $(".count-wrap.children .num"); // 어린이 숫자 출력하는 태그
    let childrenNumVal = parseInt($(".count-wrap.children .num").text()); // 어린이 숫자 

    adultDownBtn.click(function(){
        if(adultNumVal > 0){
            adultNumVal--;
        }
        adultNum.text(adultNumVal);
    });
    adultUpBtn.click(function(){
        if(adultNumVal < 4){
            adultNumVal++;
        }
        adultNum.text(adultNumVal);
    });

    childrenDownBtn.click(function(){
        if(childrenNumVal > 0){
            childrenNumVal--;
        }
        childrenNum.text(childrenNumVal);
    });
    childrenUpBtn.click(function(){
        if(childrenNumVal < 4){
            childrenNumVal++;
        }
        childrenNum.text(childrenNumVal);
    });

});
