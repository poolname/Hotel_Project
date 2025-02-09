import React from 'react';

const Introduction2 = ({ title, restaurantName, paragraphs, rooms }) => {
  return (
    <div className="Introduction">
      <h3>
        {title} <strong>{restaurantName}</strong>
      </h3>

      {paragraphs.map((para, index) => (
        <React.Fragment key={index}>
          {para.strong && <strong>{para.strong}</strong>}
          <p className={para.className}>
            {para.text.split('\n').map((line, i) => (
              <React.Fragment key={i}>
                {line}
                {i < para.text.split('\n').length - 1 && <br />}
              </React.Fragment>
            ))}
          </p>
        </React.Fragment>
      ))}

      <div className="group">
        {rooms.map((room, index) => (
          <React.Fragment key={index}>
            <b>{room.title}</b>
            <p className={room.className}>
              {room.text.split('\n').map((line, i) => (
                <React.Fragment key={i}>
                  {line}
                  {i < room.text.split('\n').length - 1 && <br />}
                </React.Fragment>
              ))}
            </p>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Introduction2;
