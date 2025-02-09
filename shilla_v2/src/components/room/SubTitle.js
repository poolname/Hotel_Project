import { Link, useLocation } from 'react-router-dom';


const SubTitle = () => {
    const location = useLocation()
    
    const getSubTitle = () => {
        if (location.pathname == "/standard") {
            return { title: "디럭스", breadcrumb: "디럭스"}
        } else if (location.pathname == "/standard/businessDeluxe") {
            return { title: "비즈니스 디럭스", breadcrumb: "비즈니스 디럭스"}
        } else if (location.pathname == "/standard/barrierFreeDeluxe") {
            return { title: "배리어프리 비즈니스 디럭스", breadcrumb: "배리어프리 비즈니스 디럭스"}
        } else if (location.pathname == "/standard/grandCornerDeluxe") {
            return { title: "그랜드 코너 디럭스", breadcrumb: "그랜드 코너 디럭스"}

        } else if (location.pathname === '/executive') {
            return { title: "이그제큐티브 비즈니스 디럭스", breadcrumb: "이그제큐티브 비즈니스 디럭스" };
        } else if (location.pathname === '/executive/execGrandDeluxe') {
            return { title: "이그제큐티브 그랜드 디럭스", breadcrumb: "이그제큐티브 그랜드 디럭스" };
        
        } else if (location.pathname === '/suite') {
            return { title: "수페리어 스위트", breadcrumb: "수페리어 스위트" };
        } else if (location.pathname === '/suite/korean') {
            return { title: "코리안 스위트", breadcrumb: "코리안 스위트" };
        } else if (location.pathname === '/suite/corner') {
            return { title: "코너 스위트", breadcrumb: "코너 스위트" };
        } else if (location.pathname === '/suite/premier') {
            return { title: "프리미어 스위트", breadcrumb: "프리미어 스위트" };
        } else if (location.pathname === '/suite/royal') {
            return { title: "로열 스위트", breadcrumb: "로열 스위트" };
        } else if (location.pathname === '/suite/shilla') {
            return { title: "신라 스위트", breadcrumb: "신라 스위트" };
        } else if (location.pathname === '/suite/presidential') {
            return { title: "프레지덴셜 스위트", breadcrumb: "프레지덴셜 스위트" };
        }

          else if (location.pathname === '/executiveLounge') {
            return { title: "더 이그제큐티브 라운지", breadcrumb: "더 이그제큐티브 라운지" };
        }
    }

    
    
    const { title, breadcrumb } = getSubTitle()
    
    return (
        <div className="sub-title">
            <h2>{title}</h2>
            <ul className="location">
                <li><Link to="/">홈</Link></li>
                <li><Link to="/room">객실</Link></li>
                <li><Link to="#self">{breadcrumb}</Link></li>
            </ul>
        </div>
    );
}

export default SubTitle;