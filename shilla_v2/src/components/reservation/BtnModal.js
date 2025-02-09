import React from "react";

const BtnModal = ({dataTitle}) => {
  return (
    <div className="lypop" data-lyopen={dataTitle}>
    <div className="lypop-wp mid">
        <div className="lypop-content">
            <div className="lypop-title">
                <strong>혜택 및 이용 안내</strong>
                <a href="#self" className="lypop-close" data-lyclose={dataTitle} ><span className="hide">닫기</span></a>
            </div>
            <div className="lypop-ct scroll">
                <iframe src="/reserve/pop" title="내용"></iframe>
            </div>
        </div>
    </div>
</div>
  );
};

export default BtnModal;
