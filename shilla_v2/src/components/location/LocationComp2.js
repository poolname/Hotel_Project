import React, { useState } from "react";
import { Link } from "react-router-dom";

const LocationComp1 = () => {
    const locationTopInfo = [
        {tit : '주소' , txt : '서울시 중구 동호로 249 (우편번호 : 04605)'},
        {tit : '대표전화' , txt : '02-2233-3131'},
    ]

    const [locationInfo,locationInfoSet] = useState(locationTopInfo)
    return (
       <>
            <ul className="info">
                {
                    locationInfo.map((item,index)=>{
                        return  <li className="list" key={index}>
                                    <h4>{item.tit}</h4>
                                    <p className="txt">{item.txt}</p>
                                </li>
                    })
                }
            </ul>
       </>
    );
};

export default LocationComp1;
