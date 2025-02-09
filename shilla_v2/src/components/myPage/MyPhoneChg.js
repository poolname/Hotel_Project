import React, { useState, useEffect } from 'react';

const MyPhoneChg = ({ valid, setValid, setPhone, userPhone, setError }) => {
  const [phone, setPhoneState] = useState({ startNum: '', middleNum: '', lastNum: '' });
  const [errorMessage, setErrorMessage] = useState('');

  const startNumbers = [
    '010', '02', '031', '032', '033', '041', '042', '043', '044', '051', '052', '053', '054', '055', '061', '062', '063', '064'
  ];

  const validatePhoneNumber = (start, middle, last) => {
    const isStartNum010 = start === '010';
    const isMiddleValid = isStartNum010 ? /^\d{4}$/.test(middle) : /^\d{3,4}$/.test(middle);
    const isLastValid = /^\d{4}$/.test(last);

    if (!start || !middle || !last) {
      setValid(false);
      setError({ userPhone: '모든 필드를 입력해주세요.' });
    } else if (!isMiddleValid) {
      setValid(false);
      setError({ userPhone: '중간 번호는 3~4자리 숫자여야 합니다.' });
    } else if (!isLastValid) {
      setValid(false);
      setError({ userPhone: '마지막 번호는 4자리 숫자여야 합니다.' });
    } else {
      setValid(true);
      setError({ userPhone: '' }); // 유효성 검사 통과 시 에러 메시지 지움
    }
  };

  useEffect(() => {
    if (userPhone) {
      const [start, middle, last] = userPhone.split('-');
      setPhoneState({
        startNum: start || '',
        middleNum: middle || '',
        lastNum: last || ''
      });
    }
  }, [userPhone]);

  useEffect(() => {
    const { startNum, middleNum, lastNum } = phone;
    const phoneNum = `${startNum}-${middleNum}-${lastNum}`.trim();

    if (startNum && middleNum && lastNum) {
      setPhone(phoneNum);
    }

    validatePhoneNumber(startNum, middleNum, lastNum);
  }, [phone]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPhoneState((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  return (
    <div>
      <div className="info-group">
        <div className="input-container">
          <div className="input-wrap">
            <div className="tel-num">
              <select
                name="startNum"
                value={phone.startNum}
                required
                onChange={handleChange}
              >
                <option value="">선택</option>
                {startNumbers.map((num) => (
                  <option key={num} value={num}>
                    {num}
                  </option>
                ))}
              </select>

              <input
                className="phone-num"
                name="middleNum"
                type="text"
                value={phone.middleNum}
                onChange={handleChange}
                maxLength="4"
                required
                placeholder="중간 번호"
              />

              <input
                className="phone-num"
                name="lastNum"
                type="text"
                value={phone.lastNum}
                onChange={handleChange}
                maxLength="4"
                required
                placeholder="마지막 번호"
              />

              {errorMessage && <span className="error-msg">{errorMessage}</span>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyPhoneChg;
