import React from 'react';

const ListItem = ({ title, description }) => (
    <li className="list">
        <h4>{title}</h4>
        <div className="txt">
            {description.map((line, index) => (
                <p key={index}>{line}</p>  // 각 항목을 <p> 태그로 감싸서 한 줄씩 표시
            ))}
        </div>
    </li>
);

const RoomInfo2 = ({ roomInfo2 }) => {
    return (
        <ul className="info">
            <h3>객실 정보</h3>
            {
                roomInfo2.map((item, index) => (
                    <ListItem
                        key={ index + roomInfo2.length }
                        title={ item.title }
                        description={ Array.isArray(item.description) ? item.description : [item.description] }  // description이 배열이 아니면 배열로 변환
                    />
                ))
            }
        </ul>
    );
}

export default RoomInfo2;