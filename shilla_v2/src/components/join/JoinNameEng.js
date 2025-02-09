import React, { useState, useEffect } from 'react';

const JoinNameEng = ({ valid, setValid, setNameEng}) => {
  const [firstname, setFirstname] = useState(''); // First name 상태
  const [lastname, setLastname] = useState(''); // Last name 상태
  const [errorMessage, setErrorMessage] = useState('');  // 에러 메시지 상태

  const ennametype = /^[A-Za-z]+$/;

  const handleFirstnameChange = (e) => {
    const value = e.target.value;
    setFirstname(value);
  };

  const handleLastnameChange = (e) => {
    const value = e.target.value;
    setLastname(value);
  };

  useEffect(() => {
    const fullName = `${firstname} ${lastname}`.trim();
    setNameEng(fullName);  // 부모 컴포넌트의 상태로 영문 이름 업데이트

    // 유효성 검사
    if (!firstname && !lastname) {
      setValid(true); // 처음 화면에서는 에러 메시지가 안 보이도록
      setErrorMessage('');
    } else if (!ennametype.test(firstname) || !ennametype.test(lastname)) {
      setValid(false);
      setErrorMessage('영문 이름은 알파벳만 입력 가능합니다.');
    } else {
      setValid(true);
      setErrorMessage('');
    }
  }, [firstname, lastname, setValid, setNameEng]);

  return (
    <div className="info-group">
      <div className="input-container">
        <label htmlFor="en-name">
          영문 이름 <font color="#F00">*</font>
        </label>
        <div className="input-wrap">
          <div className="eng">
            <input
              type="text"
              id="firstname"
              placeholder="First name"
              className="name-input"
              name="firstname"
              value={firstname}
              required
              onChange={handleFirstnameChange}
            />
            <input
              type="text"
              id="lastname"
              placeholder="Last name"
              className="name-input"
              name="lastname"
              value={lastname}
              onChange={handleLastnameChange}
            />
          </div>
          <span className="error-message" id="enname-error">{errorMessage}</span>
        </div>
      </div>
    </div>
  );
};

export default JoinNameEng;