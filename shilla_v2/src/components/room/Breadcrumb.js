import React from 'react';
import { Link } from 'react-router-dom';

function Breadcrumb(props) {
    return (
        <div>
            <ul className="location">
                <li><Link to="/">홈</Link></li>
                <li><Link to="/wedding">웨딩 & 연회</Link></li>
            </ul>
        </div>
    );
}

export default Breadcrumb;