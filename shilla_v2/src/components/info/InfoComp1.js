import React, { useState } from "react";

const InfoComp1 = () => {
    const infoTopText = [
        '호텔신라를 찾아주신 분들께 진심으로 감사드립니다.',
        '호텔신라를 이용하시면서 궁금하셨던 점이나 제안하고 싶으신 점이 있으면 언제든지 연락주십시오.',
        '고객의 의견을 즉시 반영하여 정성이 담긴 세심한 서비스로 보답하겠습니다.'
    ]

    const [infoText, infoTextSet] = useState(infoTopText)


    return (
        <>
            <h2 className="contact-us">연 락 처</h2>
            <h3 className="comment">
                {
                    infoText.map((item,index)=>(<p key={index}>{item}</p>))
                }
            </h3>
        </>
    );
};

export default InfoComp1;
