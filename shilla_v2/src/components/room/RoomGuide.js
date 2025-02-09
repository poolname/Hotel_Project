import React from 'react';
import Standard_desc2 from './Standard_desc2';
import Standard_desc3 from './Standard_desc3';

const RoomGuide = ({ roomGuide }) => {
    return (
        <div className="guide">
            <h3>객실 이용 안내</h3>
            {roomGuide.map((item, index) => (
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
            <Standard_desc2 />
            <Standard_desc3 />
        </div>
    );
};

export default RoomGuide;