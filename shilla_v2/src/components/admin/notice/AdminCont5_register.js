import React, { useEffect, useState } from "react";
import "../../../scss/AdminCont5_register.scss";
import { Link, Navigate, useNavigate } from "react-router-dom";
import AdminCont5_register_btn from "./AdminCont5_register_btn";
import AdminCont5_register_require from "./AdminCont5_register_require";

const AdminCont5_register = () => {
    const navigate = useNavigate();
    const [category, setcategory] = useState({});

    const registerGo = async e => {
        e.preventDefault();

        const frmdata = new FormData(document.myfrm);
        const mydata = Object.fromEntries(frmdata);
        // console.log("제목값", mydata);
        if (!mydata.title) {
            alert("제목을 입력하세요.", mydata.title);
            return;
        }
        if (!mydata.context) {
            alert("내용을 입력하세요.");
            return;
        }

        try {
            console.log("입력폼데이터", mydata);
            const res = await axios.post(
                "http://localhost:5002/bk/notice/register",
                mydata,
                {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                }
            );
            console.log(res.data);
            alert("등록되었습니다.");
            navigate("/admin/notice");
        } catch (error) {
            console.log("등록 오류 : ", error);
        }
    };

    return (
        <div className="cont cont5">
            <div className="list">
                <div className="listwrap">
                    <form name="myfrm" onSubmit={registerGo}>
                        {/* <div className="header">
                            <h3>공지사항 등록</h3>
                        </div> */}
                        <AdminCont5_register_require
                            category={category}
                            setcategory={setcategory}
                        />
                        <AdminCont5_register_btn />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AdminCont5_register;
