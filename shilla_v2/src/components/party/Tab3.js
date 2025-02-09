import { Link, useLocation } from 'react-router-dom';

const Tab3 = () => {
    const location = useLocation();

    return (
        <ul className="tab">
            <li className={`tab1 ${location.pathname === '/familyParty' ? 'on' : ''}`}>
                <Link to="/familyParty">가족연회안내</Link>
            </li>
            <li className={`tab2 ${location.pathname === '/familyParty2' ? 'on' : ''}`}>
                <Link to="/familyParty2">중·소연회장</Link>
            </li>
        </ul>
    )  
}

export default Tab3;