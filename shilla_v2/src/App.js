// setting
import React from 'react';
import { Route, Routes, useLocation } from "react-router-dom";

// main
import Main from "./components/main/Main";

// board
import BoardList from "./components/board/BoardList";
import BoardDetail from "./components/board/BoardDetail";
import BoardJoin from "./components/board/BoardJoin";
import BoardModify from "./components/board/BoardModify";
import BoardTemp from "./components/board/Temp";

// info
import Info from "./components/info/Info";

// location
import Location from "./components/location/Location";

// lifestyle
import LifeStyle from "./components/lifeStyle/LifeStyle";
import OutdoorPool from "./components/lifeStyle/OutdoorPool";
import OutdoorPool2 from "./components/lifeStyle/OutdoorPool2";
import Fitness from "./components/lifeStyle/Fitness";
import Fitness2 from "./components/lifeStyle/Fitness2";
import Fitness3 from "./components/lifeStyle/Fitness3";
import Fitness4 from "./components/lifeStyle/Fitness4";
import WalkingTrails from "./components/lifeStyle/WalkingTrails";
import Jogging from "./components/lifeStyle/Jogging";
import Shopping from "./components/lifeStyle/Shopping";
import Shopping2 from "./components/lifeStyle/Shopping2";

// wedding & party
import Party from "./components/party/Party";
import Wedding from "./components/party/Wedding";
import Wedding2 from "./components/party/Wedding2";
import Wedding3 from "./components/party/Wedding3";
import CorporateParty from "./components/party/CorporateParty";
import CorporateParty2 from "./components/party/CorporateParty2";
import CorporateParty3 from "./components/party/CorporateParty3";
import FamilyParty from "./components/party/FamilyParty";
import FamilyParty2 from "./components/party/FamilyParty2";

// dining
import Dining from "./components/dining/Dining";
import Restaurant from "./components/dining/Restaurant";
import Restaurant2 from "./components/dining/Restaurant2";
import Restaurant3 from "./components/dining/Restaurant3";
import Restaurant4 from "./components/dining/Restaurant4";
import Restaurant5 from "./components/dining/Restaurant5";
import Lounge from "./components/dining/Lounge";
import Lounge2 from "./components/dining/Lounge2";
import Bakery from "./components/dining/Bakery";

// login
import Login from "./components/login/Login";

// join
import JoinComp1 from "./components/join/JoinComp1";
import JoinComp2 from "./components/join/JoinComp2";
import Welcome from "./components/join/Welcome";

// offer
import SpecialOffer from "./components/specialoffer/SpecialOffer";
import OfferMain from "./components/specialoffer/OfferMain";
import OfferDetail from "./components/specialoffer/OfferDetail";
import Event from "./components/specialoffer/Event";
import EventDetail1 from "./components/specialoffer/EventDetail1";
import EventDetail2 from "./components/specialoffer/EventDetail2";
import EventDetail3 from "./components/specialoffer/EventDetail3";
import EventDetail4 from "./components/specialoffer/EventDetail4";
import EventDetail5 from "./components/specialoffer/EventDetail5";
import EventDetail6 from "./components/specialoffer/EventDetail6";
import EventDetail7 from "./components/specialoffer/EventDetail7";
import EventDetail8 from "./components/specialoffer/EventDetail8";
import EventDetail9 from "./components/specialoffer/EventDetail9";
import EventDetail10 from "./components/specialoffer/EventDetail10";
import EventDetail11 from "./components/specialoffer/EventDetail11";
import EventDetail12 from "./components/specialoffer/EventDetail12";
import EventDetail13 from "./components/specialoffer/EventDetail13";
import EventDetail14 from "./components/specialoffer/EventDetail14";
import EventDetail15 from "./components/specialoffer/EventDetail15";
import EventDetail16 from "./components/specialoffer/EventDetail16";

