import '../../scss/common.scss';
import '../../scss/reset.css';
import '../../scss/sub-list.scss';
import '../../scss/sub-detail.scss';
import '../../scss/sub-room.scss';
import { Link, useLocation } from 'react-router-dom';
import React, { useEffect } from 'react';

const Tab = () => {
    const location = useLocation()

    useEffect ( () => {
    }, [location])

    return (
        <ul className="tab">
            <li className={`tab1 ${location.pathname === '/suite' ? 'on' : ''}`}>
                <Link to="/suite">수페리어 스위트</Link>
            </li>
            <li className={`tab2 ${location.pathname === '/suite/korean' ? 'on' : ''}`}>
                <Link to="/suite/korean">코리안 스위트</Link>
            </li>
            <li className={`tab3 ${location.pathname === '/suite/corner' ? 'on' : ''}`}>
                <Link to="/suite/corner">코너 스위트</Link>
            </li>
            <li className={`tab4 ${location.pathname === '/suite/premier' ? 'on' : ''}`}>
                <Link to="/suite/premier">프리미어 스위트</Link>
            </li>
            <li className={`tab5 ${location.pathname === '/suite/royal' ? 'on' : ''}`}>
                <Link to="/suite/royal">로열 스위트</Link>
            </li>
            <li className={`tab6 ${location.pathname === '/suite/shilla' ? 'on' : ''}`}>
                <Link to="/suite/shilla">신라 스위트</Link>
            </li>
            <li className={`tab7 ${location.pathname === '/suite/presidential' ? 'on' : ''}`}>
                <Link to="/suite/presidential">프레지덴셜 스위트</Link>
            </li>
        </ul>
    )
}

export default Tab;