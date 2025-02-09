import '../../scss/reset.css';
import '../../scss/common.scss';
import '../../scss/sub02.scss';
import { Link } from 'react-router-dom';

const RoomCont1 = () => {
    return (
        <>
            {/* 전체 객실 보기 */}
            <div className="sub-title">
                <h2>전체객실보기</h2>
                <ul className="location">
                    <li><Link to="/">홈</Link></li>
                    <li><Link to="/room">전체객실보기</Link></li>
                </ul>
            </div>
            {/* 전체 객실 보기 정보 */}
            <div className="room-intro">
                <p className= "room-intro-txt">내 집과 같은 편안함으로 공간 이상의 가치가 숨쉬고 있는 신라호텔 객실</p>
                <p className="room-txt">비즈니스를 위한 최고의 서비스와 프리미엄 베드가 말할 수 없이 편안한 감촉, <br/> 한국적인 센스가 담긴 최고의 뷰와 휴양지의 안락함까지 세계 명문 호텔에서만 느낄 수 있는 수준 높은 트렌드를 만나보시기 바랍니다.</p>
            </div>
        </>
    );
}

export default RoomCont1;