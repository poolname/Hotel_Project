import React from 'react';

const ListItem = ({ title, description }) => (
    <li className="list">
        <h4>{title}</h4>
        <div className="txt">
            {Array.isArray(description) 
                ? description.map((item, index) => <p key={index}>{item}</p>)
                : <p>{description}</p>
            }
        </div>
    </li>
);

const RoomInfo = ({ roomInfo }) => {
    return (
        <ul className="info">
            <h3>객실 정보</h3>
            {
                roomInfo.map((item, index) => (
                    <ListItem
                        key={ index }
                        title={ item.title }
                        description={ item.description }
                    />
                ))
            }
        </ul>
    );
}

export default RoomInfo;
