import React from 'react';
import TimeTable from './TimeTable';

const Introduction = ({ title, restaurantName, paragraphs, includeTimeTable = false }) => {
  return (
    <div className="Introduction">
      <h3>
        {title} <strong>{restaurantName}</strong>
      </h3>
      
      {/* 조건부로 TimeTable 렌더링 */}
      {includeTimeTable && <TimeTable />}

      {paragraphs.map((para, index) => (
        <React.Fragment key={index}>
          {para.strong && <strong>{para.strong}</strong>}
          <p className={para.className} dangerouslySetInnerHTML={{ __html: para.text }} />
        </React.Fragment>
      ))}


    </div>
  );
};

export default Introduction;