// admin
import AdminDashboard from "./components/admin/dashboard/AdminDashboard";
import AdminRoom from "./components/admin/room/AdminRoom";
import AdminRoomDetail from "./components/admin/room/AdminRoomDetail";
import AdminMember from "./components/admin/member/AdminMember";
import AdminCont3Detail from "./components/admin/member/AdminCont3Detail";
import AdminReservation from "./components/admin/reservation/AdminReservation";
import AdminCsTemp from "./components/admin/cs/AdminCsTemp";
import AdminCs from "./components/admin/cs/AdminCs";
import AdminCsdetail from "./components/admin/cs/AdminCsDetail";
// import AdminCsModify from "./components/admin/cs/AdminCsModify";
import AdminNotice from "./components/admin/notice/AdminNotice";
import AdminNoticeMain from "./components/admin/notice/AdminCont5_main";
import AdminRegister from "./components/admin/notice/AdminCont5_register";
import AdminModify from "./components/admin/notice/AdminCont5_Modify";
import AdminSales from "./components/admin/sales/AdminSales";

// myPage
import MyPageTemp from "./components/myPage/MyPageTemp";
import MyInfo from "./components/myPage/MyInfo";
import MyInfoChg from "./components/myPage/MyInfoChg";
import MyReservation from "./components/myPage/MyReservation";
import MyInquiry from "./components/myPage/MyInquiry";

// reservation
import ResOffer from "./components/reservation/ResOffer";
import PaymentPage from "./components/reservation/PaymentPage";
import Res_search from "./components/reservation/Res_search";
import Res_temp from "./components/reservation/Res_temp";
import ResMainAllRoomDetail from "./components/reservation/ResMainAllRoomDetail";
import ResMainAllRoomPayment from "./components/reservation/ResMainAllRoomPayment";
import Res_detail from "./components/reservation/Res_detail";
import BoonModal from "./components/reservation/BoonModal";
import RoomModal from "./components/reservation/RoomModal";

// room
import Room from "./components/room/Room";
import Standard from "./components/room/Standard";
import StandardTemp from "./components/room/StandardTemp";
import Stand_BusinessDeluxe from "./components/room/Stand_BusinessDeluxe";
import Stand_BarrierFreeDeluxe from "./components/room/Stand_BarrierFreeDeluxe";
import Stand_GrandCornerDeluxe from "./components/room/Stand_GrandCornerDeluxe";

import ExecutiveTemp from "./components/room/ExecutiveTemp";
import Executive from "./components/room/Executive";
import Exec_GrandDeluxe from "./components/room/Exec_GrandDeluxe";
import Suite from "./components/room/Suite";
import SuiteTemp from "./components/room/SuiteTemp";
import Suite_Korean from "./components/room/Suite_Korean";
import Suite_Corner from "./components/room/Suite_Corner";
import Suite_Premier from "./components/room/Suite_Premier";
import Suite_Royal from "./components/room/Suite_Royal";
import Suite_Shilla from "./components/room/Suite_Shilla";
import Suite_Presidential from "./components/room/Suite_Presidential";

import Lounge_ExecutiveLounge from "./components/room/Lounge_ExecutiveLounge";

//notice
// import Noticelist from "./components/notice/Noticelist";
import NoticeTemp from "./components/notice/NoticeTemp";
import Noticelist from "./components/notice/Noticelist";
import Noticedetail from "./components/notice/Noticedetail";

//find
import Findid from "./components/find/Findid";
import Findpw from "./components/find/Findpw";
import EventTemp from "./components/specialoffer/EventTemp";

function ScrollToTop() {
    const location = useLocation();

    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);

    return null;
}

