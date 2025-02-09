import React from "react";

const BtnModalRoom = ({}) => {
  return (
    <div className="lypop room" data-lyopen={`pop-benefit-guide`}>
    <div className="lypop-wp mid">
        <div className="lypop-content">
            <div className="lypop-title">
                <strong>혜택 및 이용 안내</strong>
                <a href="#self" className="lypop-close" data-lyclose={`pop-benefit-guide`} ><span className="hide">닫기</span></a>
            </div>
            <div className="lypop-ct scroll">
                <iframe src="/reserve/pop2" title="내용"></iframe>
            </div>
        </div>
    </div>
</div>
  );
};

export default BtnModalRoom;
