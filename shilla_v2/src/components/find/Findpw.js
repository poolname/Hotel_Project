import React, { useEffect, useState } from "react";
import Header from "../common/Header";
import Footer from "../common/Footer";
import { title, commentpw } from "./Finddata";
import "../../scss/findpw.scss";
import { Form, Link, Navigate, useNavigate } from "react-router-dom";
import Findpwchk from "./Findpwchk";
import axios from "axios";
import Findpw_confirm from "./Findpw_confirm";

const Findpw = () => {
    const [click, setclick] = useState(false);
    const handleclick = () => {
        setclick(true);
    };

    const navigate = useNavigate();
    const [id, setid] = useState("");
    const [iderr, setiderr] = useState("");
    const [confirmbtn, setconfirmbtn] = useState(false);

    //아이디확인버튼
    const idchkhandle = async e => {
        e.preventDefault();
        const frmdata = new FormData(document.myfrm);
        const mydata = Object.fromEntries(frmdata);
        console.log("폼입력데이터", mydata);
        console.log("아이디불일치", confirmbtn);

        if (!mydata.id) {
            console.log("아이디미입력");
            setiderr("아이디를 입력하세요.");
        } else setiderr("");

        try {
            const res = await axios.put(
                "http://localhost:5002/bk/find/idchk",
                mydata
            );
            // console.log("res.data", res.data, "값", res.data.success);
            if (res.data.success) {
                // console.log("갔다옴", res.data);
                setconfirmbtn(true);
                setid(res.data.id);
                alert(
                    "아이디를 확인했습니다. 임시비밀번호는 등록된 이메일로 보내드리겠습니다.  '임시비밀번호 : asdfg12345!!' "
                );
            } else if (!res.data.success) alert("일치하는 아이디가 없습니다.");
        } catch (error) {
            console.log("에러메세지", error);
        }
    };
    return (
        <>
            <Header />
            <div className="container">
                <div className="center">
                    <div className="depth3-tab-wrap find">
                        <ul className="tab">
                            <li className="tab1">
                                <Link to="/findid">아이디 찾기</Link>
                            </li>
                            <li className="tab2 on findchk">
                                <span>비밀번호 찾기</span>
                            </li>
                        </ul>

                        {!click ? (
                            <div className="lost-info" id="lost-info">
                                <h2 className="lost-pw">{title[1]}</h2>
                                <div className="comment">
                                    {commentpw.map((des, i) => (
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
                            <Findpw_confirm
                                idchkhandle={idchkhandle}
                                iderr={iderr}
                                setiderr={setiderr}
                                id={id}
                                confirmbtn={confirmbtn}
                                setconfirmbtn={setconfirmbtn}
                            />
                        )}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Findpw;
