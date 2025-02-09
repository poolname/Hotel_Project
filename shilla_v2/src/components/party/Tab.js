import { Link, useLocation } from 'react-router-dom';

const Tab = () => {
    const location = useLocation();

    return (
        <ul className="tab">
            <li className={`tab1 ${location.pathname === '/wedding' ? 'on' : ''}`}>
                <Link to="/wedding">대연회장</Link>
            </li>
            <li className={`tab2 ${location.pathname === '/wedding2' ? 'on' : ''}`}>
                <Link to="/wedding2">영빈관</Link>
            </li>
            <li className={`tab3 ${location.pathname === '/wedding3' ? 'on' : ''}`}>
                <Link to="/wedding3">웨딩스타일</Link>
            </li>
        </ul>
    )  
}

export default Tab;