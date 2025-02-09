import React from "react";
import { useNavigate } from 'react-router-dom';
import HeaderLoginGroup from './HeaderLoginGroup'

const HeaderComp4 = ({user}) => {

    const navigate = useNavigate()

    function logout() {
        sessionStorage.clear() //한번에 다 지우는 방법. removeItem으로 하면 하나씩 지울 수도 있다.
        alert(`${user.name}님, 로그아웃되었습니다`);
        navigate('/login');
    }


    return (
        <>
            <div className="m_top">
                <HeaderLoginGroup user={user} logout={logout}/>
            </div>
        </>
    );
};

export default HeaderComp4;
