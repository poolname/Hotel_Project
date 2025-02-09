import React from "react";
import Alert from "./Alert";

const Noticebtn = ({ handleSearch }) => {
    return (
        <>
            <button className="s-btn" onClick={handleSearch}>
                검색
            </button>
        </>
    );
};

export default Noticebtn;
