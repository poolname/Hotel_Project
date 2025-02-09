import React, { useEffect, useState } from "react";
import "../../../scss/AdminCont5_register.scss";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import AdminCont5_Modify_require from "./AdminCont5_Modify_require";
import AdminCont5_Modify_btn from "./AdminCont5_Modify_btn";

const AdminCont5_Modify = () => {
    const [category, setcategory] = useState({});
    const [modify, setmodify] = useState({});
    const { id } = useParams();
    const navigate = useNavigate();
    console.log("notice_id", id);

    useEffect(() => {
        if (!id) {
            console.log("id없음");
            return;
        }
        const fetchData = async () => {
            try {
                const res = await axios.get(
                    `http://localhost:5002/bk/notice/detail/${id}`
                );
                console.log("갔다옴", res.data);
                setmodify(res.data);
            } catch (error) {
                console.error("에러메세지", error);
            }
        };
        fetchData();
    }, [id]);

    if (!modify) {
        return <div>id 없음</div>;
    }

    const modifyGo = async e => {
        e.preventDefault();
        const frmdata = new FormData(document.myfrm);
        const mydata = Object.fromEntries(frmdata);
        console.log("수정데이터확인용", mydata);
        try {
            const res = await axios.put(
                `http://localhost:5002/bk/notice/modify/${id}`,
                mydata,
                {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                }
            );
            console.log("백수정성공res.send", res.data);
            setmodify(res.data);
            alert("수정완료");
            navigate(`/admin/notice`);
        } catch (error) {
            console.error("정보수정실패 : ", error);
        }
    };

    return (
        <div className="cont cont5">
            <div className="list">
                <div className="listwrap">
                    <form name="myfrm">
                        {/* <div className="header">
                            <h3>공지사항 수정</h3>
                        </div> */}
                        <AdminCont5_Modify_require
                            category={category}
                            setcategory={setcategory}
                            modify={modify}
                            setmodify={setmodify}
                            id={id}
                        />
                        <AdminCont5_Modify_btn modifyGo={modifyGo} />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AdminCont5_Modify;
