import { Link } from 'react-router-dom';

const MapPopUp = ( {propImage, propBtn} ) => {

    return (
        <div className="lypop" data-lyopen="pop-map">
            <div className="lypop-wp mid cabanaBtn">
                <div className="lypop-content">
                    <div className="lypop-title">
                        <strong>{propBtn}</strong>
                        <Link to="#self" className="lypop-close" data-lyclose="pop-map"><span className="hide">닫기</span></Link>
                    </div>
                    <div className="lypop-ct">
                        <div className="img-wrap">
                            <img src={propImage} alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
    
}

export default MapPopUp;
