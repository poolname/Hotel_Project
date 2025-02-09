const GroupExercise = () => {

    return (
        <div className="card full">
            <strong>G.X (그룹 엑서사이즈)</strong>
            <div className="img-wrap">
                <img src="../../img/sub/R00000009MEE_KR.gif" alt="" />
            </div>
            <div className="txt-wrap">
                <p className="main">
                    평생 회원제의 특성에 맞게 개인의 취향과 운동 적성을 고려한 다양한 프로그램을 운영합니다.<br/>
                    웰빙 라이프를 위한 그룹 엑서사이즈와 힐링을 위한 스페셜 운동 프로그램으로 구성되어 있습니다.
                </p>
            </div>
            <ul className="rule mt-20">
                <li>힐링 운동 프로그램 : Relaxation과 Balance를 목적으로 요가, 매트 필라테스, 코어 스트레칭을 진행합니다.</li>
                <li>리드믹 운동 프로그램 : 율동적 요소와 즐거움을 위합 댄스 위주의 수업으로 전 세계적으로 유명한 줌바 댄스와 에어로빅 믹스를 진행합니다.</li>
            </ul>
            <div className="schedule">
                <p className="tit">Group Exercise schedule</p>
                <div className="table">
                    <table className="col-6">
                        <caption>Group Exercise schedule</caption>
                        <colgroup>
                            <col/>
                            <col/>
                            <col/>
                            <col/>
                            <col/>
                            <col/>
                        </colgroup>
                        <thead>
                            <tr>
                                <th scope="col">시간</th>
                                <th scope="col">월</th>
                                <th scope="col">화</th>
                                <th scope="col">수</th>
                                <th scope="col">목</th>
                                <th scope="col">금</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">07:30</th>
                                <td></td>
                                <td></td>
                                <td>Core & Stretch</td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <th scope="row">09:30</th>
                                <td></td>
                                <td>Hatha Yoga</td>
                                <td></td>
                                <td></td>
                                <td>Ring Core</td>
                            </tr>
                            <tr>
                                <th scope="row">10:00</th>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td>Dance Fit</td>
                                <td></td>
                            </tr>
                            <tr>
                                <th scope="row">15:00</th>
                                <td></td>
                                <td>Ring Core</td>
                                <td></td>
                                <td></td>
                                <td>Core & Stretch</td>
                            </tr>
                            <tr>
                                <th scope="row">15:30</th>
                                <td>Vinyasy Yoga</td>
                                <td></td>
                                <td></td>
                                <td>Dance Aero</td>
                                <td></td>
                            </tr>
                            <tr>
                                <th scope="row">20:00</th>
                                <td>Flow Yoga</td>
                                <td></td>
                                <td>Dance Fit</td>
                                <td></td>
                                <td></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <p className="desc">상기 수업은 클럽 사정에 의해 변경될 수 있습니다.</p>
                <p className="desc">수업 30분전 체육관 입구에서 대기리스트 작성하오니 참고 부탁드립니다.</p>
                <p className="desc">수업은 50분간 진행됩니다.</p>
            </div>
        </div>
    )
}

export default GroupExercise