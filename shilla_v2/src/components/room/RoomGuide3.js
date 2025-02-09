import Standard_desc3 from "../room/Standard_desc3";

const RoomGuide3 = ({ roomGuide3 }) => {
    return (
        <div className="guide">
            <h3>더 이그제큐티브 라운지 혜택</h3>
            {roomGuide3.map((item, index) => (
                <div key={index} className="list">
                    <h4>{item.title}</h4>
                    <div className="txt-wrap">
                        {item.description ? (
                            <ul className="txt">
                                {item.description.map((desc, idx) => (
                                    <li key={idx}>{desc}</li>
                                ))}
                            </ul>
                        ) : (
                            <p className="txt">{item.description}</p>
                        )}
                    </div>
                </div>
            ))}
            <Standard_desc3 />
        </div>
    );
};

export default RoomGuide3;