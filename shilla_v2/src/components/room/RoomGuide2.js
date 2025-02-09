import React from 'react';
import Standard_desc3 from './Standard_desc3';
import Standard_desc4 from './Standard_desc4';

const RoomGuide2 = ({ roomGuide2 }) => {
    return (
        <div className="guide">
            <h3>객실 이용 안내</h3>
            {roomGuide2.map((item, index) => (
                <div key={index} className="list">
                    <h4>{item.title}</h4>
                    <div className="txt-wrap">
                        {item.description ? (
                            <ul className="txt">
                                {item.description.map((desc, idx) => (
                                    <li key={idx}>{desc}</li>
                                ))}
                            </ul>
                        ) : (
                            <p className="txt">{item.text}</p>
                        )}
                    </div>
                </div>
            ))}
            <Standard_desc4 />
            <Standard_desc3 />
        </div>
    );
};

export default RoomGuide2;