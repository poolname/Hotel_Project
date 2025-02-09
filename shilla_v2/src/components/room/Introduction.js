import { Link } from 'react-router-dom';

const Introduction = ( { introItem } ) => {
    return (
        <div className="Introduction" key={introItem}>
            <h3 className="room-title"> {introItem.title} </h3>
            <p className="room-top-txt"> {introItem.description} </p>
            <div className="txt">
                {
                    Array.isArray(introItem.subDescription)
                        ? introItem.subDescription.map((txt, i) => (
                            <p className="txt room-sub" key={i}>{txt}</p>
                        ))
                        : introItem.subDescription
                }
            </div>
            <div className="btn-wrap type1">
                <Link to="/reserve" className="btn btn-02">객실 예약하기</Link>

                <button className="btn btn-01" data-lybtn="pop-eudInfo3"><span>객실 도면</span></button>
            </div>
        </div>
    )
} 

export default Introduction;