import { Link, useLocation } from 'react-router-dom';

const Tab2 = () => {
    const location = useLocation();

    return (
        <ul className="tab">
            <li className={`tab1 ${location.pathname === '/corporateParty' ? 'on' : ''}`}>
                <Link to="/corporateParty">대연회장</Link>
            </li>
            <li className={`tab2 ${location.pathname === '/corporateParty2' ? 'on' : ''}`}>
                <Link to="/corporateParty2">영빈관</Link>
            </li>
            <li className={`tab3 ${location.pathname === '/corporateParty3' ? 'on' : ''}`}>
                <Link to="/corporateParty3">중·소연회장</Link>
            </li>
        </ul>
    )  
}

export default Tab2;