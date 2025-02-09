import React from 'react';

const Desc = ({ propDesc }) => {
  if (!propDesc) {
    return null; // propDesc 없으면 아무것도 렌더링 안함
  }
  
  return (
    <div className="desc-wrap">
      {propDesc.map((desc, index) => (
        <p className="desc" key={index}>
          {desc}
        </p>
      ))}
    </div>
  );
};

export default Desc;