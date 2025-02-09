import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../common/Header";
import Footer from "../common/Footer";
import { title, commentid } from "./Finddata";
import "../../scss/findid.scss";
const Findid = () => {
    const [click, setclick] = useState(false);
    const handleclick = () => {
        setclick(true);
    };
    return (
        <>
            <Header />
            <div className="container">
                <div className="center">
                    <div className="depth3-tab-wrap find">
                        <ul className="tab">
                            <li className="tab1 on">
                                <span>아이디 찾기</span>
                            </li>
                            <li className="tab2">
                                <Link to="/findpw">비밀번호 찾기</Link>
                            </li>
                        </ul>

                        {!click ? (
                            <div className="lost-info" id="lost-info">
                                <h2 className="lost-id">{title[0]}</h2>
                                <div className="comment">
                                    {commentid.map((des, i) => (
                                        <p key={i}>{des}</p>
                                    ))}
                                </div>
                                <button
                                    type="button"
                                    className={
                                        click ? "id-chk" : "indentity-confirm"
                                    }
                                    onClick={handleclick}
                                >
                                    본인인증
                                </button>
                            </div>
                        ) : (
                            <div className="id-chk" id="id-chk">
                                <h2 className="my-id">아이디 확인</h2>
                                <div className="comment">
                                    <p>고객님의 아이디는</p>
                                    <span>endorp*****</span>
                                    <p>입니다.</p>
                                </div>
                                <Link to="/login">
                                    <input
                                        type="button"
                                        id="login"
                                        value="로그인 하기"
                                    />
                                </Link>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Findid;
