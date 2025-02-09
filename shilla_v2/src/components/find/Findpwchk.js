import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Findpwchk = ({ id }) => {
    const [pwerr, setpwerr] = useState("");
    const [pwchkerr, setpwchkerr] = useState("");
    // console.log("아이디오나", id);
    const navigate = useNavigate();

    const pwchkhandle = async e => {
        e.preventDefault();
        const frmdata = new FormData(document.myfrm);
        const mydata = Object.fromEntries(frmdata);
        console.log("폼입력데이터", mydata);
        const pwtype = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%~]).{12,16}$/;

        if (!mydata.pw && !mydata.newpw) {
            alert("내용을 모두 입력해주세요.");
            return;
        }
        if (!mydata.pw) {
            console.log("비밀번호 미입력");
            setpwerr("메일로 전송된 임시비밀번호를 입력하세요.");
        } else setpwerr("");
        // if (!mydata.newpw) {
        //     console.log("비밀번호 미확인");
        //     setpwchkerr("새로운 비밀번호를 입력해주세요.");
        // } else
        if (!pwtype.test(mydata.newpw)) {
            console.log("유효성검사 불만족");
            setpwchkerr(
                "비밀번호는 영문, 숫자, 특수문자를 포함하여 12~16자여야 합니다."
            );
            return;
        } else setpwchkerr("");

        try {
            const res = await axios.put("http://localhost:5002/bk/find/pwchk", {
                ...mydata,
                id,
            });
            console.log("res.data", res.data, "값", res.data.success);

            if (res.data.success) {
                console.log("갔다옴", res.data);
                // setconfirmbtn(true);
                alert("비밀번호가 변경되었습니다.");
                navigate("/login");
            } else if (!res.data.success)
                alert("임시비밀번호가 일치하지않습니다.");
        } catch (error) {
            console.log("에러메세지", error);
        }
    };

    return (
        <div className="pw-chk" id="pw-chk">
            <h2 className="my-pw">비밀번호 변경</h2>
            <div className="comment">
                <div className="input-container">
                    <form name="myfrm">
                        <div className="chkwrap">
                            <span className="title">임시비밀번호</span>
                            <div className="input-wrap">
                                <input
                                    type="password"
                                    id="pw"
                                    name="pw"
                                    // minlength="12"
                                    // maxlength="16"
                                    placeholder="임시비밀번호를 입력하세요."
                                    required
                                />
                                {setpwerr && (
                                    <div className="errmsg">{pwerr}</div>
                                )}
                            </div>
                        </div>
                        <div className="chkwrap">
                            <span className="title">새 비밀번호</span>
                            <div className="input-wrap">
                                <input
                                    type="password"
                                    id="pwchk"
                                    name="newpw"
                                    // minlength="12"
                                    // maxLength="16"
                                    placeholder="영문, 숫자, 특수문자를 포함하여 12~16자"
                                    required
                                />
                                {setpwchkerr && (
                                    <div id="pwchk-error" className="errmsg">
                                        {pwchkerr}
                                    </div>
                                )}
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <button id="edit" onClick={pwchkhandle}>
                변경완료
            </button>
        </div>
    );
};

export default Findpwchk;
