import React, { useState } from "react";
import { Link } from "react-router-dom";

const InfoComp3 = () => {
    const infoContainer = [
        {link : 'sub03_01_02.html',tit : '콘티넨탈 (프렌치)',tel : "02-2230-3369"},
        {link : 'sub03_01_01.html',tit : '라연 (한식당)',tel : "02-2230-3367"},
        {link : 'sub03_01_04.html',tit : '팔선 (중식당)',tel : "02-2230-3366"},
        {link : 'sub03_01_03.html',tit : '아리아께 (일식당)',tel : "02-2230-3356"},
        {link : 'sub03_01_05.html',tit : '더 파크뷰',tel : "02-2230-3374"},
        {link : 'sub03_02_01.html',tit : '더 라이브러리',tel : "02-2230-3388"},
        {link : 'sub03_03.html',tit : '패스트리 부띠끄',tel : "02-2230-3377"},
        {link : 'sub04_05_01.html',tit : '면세점 (서울점)',tel : "02-2230-3662"},
    ]

    const [info, infoSet] = useState(infoContainer)


    return (
        <>
            <h2 className="restaurant">주요 업장 안내</h2>
            <div className="res-container">
            {
                info.map((item,index)=>{
                    return  <Link to={item.link} key={index}>
                                <div className="main-restaurant">
                                    <p>{item.tit}</p>
                                    <p>{item.tel}</p>
                                </div>
                            </Link>
                })
            }
            </div>
        </>
    );
};

export default InfoComp3;
