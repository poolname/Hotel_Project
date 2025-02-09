import React, { useState, useEffect } from 'react';

const JoinPw = ({ valid, setValid, setPw}) => {
  const [password, setPassword] = useState(''); // 패스워드 상태
  const [confirmPassword, setConfirmPassword] = useState(''); // 패스워드 확인 상태
  const [errorMessage, setErrorMessage] = useState('');  // 에러 메시지 상태
  const [confirmPasswordError, setConfirmPasswordError] = useState('');  // 비밀번호 확인 에러 메시지 상태

  const pwtype = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%~]).{12,16}$/;

  // 패스워드 유효성 검사 함수
  const validatePassword = (pw, confirmPw) => {
    // 비밀번호의 유효성 검사
    if (!pw) {
      setValid(false);
      setErrorMessage('패스워드를 입력해주세요.');
    } else if (!pwtype.test(pw)) {
      setValid(false);
      setErrorMessage('패스워드는 영문, 숫자, 특수문자 포함 12~16자여야 합니다.');
    } else {
      setValid(true);
      setErrorMessage('');
    }

    // 비밀번호와 비밀번호 확인이 일치하는지 검사
    if (confirmPw && pw !== confirmPw) {
      setConfirmPasswordError('비밀번호가 일치하지 않습니다.');
    } else {
      setConfirmPasswordError('');
    }
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);
    setPw(password)
    validatePassword(value, confirmPassword);
  };

  const handleConfirmPasswordChange = (e) => {
    const value = e.target.value;
    setConfirmPassword(value);
    validatePassword(password, value);
  };

  // 패스워드 유효성 검사
  useEffect(() => {
    if (password && confirmPassword) {
      validatePassword(password, confirmPassword);
    }
  }, [password, confirmPassword]);

  return (
    <div>
      {/* 패스워드 입력 */}
      <div className="info-group">
        <div className="input-container">
          <label htmlFor="pw">
            패스워드 <font color="#F00">*</font>
          </label>
          <div className="input-wrap">
            <input
              name="pw"
              type="password"
              id="pw"
              minLength="12"
              maxLength="16"
              placeholder="영문, 숫자, 특수문자 포함 12~16자"
              value={password}
              required
              onChange={handlePasswordChange}
            />
            <span className="error-message" id="pw-error">{errorMessage}</span>
          </div>
        </div>
      </div>

      {/* 패스워드 확인 */}
      <div className="info-group">
        <div className="input-container">
          <label htmlFor="confirm-pw">
            패스워드 확인 <font color="#F00">*</font>
          </label>
          <div className="input-wrap">
            <input
              name="confirm_pw"
              type="password"
              id="confirm-pw"
              value={confirmPassword}
              required
              onChange={handleConfirmPasswordChange}
            />
            <span className="error-message" id="confirm-pw-error">{confirmPasswordError}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinPw;