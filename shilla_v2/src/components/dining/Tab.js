import { Link, useLocation } from 'react-router-dom';

const Tab = () => {
    const location = useLocation();

    return (
        <ul className="tab">
            <li className={`tab1 ${location.pathname === '/restaurant' ? 'on' : ''}`}>
                <Link to="/restaurant">라연</Link>
            </li>
            <li className={`tab2 ${location.pathname === '/restaurant2' ? 'on' : ''}`}>
                <Link to="/restaurant2">콘티넨탈</Link>
            </li>
            <li className={`tab3 ${location.pathname === '/restaurant3' ? 'on' : ''}`}>
                <Link to="/restaurant3">아리아께</Link>
            </li>
            <li className={`tab4 ${location.pathname === '/restaurant4' ? 'on' : ''}`}>
                <Link to="/restaurant4">팔선</Link>
            </li>
            <li className={`tab5 ${location.pathname === '/restaurant5' ? 'on' : ''}`}>
                <Link to="/restaurant5">더 파크뷰</Link>
            </li>
        </ul>
    )  
}

export default Tab;