function App() {
    return (
        <>
            <ScrollToTop />{/* 스크롤 상단 이동 컴포넌트 */}
            <Routes>
                {/* 메인 */}
                <Route index element={<Main></Main>}></Route>
                {/* 관리자페이지 */}
                {/* <Route path="/admin" element={<AdminTemp></AdminTemp>}></Route> */}
                <Route path="admin/dashboard" element={<AdminDashboard />} />
                <Route path="admin/room" element={<AdminRoom />} />
                <Route
                    path="admin/room/detail/:id"
                    element={<AdminRoomDetail />}
                />
                <Route path="admin/member" element={<AdminMember />} />
                <Route path="admin/member/:id" element={<AdminCont3Detail />} />
                <Route
                    path="admin/reservation"
                    element={<AdminReservation />}
                />
                <Route path="admin/notice" element={<AdminNotice />}>
                    <Route path="" element={<AdminNoticeMain />} />
                    <Route path="register" element={<AdminRegister />} />
                    <Route path="modify/:id" element={<AdminModify />} />
                </Route>
                <Route path="/admin/cs" element={<AdminCsTemp />}>
                    <Route path="" element={<AdminCs />} />
                    <Route path="detail/:num" element={<AdminCsdetail />} />
                    {/* <Route path="modify/:board_id" element={<AdminCsModify />} /> */}
                </Route>
                <Route path="admin/sales" element={<AdminSales />} />

                {/* 마이페이지 */}
                <Route path="/myPage" element={<MyPageTemp></MyPageTemp>}>
                    <Route path="" element={<MyInfo />} />
                    <Route path="myInfoChg" element={<MyInfoChg />} />
                    <Route path="myReservation" element={<MyReservation />} />
                    <Route path="myInquiry" element={<MyInquiry />} />
                </Route>
                {/* 로그인 */}
                <Route path="/login" element={<Login></Login>}></Route>
                {/* 회원가입 */}
                <Route path="/Join" element={<JoinComp1></JoinComp1>}></Route>
                <Route path="/myinfo" element={<JoinComp2></JoinComp2>}></Route>
                <Route path="/Welcome" element={<Welcome></Welcome>}></Route>
                {/* 연락처 */}
                <Route path="/info" element={<Info></Info>}></Route>
                {/* 오시는길 */}
                <Route path="/location" element={<Location></Location>}></Route>
                {/* 문의하기 */}
                <Route path="/board" element={<BoardTemp />}>
                    <Route path="" element={<BoardList />} />
                    <Route path="detail/:num" element={<BoardDetail />} />
                    <Route path="join" element={<BoardJoin />} />
                    <Route path="modify/:num" element={<BoardModify />} />
                </Route>

                {/* 스페셜오퍼 */}
                <Route path="/specialOffer" element={<SpecialOffer />}>
                    <Route path="" element={<OfferMain />} />
                    <Route path="detail/:id" element={<OfferDetail />} />
                </Route>
                <Route path="/event" element={<EventTemp />}>
                    <Route path="" element={<Event />} />
                    <Route path="detail/1" element={<EventDetail1 />} />
                    <Route path="detail/2" element={<EventDetail2 />} />
                    <Route path="detail/3" element={<EventDetail3 />} />
                    <Route path="detail/4" element={<EventDetail4 />} />
                    <Route path="detail/5" element={<EventDetail5 />} />
                    <Route path="detail/6" element={<EventDetail6 />} />
                    <Route path="detail/7" element={<EventDetail7 />} />
                    <Route path="detail/8" element={<EventDetail8 />} />
                    <Route path="detail/9" element={<EventDetail9 />} />
                    <Route path="detail/10" element={<EventDetail10 />} />
                    <Route path="detail/11" element={<EventDetail11 />} />
                    <Route path="detail/12" element={<EventDetail12 />} />
                    <Route path="detail/13" element={<EventDetail13 />} />
                    <Route path="detail/14" element={<EventDetail14 />} />
                    <Route path="detail/15" element={<EventDetail15 />} />
                    <Route path="detail/16" element={<EventDetail16 />} />
                </Route>

                {/* 아이디, 비밀번호 찾기 */}
                <Route path="/findid" element={<Findid />} />
                <Route path="/findpw" element={<Findpw />} />

                {/* 공지사항 */}

                <Route path="/notice" element={<NoticeTemp />}>
                    <Route path="" element={<Noticelist />} />
                    <Route path="detail/:id" element={<Noticedetail />} />
                </Route>

                {/* 예약페이지 */}
                <Route path="/reserve" element={<Res_temp />}>
                    <Route path="" element={<Res_search />} />
                    <Route path="detail" element={<Res_detail />} />
                    {/* <Route path=":id" element={<ResOfferRoomId />} /> */}
                    <Route
                        path="detailallroom"
                        element={<ResMainAllRoomDetail />}
                    />
                    <Route
                        path="detail/paymentallroom"
                        element={<ResMainAllRoomPayment />}
                    />
                    <Route path="detail/payment" element={<PaymentPage />} />
                </Route>
                <Route path="/reserve/:product_id" element={<ResOffer />} />
                <Route path="/reserve/pop" element={<BoonModal />} />
                <Route path="/reserve/pop2" element={<RoomModal />} />

                {/* 객실 */}
                <Route path="/room" element={<Room />} />

                {/* 스탠다드 */}
                <Route path="/standard" element={<StandardTemp />}>
                    <Route path="" element={<Standard />} />
                    <Route
                        path="businessDeluxe"
                        element={<Stand_BusinessDeluxe />}
                    />
                    <Route
                        path="barrierFreeDeluxe"
                        element={<Stand_BarrierFreeDeluxe />}
                    />
                    <Route
                        path="grandCornerDeluxe"
                        element={<Stand_GrandCornerDeluxe />}
                    />
                </Route>

                {/* 이그제큐티브 */}
                <Route path="/executive" element={<ExecutiveTemp />}>
                    <Route path="" element={<Executive />} />
                    <Route
                        path="execGrandDeluxe"
                        element={<Exec_GrandDeluxe />}
                    />
                </Route>

                {/* 스위트 */}
                <Route path="/suite" element={<SuiteTemp />}>
                    <Route path="" element={<Suite />} />
                    <Route path="korean" element={<Suite_Korean />} />
                    <Route path="corner" element={<Suite_Corner />} />
                    <Route path="premier" element={<Suite_Premier />} />
                    <Route path="royal" element={<Suite_Royal />} />
                    <Route path="shilla" element={<Suite_Shilla />} />
                    <Route
                        path="presidential"
                        element={<Suite_Presidential />}
                    />
                </Route>

                {/* 이그제큐티브 라운지 */}
                <Route
                    path="/executiveLounge"
                    element={<Lounge_ExecutiveLounge />}
                />

                {/* 라이프스타일 */}
                <Route path="/lifeStyle" element={<LifeStyle />}></Route>
                <Route path="/outdoorPool" element={<OutdoorPool />}></Route>
                <Route path="/outdoorPool2" element={<OutdoorPool2 />}></Route>
                <Route path="/fitness" element={<Fitness />}></Route>
                <Route path="/fitness2" element={<Fitness2 />}></Route>
                <Route path="/fitness3" element={<Fitness3 />}></Route>
                <Route path="/fitness4" element={<Fitness4 />}></Route>
                <Route
                    path="/walkingTrails"
                    element={<WalkingTrails />}
                ></Route>
                <Route path="/jogging" element={<Jogging />}></Route>
                <Route path="/shopping" element={<Shopping />}></Route>
                <Route path="/shopping2" element={<Shopping2 />}></Route>

                {/* 웨딩&연회 */}
                <Route path="/party" element={<Party />}></Route>
                <Route path="/wedding" element={<Wedding />}></Route>
                <Route path="/wedding2" element={<Wedding2 />}></Route>
                <Route path="/wedding3" element={<Wedding3 />}></Route>
                <Route
                    path="/corporateParty"
                    element={<CorporateParty />}
                ></Route>
                <Route
                    path="/corporateParty2"
                    element={<CorporateParty2 />}
                ></Route>
                <Route
                    path="/corporateParty3"
                    element={<CorporateParty3 />}
                ></Route>
                <Route path="/familyParty" element={<FamilyParty />}></Route>
                <Route path="/familyParty2" element={<FamilyParty2 />}></Route>

                {/* 다이닝 */}
                <Route path="/dining" element={<Dining />}></Route>
                <Route path="/restaurant" element={<Restaurant />}></Route>
                <Route path="/restaurant2" element={<Restaurant2 />}></Route>
                <Route path="/restaurant3" element={<Restaurant3 />}></Route>
                <Route path="/restaurant4" element={<Restaurant4 />}></Route>
                <Route path="/restaurant5" element={<Restaurant5 />}></Route>
                <Route path="/Lounge" element={<Lounge />}></Route>
                <Route path="/Lounge2" element={<Lounge2 />}></Route>
                <Route path="/Bakery" element={<Bakery />}></Route>
            </Routes>
        </>
    );
}

export default App;
