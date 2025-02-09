import React from "react";
import { Link } from "react-router-dom";
import '../../scss/welcome.scss'

const Welcome = () => {
    return  <div className="welcome-wrap">
                <div className="center">
                    <form id="shilla-login" action="#" method="post">
                        <div className="login-wrap" id="login-wrap">
                            <h2 className="welcome">가 입 완 료</h2>
                            <div className="hello">
                                <p>호텔신라의 회원이 되신 것을 축하드립니다.</p>
                                <p>고객님의 편안한 휴식에 호텔신라가 함께 하겠습니다.</p>
                            </div>

                            <div className="btn-wrap btn-200">
                                <Link to="/" className="btn btn-01">홈으로 가기</Link>
                                <Link to="/login" className="btn btn-02">로그인 하기</Link>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
};

export default Welcome;
