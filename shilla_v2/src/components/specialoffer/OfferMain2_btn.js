import React, { useState } from "react";
import Header from "../common/Header";
import Footer from "../common/Footer";
import "../../scss/sub01_01_main.scss";
import { Link } from "react-router-dom";
import axios from "axios";

const OfferMain2_btn = ({ handleReset, handleSearch }) => {
    return (
        <div className="pkg-btnbox">
            <button onClick={handleReset} className="pkg-filter-resetbtn">
                초기화
            </button>
            {/* <input
                type="button"
                className="pkg-filter-searchbtn"
                value="검색"
                onClick={handleSearch}
            /> */}
            <button
                type="button"
                className="pkg-filter-searchbtn"
                onClick={handleSearch}
            >
                검색
            </button>
        </div>
    );
};

export default OfferMain2_btn;
