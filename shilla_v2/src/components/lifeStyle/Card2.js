const Card2 = () => {
    return (
        <div className="info-wrap flex">
            <div className="card">
                <strong>A코스 : 4.12Km</strong>
                <div className="img-wrap">
                    <img src="../../img/sub/R0000002471E_KR.jpg" alt=""/>
                </div>
                <div className="txt-wrap">
                    <p className="main">호텔 정문 → 장충 리틀 야구장<br/>→ 남산둘레길 진입 계단 → 남산 북측 순환로</p>
                </div>
            </div>
            <div className="card">
                <strong>B코스 : 4.6Km</strong>
                <div className="img-wrap">
                    <img src="../../img/sub/R0000002471O_KR.jpg" alt=""/>
                </div>
                <div className="txt-wrap">
                    <p className="main">호텔 정문 → 국립극장/남산공원<br/>→ 남산 북측 순환로/둘레길 시작점 (버스정류장)</p>
                </div>
            </div>
        </div>
    )
}

export default Card2