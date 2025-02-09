const Introduction = ({ title, description, tel, bdNone=false, pbNone=false }) => {
    return (
        <>
            <div className={`Introduction ${bdNone ? 'bd-none' : ''} ${pbNone ? 'pb-0' : ''}`}>
                <h3 dangerouslySetInnerHTML={{ __html: title }}></h3>
                <p className="txt" dangerouslySetInnerHTML={{ __html: description }}></p>
                {tel && (  
                    <div className="tel">
                        <span>문의전화</span>
                        <p>{tel}</p>
                    </div>
                )}
            </div>
        </>
    );
};

export default Introduction;
