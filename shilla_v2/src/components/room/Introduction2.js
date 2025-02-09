const Introduction2 = ( { introItem } ) => {
    return (
        <div className="Introduction" key={introItem}>
            <h3 className="room-title"> {introItem.title} </h3>
            <p className="room-top-txt"> {introItem.description} </p>
            <div className="txt">{introItem.subDescription} </div>
            <div className="btn-wrap type2">
                <button className="btn btn-01" data-lybtn="pop-eudInfo3"><span>Floor Map</span></button>
            </div>
        </div>
    )
} 

export default Introduction2;