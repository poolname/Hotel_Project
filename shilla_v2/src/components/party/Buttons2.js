import React from 'react';

const Buttons2 = ({ propBtn }) => {
  return (
    <div className="btn-wrap btn-250 weddingBtn">
      {propBtn.map((button) => (
        <button 
          key={button.id}
          type="button" 
          className={`btn ${button.className}`}
          data-lybtn={button.id}
        >
          {button.label}
        </button>
      ))}
    </div>
  );
};

export default Buttons2;