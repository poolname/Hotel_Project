import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AdminCont5_register_require = ({ category, setcategory }) => {
    return (
        <table className="r-table">
            <tbody>
                <tr className="r-row">
                    <td className="N-title">분류</td>
                    <td className="N-type">
                        <select
                            name="category"
                            value={category}
                            className="category"
                            onChange={e => setcategory(e.target.value)}
                        >
                            <option
                                name="category"
                                className="category"
                                value="공지"
                            >
                                공지
                            </option>
                            <option
                                name="category"
                                className="category"
                                value="안내"
                            >
                                안내
                            </option>
                            <option
                                name="category"
                                className="category"
                                value="이벤트"
                            >
                                이벤트
                            </option>
                        </select>
                    </td>
                </tr>
                <tr className="r-row">
                    <td className="N-title">제목</td>
                    <td className="N-con">
                        {" "}
                        <input type="text" name="title" className="title" />
                    </td>
                </tr>
                <tr className="r-row">
                    <td className="N-title">내용</td>
                    <td className="N-con areabox">
                        <textarea className="area" name="context" />
                    </td>
                </tr>
                <tr className="r-row">
                    <td className="fileup">첨부파일</td>
                    <td className="N-con">
                        <input type="file" name="upfile" className="file" />
                    </td>
                </tr>
            </tbody>
        </table>
    );
};

export default AdminCont5_register_require;
