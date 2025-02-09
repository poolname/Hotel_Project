import { Link, useLocation } from 'react-router-dom';

const Tab2 = () => {
    const location = useLocation();

    return (

        <ul className="tab">
            <li className={`tab1 ${location.pathname === '/fitness' ? 'on' : ''}`}>
                <Link to="/fitness">실내 수영장</Link>
            </li>
            <li className={`tab2 ${location.pathname === '/fitness2' ? 'on' : ''}`}>
                <Link to="/fitness2">실내 체육관</Link>
            </li>
            <li className={`tab3 ${location.pathname === '/fitness3' ? 'on' : ''}`}>
                <Link to="/fitness3">실내 골프장</Link>
            </li>
            <li className={`tab4 ${location.pathname === '/fitness4' ? 'on' : ''}`}>
                <Link to="/fitness4">실내 사우나</Link>
            </li>
            

        </ul>
    )  
}

export default Tab2;