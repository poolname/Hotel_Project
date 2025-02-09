import { Link, useLocation } from 'react-router-dom';

const SubTitle = () => {
    const location = useLocation();

    const getTitleAndBreadcrumb = () => {
        if (location.pathname === '/wedding') {
            return { title: "대연회장", breadcrumb: "대연회장" };
        } else if (location.pathname === '/wedding2') {
            return { title: "영빈관", breadcrumb: "영빈관" };
        } else if (location.pathname === '/wedding3') {
            return { title: "대연회장", breadcrumb: "웨딩스타일" };
        } else if (location.pathname === '/corporateParty') {
            return { title: "대연회장", breadcrumb: "대연회장" };
        } else if (location.pathname === '/corporateParty2') {
            return { title: "영빈관", breadcrumb: "영빈관" };
        } else if (location.pathname === '/corporateParty3') {
            return { title: "중·소연회장", breadcrumb: "중·소연회장" };
        } else if (location.pathname === '/familyParty') {
            return { title: "가족연회안내", breadcrumb: "가족연회안내" };
        } else if (location.pathname === '/familyParty2') {
            return { title: "중·소연회장", breadcrumb: "중·소연회장" };
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
                <li><Link to="/party">웨딩 & 연회</Link></li>
                <li><Link to="#self">{breadcrumb}</Link></li>
            </ul>
        </div>
    );
};

export default SubTitle;
