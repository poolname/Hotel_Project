import React from "react";

const Noticetype = ({ Ntype, setNtype }) => {
    const typehandle = async e => {
        setNtype(e.target.value);
        console.log("검색타입", Ntype);
    };
    return (
        <>
            <select
                name="category"
                value={Ntype}
                className="Nfilter"
                onChange={typehandle}
            >
                <option value="all">전체</option>
                <option value="title">제목</option>
                <option value="con">내용</option>
            </select>
        </>
    );
};

export default Noticetype;
