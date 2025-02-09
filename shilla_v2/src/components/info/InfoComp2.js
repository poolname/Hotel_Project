import React, { useState } from "react";

const InfoComp2 = () => {
    const infoMidContents = [
        {class : 'main-tel',tit : '대표전화',tel : "02-2233-3131"},
        {class : 'res-tel',tit : '객실예약',tel : "02-2230-3310"},
    ]

    const [infoMid, infoMidSet] = useState(infoMidContents)


    return (
        <>
            {
                infoMid.map((item,index)=>{
                    return  <div key={index} className={item.class}>
                                <p>{item.tit}</p>
                                <p>{item.tel}</p>
                            </div>
                })
            }
        </>
    );
};

export default InfoComp2;
