import { Link } from 'react-router-dom';
import '../../scss/reset.css';
import '../../scss/common.scss';
import '../../scss/sub02.scss';

const RoomCont2 = ( { space } ) => {

    return (
        <>
            {/* 스탠다드부터 라운지까지 카드 반복 함수 */}
            {
                space.map ( (item, index) => {
                    return <div className="room-wrap standard" key={index}>
                        <h3>{item.type}</h3>
                        <ul className="room-box-wrap">
                            {
                                item.RoomBox.map ( (roomEntry, idx) => {
                                    return <li className="room-box" key={idx}>
                                            <Link to={roomEntry.link}>
                                                <div className="img-wrap"> 
                                                    <img src={roomEntry.img} alt="" />
                                                </div>  
                                                <div className="txt-wrap">
                                                    <h4>{roomEntry.title}</h4>
                                                    <p className="room-top-txt">{roomEntry.subTitle}</p>
                                                    <p>{roomEntry.description1}</p>
                                                    <p>{roomEntry.description2}</p>
                                                </div>
                                                <p className="view-more">자세히보기</p>
                                            </Link>
                                    </li>
                                })
                            }
                        </ul>
                    </div>
                })
            }
        </>
    )
}

export default RoomCont2;