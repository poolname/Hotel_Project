import React, { useState } from 'react';

const Popup = ({ id, title, imgSrc }) => {
    const [isOpen, setIsOpen] = useState(true);

    // 팝업 닫는 함수
    const handleClose = () => {
        setIsOpen(false);
    };

    // 팝업 닫힌 상태일때 아무것도 렌더링하지 않음
    if (!isOpen) return null;

    return (
        <div className="lypop" data-lyopen={id}>
            <div className="lypop-wp">
                <div className="lypop-content">
                    <div className="lypop-title">
                        <strong>{title}</strong>
                        <button type="button" className="lypop-close" onClick={handleClose}>
                            <span className="hide">닫기</span>
                        </button>
                    </div>
                    <div className="lypop-ct">
                        <div className="img-wrap">
                            <img src={imgSrc} alt={title} />
                        </div>
                        <div className="btn-wrap type5">
                            <button className="btn btn-04" onClick={handleClose}>
                                <span>닫기</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Popup;
