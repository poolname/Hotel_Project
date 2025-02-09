import React from "react";

const ReadOnlyData = ({text}) => {
    const readOnlyData = [
        { title: "아이디", id: "userId", value: text.member_id, name: 'userId', type: 'text' },
        { title: "이름(국문)", id: "userName", value: text.name, name: 'userName', type: 'text' },
        { title: "이름(영문)", id: "userName_eng", value: text.name_eng, name: 'userName_eng', type: 'text' },
        { title: "생년월일", id: "userBirth", value: text.birth, name: 'userBirth', type: 'text' },
    ];

    return  <>
            {
                readOnlyData.map((item, index) => {
                    return (
                        <label className="my-info" key={index}>
                            <p>{item.title}</p>
                            <input type={item.type} id={item.id} name={item.name} value={item.value} readOnly />
                        </label>
                    );
                })
            }
            </>
};

export default ReadOnlyData;
