import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const MyPageTab = () => {
    const myPageTabTit = [
        {link : "/myPage" , title : "회원정보"},
        {link : "/myPage/myInfoChg" , title : "회원정보 수정"},
        {link : "/myPage/myReservation" , title : "예약내역 확인"},
        {link : "/myPage/myInquiry" , title : "문의내역 확인"},
    ]

    // 현재 위치 정보를 기반으로 활성화된 메뉴를 추적
    const location = useLocation();
    const [activeIndex, setActiveIndex] = useState(() => {
        const initialIndex = myPageTabTit.findIndex(item => item.link === location.pathname);
        return initialIndex !== -1 ? initialIndex : 0; // -1일 경우 0을 반환
    });

    useEffect(() => {
        // 페이지 이동 시, activeIndex를 location.pathname에 맞게 업데이트
        const currentIndex = myPageTabTit.findIndex(item => item.link === location.pathname);
        console.log("currentIndex", currentIndex);

        setActiveIndex(currentIndex !== -1 ? currentIndex : 0); // -1일 경우 0을 설정
    }, [location, myPageTabTit]);
    
    return (
      <ul className="tab tab-long">
          {myPageTabTit.map((item, index) => (
              <li key={index} className={index === activeIndex ? "on" : ""}>
                  <Link to={item.link} >{item.title}</Link>
              </li>
          ))}
      </ul>
    )
}

export default MyPageTab
