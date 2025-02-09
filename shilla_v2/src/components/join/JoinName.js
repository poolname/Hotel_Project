import React, { useState, useEffect } from 'react';

const JoinName = ({ valid, setValid, setNameKor }) => {
  const [name, setName] = useState(''); // 이름 상태
  const [errorMessage, setErrorMessage] = useState('');  // 에러 메시지 상태

  const konametype = /^[가-힣]{2,5}$/;

  const handleNameChange = (e) => {
    const value = e.target.value;
    setName(value);
    setNameKor(value);
  };

  useEffect(() => {
    if (!name) {
      setValid(true); // 처음 화면에서는 에러 메시지가 안 보이도록
      setErrorMessage('');
    } else if (!konametype.test(name)) {
      setValid(false);
      setErrorMessage('이름은 2~5자의 한글만 입력 가능합니다.');
    } else {
      setValid(true);
      setErrorMessage('');
    }
  }, [name]);

  return (
    <div className="info-group">
      <div className="input-container">
        <label htmlFor="ko-name">
          국문 이름 <font color="#F00">*</font>
        </label>
        <div className="input-wrap">
          <input
            name="name"
            type="text"
            id="ko-name"
            minLength="2"
            maxLength="5"
            placeholder="홍길동"
            value={name}
            required
            onChange={handleNameChange}
          />
          <span className="error-message" id="koname-error">{errorMessage}</span>
        </div>
      </div>
    </div>
  );
};

export default JoinName;