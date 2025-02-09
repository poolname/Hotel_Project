import {Link} from 'react-router-dom'
import '../../scss/reset.css'
import '../../scss/common.scss'
import '../../scss/main.scss'
import { useEffect, useState } from 'react'
import $ from 'jquery';
import MainCont5Popup from './MainCont5Popup'

const MainCont5 = () => {

    const MainCont5Data = [
        {
            delay : "0",
            link : "#self",
            title : "신라호텔 지점 찾기 팝업 열림",
            target : '',
            dataLybtn : "pop-hotel-box",
            iClass : "fa-solid fa-hotel",
            h3Text : '신라 지점찾기',
            pText :"국내외 신라호텔, 신라모노그램, 신라스테이 지점을 검색하고 이용해보세요"
        },
        {
            delay : "150",
            link : "https://www.shillahotels.com/membership/offers/shillaS/memShillaS.do",
            title : "신라S 멤버십 안내 페이지 새창 열기",
            target : '_blank',
            dataLybtn : null,
            iClass : "fa-brands fa-sketch",
            h3Text : '신라에스 멤버십',
            pText :"서울 &middot; 제주신라호텔에서 자유롭게 이용 가능한 통합 유료 멤버십, 신라 S"
        },
        {
            delay : "300",
            link : "https://www.shillahotels.com/membership/offers/benefits/memBenefitsIndex.do",
            title : "신라리워즈 회원특전 페이지 새창 열기",
            target : '_blank',
            dataLybtn : null,
            iClass : "fa-solid fa-gifts",
            h3Text : '신라 리워즈',
            pText :"신라 호텔 계열 및 제휴 호텔에서 포인트 혜택 및 특전을 제공하는 통합 멤버십 서비스"
        },
    ]



    useEffect(() => {
        $(function () {
            // 레이어 팝업 닫기
            $(".lypop_close").on("click", function () {
                $(".lypop").hide();
            });
    
            // data-lybtn을 가진 요소를 클릭했을 때
            $("[data-lybtn]").each(function () {
                var lypop = $(this).attr("data-lybtn");
    
                // lypop 값이 존재하는 경우에만 동작하도록 수정
                if (lypop) {
                    $(this).click(function () {
                        $(".lypop").hide();
                        // data-lyopen 속성 값을 가진 요소를 찾고 보이게 함
                        $("[data-lyopen='" + lypop + "']").show().focus();
                    });
                } else {
                    console.error("data-lybtn 속성이 비어있습니다.");
                }
            });
    
            // data-lyclose을 가진 요소 클릭 시 처리
            $("[data-lyclose]").click(function () {
                var lypopClose = $(this).attr("data-lyclose");
                $("[data-lyopen='" + lypopClose + "']").hide();
                $("[data-lybtn='" + lypopClose + "']").focus();
            });
        });
    }, []);

    



    return (
        <>
            {/* <!-- s:// cont5. 멤버십 안내 --> */}
            <section className="cont5">
                <div className="center">
                    <div className="title_box">
                        <h2 className="cont-tit">신라리워즈</h2>
                        <p className="en-tit">MEMBERSHIP</p>
                    </div>
                    <ul className="benefit">
                        {
                            MainCont5Data.map((item,index)=>{
                                return  <li key={index} className="list" data-aos="fade-up" data-aos-delay={item.delay}>
                                            <Link to={item.link} title={item.title}  target={item.target} data-lybtn={item.dataLybtn}>
                                                <i className={item.iClass}></i>
                                                <h3>{item.h3Text}</h3>
                                                <p>{item.pText}</p>
                                            </Link>
                                        </li>
                            })
                        }
                    </ul>
                </div>
            </section>
            {/* <!-- e:// cont5. 멤버십 안내 --> */}
            {/* <!-- 지점 찾기 팝업 --> */}
            <MainCont5Popup/>
        </>
    )
}

export default MainCont5
