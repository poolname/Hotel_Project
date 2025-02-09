import React, { useState, useEffect } from 'react';

const JoinEmail = ({ valid, setValid, setEmail }) => {
  const [mail, setMail] = useState(''); // 이메일 상태
  const [errorMessage, setErrorMessage] = useState('');  // 에러 메시지 상태

  const mailtype = /^[A-Za-z0-9._+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setMail(value);
    setEmail(value);
  };

  useEffect(() => {
    if (!mail) {
      setValid(true); // 처음 화면에서는 에러 메시지가 안 보이도록
      setErrorMessage('');
    } else if (!mailtype.test(mail)) {
      setValid(false);
      setErrorMessage('유효하지 않은 이메일 형식입니다.');
    } else {
      setValid(true);
      setErrorMessage('');
    }
  }, [mail]);

  return (
    <div className="info-group">
      <div className="input-container">
        <label htmlFor="mail">
          이메일 <font color="#F00">*</font>
        </label>
        <div className="input-wrap">
          <input
            name="email"
            type="text"
            id="mail"
            placeholder="honggildong@naver.com"
            value={mail}
            required
            onChange={handleEmailChange}
          />
          <span className="error-message" id="mail-error">{errorMessage}</span>
        </div>
      </div>
    </div>
  );
};

export default JoinEmail;