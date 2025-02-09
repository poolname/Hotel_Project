import React from 'react';
import Desc from './Desc';

const Guide = ({ reservationInfo, notice, propDesc }) => {
  return (
    <div className="guide">
      <div className="list">
        <h4 className='restH4'>예약 안내</h4>
        <p className="txt" dangerouslySetInnerHTML={{ __html: reservationInfo }} />
      </div>
      <div className="list">
        <h4 className='restH4'>공지사항</h4>
        <div className="txt-wrap">
          <p className="txt" dangerouslySetInnerHTML={{ __html: notice.main }} />
          <ul className="txt">
            <li dangerouslySetInnerHTML={{ __html: notice.deposit }} />
          </ul>
          <ul className="txt">
            {notice.cancellation.map((item, index) => (
              <li key={index} dangerouslySetInnerHTML={{ __html: item }} />
            ))}
          </ul>
        </div>
      </div>
      <Desc propDesc={propDesc} />
    </div>
  );
};

export default Guide;
