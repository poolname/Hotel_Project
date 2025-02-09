import React, { useEffect } from "react";
import { Link } from "react-router-dom";


const FloatingMenu = () => {

    useEffect(()=>{
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
    })

    
    return (
        <article className="floating-menu">
            <div className="menu">
                <Link to="/reserve" className="circle-btn" title="예약 페이지로 이동">예약</Link>
                <Link to="/board" className="circle-btn" title="고객문의 게시판으로 이동">문의</Link>
            </div>
            <Link to="#" className="top-btn" title="최상단으로 이동">TOP</Link>
        </article>
    );
};

export default FloatingMenu;
