import React from 'react';
import { Link } from 'react-router-dom';

const Button2 = ({ propBtn }) => {
    return (
        <div className="btn-wrap btn-300">
            <Link
                to="https://www.shilladfs.com/"
                className="btn btn-01"
                target="_blank"
                title={`${propBtn}로 이동`}
            >
                {propBtn} 바로가기
            </Link>
        </div>
    );
};

export default Button2;
