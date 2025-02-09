import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const AdminCont5_btn = ({ handleReset, handleSearch }) => {
    return (
        <div className="button-container">
            <button className="reset" onClick={handleReset}>
                초기화
            </button>
            <button
                type="button"
                className="submit"
                name="search"
                onClick={handleSearch}
            >
                {" "}
                검색
            </button>
        </div>
    );
};

export default AdminCont5_btn;
