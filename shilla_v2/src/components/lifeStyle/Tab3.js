import { Link, useLocation } from 'react-router-dom';

const Tab3 = () => {
    const location = useLocation();

    return (

        <ul className="tab">
            <li className={`tab1 ${location.pathname === '/shopping' ? 'on' : ''}`}>
                <Link to="/shopping">아케이드</Link>
            </li>
            <li className={`tab2 ${location.pathname === '/shopping2' ? 'on' : ''}`}>
                <Link to="/shopping2">신라면세점</Link>
            </li>
        </ul>
    )  
}

export default Tab3;