import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const AdminTabMenu = () => {
    const tabMenu = [
        { text: '대시보드', link: '/admin/dashboard' },
        { text: '객실관리', link: '/admin/room' },
        { text: '회원관리', link: '/admin/member' },
        { text: '예약관리', link: '/admin/reservation' },
        { text: '고객센터:공지사항', link: '/admin/notice' },
        { text: '고객센터:문의게시판', link: '/admin/cs' },
        { text: '매출현황', link: '/admin/sales' }
    ];

    const location = useLocation();

    // 경로가 정확히 일치하거나 해당 경로의 하위 경로인지를 판단하는 함수
    const getActiveIndex = (path) => {
        return tabMenu.findIndex(item => {
            // path가 정확히 일치하거나 해당 경로로 시작하는 경우 (하위 경로 포함)
            if (path === item.link) return true;  // 정확히 일치하는 경로일 경우
            // `path`가 `item.link`로 시작하고, 뒤에 추가 경로가 있으면 하위 경로로 처리
            return path.startsWith(item.link + "/");
        });
    };

    // useState로 페이지 로드 시 초기 활성화된 탭 설정
    const [activeIndex, setActiveIndex] = useState(() => {
        return getActiveIndex(location.pathname);
    });

    // location이 변경될 때마다 activeIndex 업데이트
    useEffect(() => {

        document.title = "신라호텔:관리자"

        setActiveIndex(getActiveIndex(location.pathname));
    }, [location]); // location이 변경될 때마다 activeIndex를 업데이트

    return (
        <div className="admin-tab">
            <div className="tab-title">
                관리자 메뉴
                <i className="fa-solid fa-gear"></i>
            </div>
            <ul className="tab-menu">
                {tabMenu.map((item, index) => (
                    <li key={index} className={index === activeIndex ? "on" : ""}>
                        <Link to={item.link}>{item.text}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default AdminTabMenu;
