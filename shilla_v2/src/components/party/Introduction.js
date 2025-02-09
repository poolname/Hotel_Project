const Introduction = ({ title, description, tel, labelType = "default", buttons = null, bdNone = false }) => {
    const labelText = labelType === "inquiry" ? "문의전화" : "예약 / 문의";

    return (
        <>
            <div className={`Introduction ${bdNone ? 'bd-none' : ''}`}>
                <h3 dangerouslySetInnerHTML={{ __html: title }}></h3>
                <p className="txt" dangerouslySetInnerHTML={{ __html: description }}></p>
                {tel && (
                    <div className="tel">
                        <span>{labelText}</span>
                        <p>{tel}</p>
                    </div>
                )}
                {buttons}
            </div>
        </>
    );
};

export default Introduction;
