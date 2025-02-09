import React, { useState, useEffect } from "react";

const InputWithValidation = ({ label, id, name, value, onChange, validationFn, error, type = "text", validateOnSubmit }) => {
    const [validationError, setValidationError] = useState('');

    useEffect(() => {
        if (validateOnSubmit && validationFn) {
            setValidationError(validationFn(value)); // 버튼 클릭 시만 검증
        }
    }, [value, validationFn, validateOnSubmit]); // validateOnSubmit이 true일 때만 유효성 검사

    return (
        <label className="my-info">
            <p>{label}</p>
            <input
                id={id}
                name={name}
                type={type}
                value={value}
                onChange={onChange}
                className={validationError || error ? 'error' : ''}
            />
            {(validationError || error) && <span className="error-msg">{validationError || error}</span>}
        </label>
    );
};



export default InputWithValidation;
