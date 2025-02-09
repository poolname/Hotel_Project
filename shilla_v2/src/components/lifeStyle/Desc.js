import React from 'react';

const Desc = ({ propDesc }) => {
    return (
        <div className="desc-wrap">
            {propDesc.map((ruleSet, index) => (
                <div key={index}>
                    <p className="desc">{ruleSet.intro}</p>
                    <ul className="rule">
                        {ruleSet.rules.map((rule, ruleIndex) => (
                            <li key={ruleIndex}>{rule}</li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
};

export default Desc;
