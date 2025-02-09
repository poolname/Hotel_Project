import '../../scss/common.scss';
import '../../scss/reset.css';
import '../../scss/sub-list.scss';
import '../../scss/sub-detail.scss';
import '../../scss/sub-room.scss';
import { Link, useLocation } from 'react-router-dom';
import React, { useEffect } from 'react';

const Tab2 = () => {
    const location = useLocation()

    useEffect ( () => {
    }, [location])

    return (
        <ul className="tab">
            <li className={`tab1 ${location.pathname === '/executive' ? 'on' : ''}`}>
                <Link to="/executive">이그제큐티브 비즈니스 디럭스</Link>
            </li>
            <li className={`tab2 ${location.pathname === '/executive/execGrandDeluxe' ? 'on' : ''}`}>
                <Link to="/executive/execGrandDeluxe">이그제큐티브 그랜드 디럭스</Link>
            </li>
        </ul>
    )
}

export default Tab2;