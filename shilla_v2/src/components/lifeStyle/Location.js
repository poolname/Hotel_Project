import React from 'react';

const Location = ({ propLocation }) => {
    return (
        <ul className="info flex">
            {propLocation.map((info, index) => (
                <li className="list" key={index}>
                    <h4>{info.title}</h4>
                    <p className="txt" dangerouslySetInnerHTML={{ __html: info.content }} />
                </li>
            ))}
        </ul>
    );
};

export default Location;
