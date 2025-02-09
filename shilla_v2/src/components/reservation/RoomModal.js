import React from 'react'
import { Link } from "react-router-dom";

const RoomModal = () => {
  return (
    <div className="container pop">
        <div className="center">
            <div className="depth3-tab-wrap pop">
                <div className="tab-contents">
                    <div className="tab-cont cont1 on">
                        <div className="sub-title">
                            <h2>디럭스</h2>
                        </div>
                        <div className="gallery">
                            <div className="swiper mySwiper2">
                                <div className="swiper-wrapper">
                                    <div className="swiper-slide">
                                        <img src="../../img/sub/roomStandardDelux01.jpg"/>
                                    </div>
                                    <div className="swiper-slide">
                                        <img src="../../img/sub/roomStandardDelux02.jpg"/>
                                    </div>
                                    <div className="swiper-slide">
                                        <img src="../../img/sub/roomStandardDelux03.jpg"/>
                                    </div>
                                    <div className="swiper-slide">
                                        <img src="../../img/sub/roomStandardDelux04.jpg"/>
                                    </div>
                                </div>
                                {/* <div className="swiper-button-next"></div>
                                <div className="swiper-button-prev"></div> */}
                            </div>
                            {/* <div thumbsSlider="" className="swiper mySwiper">
                                <div className="swiper-wrapper">
                                    <div className="swiper-slide">
                                        <img src="../../img/sub/roomStandardDelux01.jpg"/>
                                    </div>
                                    <div className="swiper-slide">
                                        <img src="../../img/sub/roomStandardDelux02.jpg"/>
                                    </div>
                                    <div className="swiper-slide">
                                        <img src="../../img/sub/roomStandardDelux03.jpg"/>
                                    </div>
                                    <div className="swiper-slide">
                                        <img src="../../img/sub/roomStandardDelux04.jpg"/>
                                    </div>
                                </div>
                            </div> */}
                        </div>
                        <div className="context">
                            <div className="Introduction">
                                <h3 className="room-title">디럭스</h3>
                                <p className="room-top-txt">모던한 콘셉트의 아늑한 공간 안에 편안한 휴식을 선사하는 침구와 업무를 위한 책상을 갖추어 효율적인 구성이 돋보이는 객실입니다.</p>
                                <p className="txt">
                                    안락한 공간이 주는 편안함과 함께 일상에서 벗어난 듯한 특별한 휴식을 경험해보시기 바랍니다.
                                </p>
                            </div>
                            <ul className="info">
                                <h3>객실 정보</h3>
                                <li className="list">
                                    <h4>위치</h4>
                                    <p className="txt">서울신라호텔 7~22층</p>
                                </li>
                                <li className="list">
                                    <h4>전망</h4>
                                    <p className="txt">
                                        남산 또는 시티 뷰
                                    </p>
                                </li>
                                <li className="list">
                                    <h4>침대</h4>
                                    <p className="txt"> 더블(킹 사이즈), 트윈</p>
                                </li>
                                <li className="list">
                                    <h4>크기</h4>
                                    <p className="txt">
                                        36㎡
                                    </p>
                                </li>
                                <li className="list">
                                    <h4>룸구성</h4>
                                    <p className="txt">
                                        침실 1, 욕실 1, 화장실1
                                    </p>
                                </li>
                                <li className="list">
                                    <h4>문의</h4>
                                    <p className="txt">
                                        02-2230-3310
                                    </p>
                                </li>
                            </ul>
                            <ul className= "amenity">
                                <h3>객실 어메니티</h3>
                                <li className="list">
                                    <h4>Bath Room</h4>
                                    <div className="txt-wrap">
                                        <ul className="txt">
                                            <li>100% 코튼 목욕 가운</li>
                                            <li>비상벨</li>
                                            <li>레인 샤워</li>
                                            <li>핸드 타월</li>
                                            <li>페이스 타월</li>
                                            <li>배스 타월</li>
                                            <li>화장품(몰튼 브라운)</li>
                                            <li>머리빗</li>
                                            <li>코튼 세트(면봉 & 화장솜)</li>
                                            <li>원격 조정 비데 일체형 변기</li>
                                            <li>헤어 드라이어</li>
                                            <li>디지털 체중계</li>
                                        </ul>
                                    </div>
                                </li>
                                <li className="list">
                                    <h4>Bed Room</h4>
                                    <div className="txt-wrap">
                                        <ul className="txt">
                                            <li>스마트 TV</li>
                                            <li>Technology Kit(HDMI, USB, LAN)</li>
                                            <li>개별 냉·난방 조절기</li>
                                            <li>자동 블라인드</li>
                                            <li>전화기</li>
                                            <li>시몬스 프리미엄 침대(Beauty Rest)</li>
                                            <li>거위털 이불 & 베개</li>
                                            <li>턴다운 서비스</li>
                                            <li>기능성 베개</li>
                                            <li>잡지</li>
                                        </ul>
                                    </div>
                                </li>
                                <li className="list">
                                    <h4>Private Bar</h4>
                                    <div className="txt-wrap">
                                        <ul className="txt">
                                            <li>냉장고</li>
                                            <li>얼음 서비스</li>
                                            <li>전기 주전자</li>
                                            <li>와인잔</li>
                                            <li>위스키잔</li>
                                            <li>물컵</li>
                                            <li>찻잔</li>
                                            <li>무료 티</li>
                                            <li>무료 커피</li>
                                            <li>무료 생수</li>
                                        </ul>
                                    </div>
                                </li>
                                <li className="list">
                                    <h4>Closet</h4>
                                    <div className="txt-wrap">
                                        <ul className="txt">
                                            <li>개인 금고</li>
                                            <li>전신 거울</li>
                                            <li>슬리퍼(남, 여)</li>
                                            <li>우산</li>
                                            <li>구두 클리너</li>
                                        </ul>
                                    </div>
                                </li>
                            </ul>
                            <div className="guide">
                                <h3>객실 이용 안내</h3>
                                <div className="list">
                                    <h4>체크인/체크아웃</h4>
                                    <div className="txt-wrap">
                                        <ul className="txt">
                                            <li>체크인 : 오후 3시 이후</li>
                                            <li>체크아웃 : 오전 11시까지 </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="list">
                                    <h4>조식 이용 안내</h4>
                                    <div className="txt-wrap">
                                        <ul className="txt">
                                            <li>더 파크뷰 06:00~10:00(주중/주말/공휴일)</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="list">
                                    <h4>취소/변경/노쇼(No-show)</h4>
                                    <div className="txt-wrap">
                                        <ul className="txt">
                                            <li>숙박 예정일 1일 전 18시까지는 위약금 없음</li>
                                            <li>숙박 예정일 1일 전 18시 이후 취소/변경/노쇼 발생 시<br/>
                                            <strong>* 성수기(5월~10월, 12월24일~31일) : 최초 1일 숙박 요금의 80%가 위약금으로 부과<br/>
                                            * 비수기(성수기 외 기간) : 최초 1일 숙박 요금의 10%가 위약금으로 부과</strong>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="list">
                                    <h4>객실 이용</h4>
                                    <div className="txt-wrap">
                                        <ul className="txt">
                                            <li>55인치 스마트 TV(위성 TV 48개 채널)</li>
                                            <li>50~100Mbps 초고속 유·무선(wifi) 인터넷 무료 </li>
                                            <li>220V, 110V 전압 사용 가능 </li>
                                            <li>커피·차 티백 무료 제공 </li>
                                            <li>엑스트라 베드 1개 추가 60,000원/1박</li>
                                            <li>베이비 크립(무료)</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="list">
                                    <h4>룸서비스</h4>
                                    <div className="txt-wrap">
                                        <ul className="txt">
                                            <li>객실에서 즐기실 수 있는 다양한 룸서비스 메뉴가 준비되어 있습니다.</li>
                                            <li>식사 및 음료 : 24시간 서비스</li>
                                            <li>중식, 일식 : 점심 12:00~13:30, 저녁 17:30~20:30</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="list">
                                    <h4>부대시설</h4>
                                    <div className="txt-wrap">
                                        <p className="txt">
                                            <strong>투숙기간 내 무료 주차 가능</strong>
                                        </p>
                                        <ul className="txt">
                                            <strong>[피트니스 클럽 이용 안내]</strong>
                                            <li>체육관(Gym) 무료 이용(만 16세 이상 입장 가능)</li>
                                            <li>실내 수영장 무료 이용(만 13세 이상 입장 가능)
                                            </li>
                                            <li>사우나 이용 시 유료(만 13세 이상 입장 가능)</li>
                                            <li>피트니스 클럽은 매월 세 번째 수요일 정기휴일</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="desc-wrap">
                                    <p className="desc">
                                        실내 수영장은 주말 및 공휴일에는 성인 보호자의 보호 하에 만 13세 미만인 고객이 이용 가능하며, 신장 140cm 미만인 고객은 성인 보호자의 보호 하에 구명조끼 착용 시 이용 가능합니다.
                                    </p>
                                    <p className="desc">
                                        피트니스 클럽은 매월 세 번째 수요일 정기휴일입니다.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="tab-cont cont2">
                        <div className="sub-title">
                            <h2>비즈니스 디럭스</h2>
                            <ul className="location">
                                <li><Link to="../../html/index.html">홈</Link></li>
                                <li><Link to="../../html/sub/sub02.html">객실</Link></li>
                                <li><Link to="#self">비즈니스 디럭스</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="tab-cont cont3">
                        <div className="sub-title">
                            <h2>배리어프리 비즈니스 디럭스</h2>
                            <ul className="location">
                                <li><Link to="../../html/index.html">홈</Link></li>
                                <li><Link to="../../html/sub/sub02.html">객실</Link></li>
                                <li><Link to="#self">배리어프리 비즈니스 디럭스</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="tab-cont cont4">
                        <div className="sub-title">
                            <h2>그랜드 코너 디럭스</h2>
                            <ul className="location">
                                <li><Link to="../../html/index.html">홈</Link></li>
                                <li><Link to="../../html/sub/sub02.html">객실</Link></li>
                                <li><Link to="#self">그랜드 코너 디럭스</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default RoomModal
