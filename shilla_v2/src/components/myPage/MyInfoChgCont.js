import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import MyPwChkCont from "./MyPwChkCont";
import ReadOnlyData from "./ReadOnlyData";
import MyPhoneChg from "./MyPhoneChg";
import InputWithValidation from "./InputWithValidation";

const bkURL = process.env.REACT_APP_BACK_URL;

const MyInfoChgCont = () => {
    const navigate = useNavigate();
    const [text, setText] = useState({});
    const [user, setUser] = useState(null);
    const [pwChk, pwChkSet] = useState(0);
    const [newPw, setNewPw] = useState('');
    const [newPwChk, setNewPwChk] = useState('');
    const [userPhone, setUserPhone] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [oldPw, setOldPw] = useState('');
    const [error, setError] = useState({
        oldPw: '',
        newPw: '',
        newPwChk: '',
        userPhone: '',
        userEmail: ''
    });
    const [valid, setValid] = useState(false); // 전화번호 유효성 검사 상태
    const [validateOnSubmit, setValidateOnSubmit] = useState(false); // 수정완료 버튼 클릭 여부

    const pwtype = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%~]).{12,16}$/;
    const mailtype = /^[A-Za-z0-9._+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

    useEffect(() => {
        const id = sessionStorage.getItem("id");
        const name = sessionStorage.getItem("name");
        const grade = sessionStorage.getItem("grade");

        if (id) {
            setUser({ 'id': id, "name": name, "grade": grade });
        } else {
            setUser(null);
        }

        if (id) {
            axios.get(`${bkURL}/mypage/${id}`)
                .then(res => {
                    setText(res.data);
                    setUserPhone(res.data.phone);
                    setUserEmail(res.data.email);
                })
                .catch(err => {
                    console.error('Error fetching user data: ', err);
                });
        }
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();

        setValidateOnSubmit(true); // 수정완료 클릭 시 유효성 검사 시작

        // 에러 상태 초기화 (수정 완료 버튼을 눌렀을 때만 유효성 검사)
        let formErrors = {};

        // 비밀번호 유효성 검사 (새 비밀번호에 대해서만)
        if (newPw && !pwtype.test(newPw)) {
            formErrors.newPw = '새 비밀번호는 12~16자 사이, 영문자, 숫자, 특수문자를 포함해야 합니다.';
        }

        // 새 비밀번호 확인 일치 여부 검사
        if (newPw !== newPwChk) {
            formErrors.newPwChk = '새 비밀번호와 새 비밀번호 확인이 일치하지 않습니다.';
        }

        // 기존 비밀번호 확인
        try {
            const response = await axios.post(`${bkURL}/mypage/myInfoChg`, { id: user.id, pw: oldPw });

            if (response.status === 200) {
                // 비밀번호 확인이 성공하면 회원정보 수정 요청
                const updateResponse = await axios.put(`${bkURL}/mypage/myInfoChg/${user.id}`, {
                    phone: userPhone,
                    email: userEmail,
                    pw: newPw || undefined, // 새 비밀번호가 비어있다면 업데이트하지 않음
                });

                if (updateResponse.status === 200) {
                    alert(`${user.name}님, 회원 정보가 성공적으로 수정되었습니다.`);
                    navigate('/mypage'); // 성공 후 마이페이지로 이동
                }
            }
        } catch (err) {
            if (err.response) {
                setError({ ...error, form: err.response.data }); // 서버에서 전송된 에러 메시지 표시
            } else {
                alert('회원정보 수정에 실패했습니다.');
            }
            console.error('Error during password verification or update:', err);
        }

        setError(formErrors); // 유효성 검사 후 에러 상태 설정
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === 'userPhone') {
            setUserPhone(value);
        } else if (name === 'userEmail') {
            setUserEmail(value);
        } else if (name === 'newPw') {
            setNewPw(value);
        } else if (name === 'newPwChk') {
            setNewPwChk(value);
        } else if (name === 'oldPw') {
            setOldPw(value);
        }
    };

    if (!pwChk) {
        return <MyPwChkCont user={user} pwChkSet={pwChkSet} />;
    }

    return (
        <form name="myInfoChgFrm" className="mypage-info" id="mypage-info" onSubmit={handleSubmit}>
            <h2 className="title">회원정보 수정</h2>
            <ReadOnlyData text={text} />

            {/* 연락처 입력 */}
            <label className="my-info">
                <p>연락처</p>
                <MyPhoneChg
                    valid={valid}
                    setValid={setValid}
                    setPhone={setUserPhone}
                    userPhone={userPhone}
                    setError={setError}
                />
                {error.userPhone && <span className="error-msg">{error.userPhone}</span>}
            </label>

            {/* 이메일 입력 */}
            <InputWithValidation
                label="이메일"
                id="userEmail"
                name="userEmail"
                value={userEmail}
                onChange={handleChange}
                validationFn={(value) => mailtype.test(value) ? '' : '유효한 이메일 주소를 입력해주세요.'}
                error={error.userEmail}
                validateOnSubmit={validateOnSubmit} // 수정완료 클릭 시 유효성 검사
            />

            {/* 기존 비밀번호 */}
            <InputWithValidation
                label="현 비밀번호"
                id="oldPw"
                name="oldPw"
                value={oldPw}
                onChange={handleChange}
                validationFn={(value) => value ? '' : '현재 비밀번호를 확인해주세요.'}
                type="password"
                error={error.oldPw}
                validateOnSubmit={validateOnSubmit}
            />

            {/* 새 비밀번호 */}
            <InputWithValidation
                label="새 비밀번호"
                id="newPw"
                name="newPw"
                value={newPw}
                onChange={handleChange}
                validationFn={(value) => pwtype.test(value) ? '' : '새 비밀번호는 12~16자 사이, 영문자, 숫자, 특수문자를 포함해야 합니다.'}
                type="password"
                error={error.newPw}
                validateOnSubmit={validateOnSubmit}
            />

            {/* 새 비밀번호 확인 */}
            <InputWithValidation
                label="비밀번호 확인"
                id="newPwChk"
                name="newPwChk"
                value={newPwChk}
                onChange={handleChange}
                validationFn={(value) => value === newPw ? '' : '새 비밀번호와 새 비밀번호 확인이 일치하지 않습니다.'}
                type="password"
                error={error.newPwChk}
                validateOnSubmit={validateOnSubmit}
            />

            <input type="submit" className="edit-btn" value="수정완료" />
            {error.form && <div className="error-msg">{error.form}</div>}
        </form>
    );
};

export default MyInfoChgCont;



