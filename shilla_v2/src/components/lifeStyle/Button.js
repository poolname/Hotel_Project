import React from 'react';

const Button = ({propBtn}) => {
    return (
        <div className="btn-wrap btn-250">
            <button type="button" className="btn btn-01" data-lybtn="pop-map">{propBtn}</button>
        </div>
    );
};

export default Button;
