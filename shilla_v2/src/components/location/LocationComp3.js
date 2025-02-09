import React, { useState } from "react";
import { Link } from "react-router-dom";

const LocationComp3 = () => {
    const locationGuideText = [
        {
            tit : '자가용 이용시', 
            textWrap : [
                {
                    boldTxt : '분당방면',
                    txt : " : 한남대교 → 장충단길 → 서울신라호텔/신라면세점"
                },
                {
                    boldTxt : '강남방면',
                    txt : " : 동호대교 → 장충체육관 앞 사거리에서 좌회전 → 서울신라호텔/신라면세점"
                },
                {
                    boldTxt : '용산방면',
                    txt : " : 남산2호터널 통과 후 좌회전 → 서울신라호텔/신라면세점"
                },
            ]
        },
        {
            tit : '버스 이용시', 
            textWrap :[{boldTxt : '', txt : '장충체육관 앞 하차 (노선번호: 144,301,7212)'}]
        },
        {
            tit : '지하철 이용시', 
            textWrap :[{boldTxt : '', txt : '지하철3호선 동대입구역 5번출구'}]
        }
    ]

    const [locationGuide,locationGuideSet] = useState(locationGuideText)
    return (
       <>
            <ul className="guide">
                <li><h3>교통편</h3></li>
                {
                    locationGuide.map((item,index)=>{
                        return  <li className="list" key={index}>
                                    <h4>{item.tit}</h4>
                                    <div className="txt-wrap">
                                        <ul className="txt">
                                            {
                                                item.textWrap.map((guide,idx)=>(<li key={idx}><strong>{guide.boldTxt}</strong>{guide.txt}</li>))
                                            }
                                        </ul>
                                    </div>
                                </li>
                    })
                }
            </ul>
       </>
    );
};

export default LocationComp3;
