import { Link, useLocation } from 'react-router-dom';

const SubTitle = () => {
    const location = useLocation();

    const getTitleAndBreadcrumb = () => {
        if (location.pathname === '/outdoorPool') {
            return { title: "어번 아일랜드", breadcrumb: "어번 아일랜드" };
        } else if (location.pathname === '/outdoorPool2') {
            return { title: "카바나", breadcrumb: "카바나" };
        } else if (location.pathname === '/fitness') {
            return { title: "실내 수영장", breadcrumb: "실내 수영장" };
        } else if (location.pathname === '/fitness2') {
            return { title: "실내 체육관", breadcrumb: "실내 체육관" };
        } else if (location.pathname === '/fitness3') {
            return { title: "실내 골프장", breadcrumb: "실내 골프장" };
        } else if (location.pathname === '/fitness4') {
            return { title: "실내 사우나", breadcrumb: "실내 사우나" };
        } else if (location.pathname === '/walkingTrails') {
            return { title: "산책로", breadcrumb: "산책로" };
        } else if (location.pathname === '/jogging') {
            return { title: "조깅코스", breadcrumb: "조깅코스" };
        } else if (location.pathname === '/shopping') {
            return { title: "아케이드", breadcrumb: "아케이드" };
        } else if (location.pathname === '/shopping2') {
            return { title: "신라면세점", breadcrumb: "신라면세점" };
        } else {
            return { title: "페이지 제목", breadcrumb: "현재 위치" }; 
        } 
    };

    const { title, breadcrumb } = getTitleAndBreadcrumb();

    return (
        <div className="sub-title">
            <h2>{title}</h2>
            <ul className="location">
                <li><Link to="/">홈</Link></li>
                <li><Link to="/lifeStyle">라이프스타일</Link></li>
                <li><Link to="#self">{breadcrumb}</Link></li>
            </ul>
        </div>
    );
};

export default SubTitle;
