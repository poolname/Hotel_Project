import React from 'react';

// 고정된 아이콘과 타입 데이터
const capacityData = [
    { type: "Reception", icon: "../../img/sub/reception.gif" },
    { type: "Theater", icon: "../../img/sub/theater.gif" },
    { type: "Classroom", icon: "../../img/sub/classroom.gif" },
    { type: "Round Table", icon: "../../img/sub/round.gif" },
];

const Dynasty = ({ data }) => {
    return (
        <>
            {data.map((info, index) => (
                <div className="info-wrap" key={index}>
                    <strong>{info.title}</strong>
                    <ul className="info">
                        <li className="list">
                            <h4>위치</h4>
                            <p className="txt">{info.location}</p>
                        </li>
                        <li className="list">
                            <h4>면적</h4>
                            <p className="txt">{info.area}</p>
                        </li>
                        <li className="list">
                            <h4>Size</h4>
                            <p className="txt">{info.size}</p>
                        </li>
                        <li className="list">
                            <h4>수용인원</h4>
                            <ul className="flex">
                                {capacityData.map((item, idx) => (
                                    <li key={idx}>
                                        <img src={item.icon} alt={item.type} />
                                        <p>{item.type}<br />{info.numbers[idx]}</p>
                                    </li>
                                ))}
                            </ul>
                        </li>
                    </ul>
                </div>
            ))}
        </>
    );
};

export default Dynasty;
