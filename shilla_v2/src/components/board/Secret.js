import React from "react";

const Secret = ({detailText}) => {
    if(detailText.secret == 1){
        return <i className="fa-solid fa-lock"></i>
    }
};

export default Secret;
