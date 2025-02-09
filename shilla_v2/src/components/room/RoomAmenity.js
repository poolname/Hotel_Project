import React from 'react';

const RoomAmenity = ({ roomAmenity }) => {
    return (
        <ul className="amenity">
            <h3>객실 어메니티</h3>
            {roomAmenity.map((amenity, index) => (
                <li className="list" key={index}>
                    <h4>{amenity.title}</h4>
                    <div className="txt-wrap">
                        <ul className="txt">
                            {amenity.description.map((item, idx) => (
                                <li key={idx}>{item}</li>
                            ))}
                        </ul>
                    </div>
                </li>
            ))}
        </ul>
    );
}

export default RoomAmenity;