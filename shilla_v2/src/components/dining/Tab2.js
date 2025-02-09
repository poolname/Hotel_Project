import { Link, useLocation } from 'react-router-dom';

const Tab2 = () => {
    const location = useLocation();

    return (
        <ul className="tab">
            <li className={`tab1 ${location.pathname === '/lounge' ? 'on' : ''}`}>
                <Link to="/lounge">더 라이브러리</Link>
            </li>
            <li className={`tab2 ${location.pathname === '/lounge2' ? 'on' : ''}`}>
                <Link to="/lounge2">더 디스틸러스 라이브러리</Link>
            </li>
        </ul>
    )  
}

export default Tab2;