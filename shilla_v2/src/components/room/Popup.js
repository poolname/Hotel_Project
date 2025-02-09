import React from 'react';

const Popup = ( { images } ) => {

    const Closepop = (e) => {
        e.preventDefault()
    }

    return (
        
        // 팝업 외부 클래스, data-lyopen 팝업을 여는 키
        <div className="lypop" data-lyopen="pop-eudInfo3">
            <div className="lypop-wp big">
                <div className="lypop-content">
                    <div className="lypop-title">
                        <strong>객실 도면</strong>
                        <a href="#" onClick={Closepop} className="lypop-close" data-lyclose="pop-eudInfo">
                            <span className="hide">닫기</span>
                        </a>
                        {/* onClick : Closepop 함수 실행 */}
                        {/* lypop-close : 제목 영역 보여줌 */}
                        {/* data-lyclose : 팝업 닫는 곳 */}
                        {/* hide : 닫기 클래스 기능 */}
                    </div>
                    <div className="lypop-ct">
                        <ul className="room-floor">
                            {images.map((image, index) => (
                                <li key={index}>
                                    <h3>{image.title}</h3>
                                    <img src={image.src} alt={image.title} />
                                    {/* ul(room-floor 안에 li의 index 키를 받는 h3(이미지 제목) 표시) */}
                                    {/* 이미지 주소, 이미지 제목 표시 */}
                                </li>
                            ))}
                        </ul>
                        <div className="btn-wrap type5">
                            <button className="btn btn-04" data-lyclose="pop-eudInfo"><span>닫기</span></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>  
    );
};

export default Popup;