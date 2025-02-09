import { Link, useLocation } from 'react-router-dom';

const SubTitle = () => {
    const location = useLocation();

    const getTitleAndBreadcrumb = () => {
        if (location.pathname === '/restaurant') {
            return { title: "라연", breadcrumb: "라연" };
        } else if (location.pathname === '/restaurant2') {
            return { title: "콘티넨탈", breadcrumb: "콘티넨탈" };
        } else if (location.pathname === '/restaurant3') {
            return { title: "아리아께", breadcrumb: "아리아께" };
        } else if (location.pathname === '/restaurant4') {
            return { title: "팔선", breadcrumb: "팔선" };
        } else if (location.pathname === '/restaurant5') {
            return { title: "더 파크뷰", breadcrumb: "더 파크뷰" };
        } else if (location.pathname === '/lounge') {
            return { title: "더 라이브러리", breadcrumb: "더 라이브러리" };
        } else if (location.pathname === '/lounge2') {
            return { title: "더 디스틸러스 라이브러리", breadcrumb: "더 디스틸러스 라이브러리" };
        } else if (location.pathname === '/bakery') {
            return { title: "패스트리 부티크", breadcrumb: "패스트리 부티크" };
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
                <li><Link to="/dining">다이닝</Link></li>
                <li><Link to="#self">{breadcrumb}</Link></li>
            </ul>
        </div>
    );
};

export default SubTitle;
