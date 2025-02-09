import { Link, useLocation } from 'react-router-dom';

const Tab = () => {
    const location = useLocation();

    return (
        <ul className="tab">
            <li className={`tab1 ${location.pathname === '/outdoorPool' ? 'on' : ''}`}>
                <Link to="/outdoorPool">어번 아일랜드</Link>
            </li>
            <li className={`tab2 ${location.pathname === '/outdoorPool2' ? 'on' : ''}`}>
                <Link to="/outdoorPool2">카바나</Link>
            </li>
            
        </ul>
    )  
}

export default Tab;