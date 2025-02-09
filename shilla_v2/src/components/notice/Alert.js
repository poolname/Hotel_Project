import React from "react";
import "../../scss/common.scss";

const Alert = ({ isactive }) => {
    console.log("팝업진입하나", isactive);
    return (
        <div className={`lypop ${isactive ? "active" : ""}`}>
            <div className="lypop-wp small">
                <div className="lypop-content">
                    <div className="lypop-ct">
                        {/* <img src={con.img} /> */}
                        {/* <div>{con.des}</div> */}
                        <div>검색완료</div>
                        <button
                            className="lypop-close"
                            // onClick={onclose}
                        ></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Alert;
