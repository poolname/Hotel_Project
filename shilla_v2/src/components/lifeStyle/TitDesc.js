const TitDesc = ({ propRules }) => {
    return (
        <div className="desc-wrap">
            <p className="desc">
                고객 여러분의 안전을 위하여 다음과 같이 어번 아일랜드(야외 수영장) 이용 규정을 준수해 주시기 바랍니다.
            </p>
            {propRules.map((value_rule, index) => (
                <div key={index}>
                    <p className="sub-tit">{value_rule.title}</p>
                    <ul className="rule">
                        {value_rule.rule.map((desc, subIndex) => (
                            <li key={subIndex}>{desc}</li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    )
}

export default TitDesc;