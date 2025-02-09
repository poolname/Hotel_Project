import React from "react";
import { Link } from 'react-router-dom';

    const LoginGroup = ({user,logout}) => {
        if(user && user.grade == 1){
            return  <div className="btn-wrap on admin">
                        <Link to="/admin/dashboard" className="user-name-btn" title="관리자페이지로 이동">
                            <i className="fa-regular fa-user"></i>
                            <p>관리자<span>님</span></p>
                        </Link>
                        <button className="logout-btn" onClick={logout}>로그아웃
                            <i className="fa-solid fa-arrow-right-from-bracket"></i>
                        </button>
                    </div>
        }
        else if(user){
            return  <div className="btn-wrap on login">
                        <Link to="/mypage" className="user-name-btn" title="마이페이지로 이동">
                            <i className="fa-regular fa-user"></i>
                            <p>{user.name}<span>님</span></p>
                        </Link>
                        <button className="logout-btn" onClick={logout}>로그아웃
                            <i className="fa-solid fa-arrow-right-from-bracket"></i>
                        </button>
                    </div>
        }
        else {
            return  <div className="btn-wrap on">
                        <Link to="/join" className="join-btn"><i className="fa-solid fa-user-plus"></i>회원가입</Link>
                        <Link to="/login" className="login-btn">로그인<i className="fa-solid fa-arrow-right-to-bracket"></i> </Link>
                    </div>
        }
    }

export default LoginGroup;
