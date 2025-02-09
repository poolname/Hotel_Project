import React from 'react';

const Location = ({ propLocation }) => {
    return (
        <>
            <ul className="info bd-none">
                {propLocation.map((info, index) => (
                    <li className="list" key={index}>
                        <h4>{info.title}</h4>
                        <p className="txt" dangerouslySetInnerHTML={{ __html: info.content }}></p>
                    </li>
                ))}
            </ul>
            <br/>
            <br/>
            <br/>
        </>
    );
};

export default Location;
