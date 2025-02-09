const InfoTable = ({propData}) => {

    return(
        <div className="info-wrap">
            <div className="schedule">
                <p className="tit">Cabana 이용 안내</p>
                <div className="table">
                    <table className="col-6">
                        <caption>Cabana 이용 안내</caption>
                        <colgroup>
                            {propData.headers.map((data, index)=> (
                                <col key={index} />
                            ))}
                        </colgroup>
                        <thead>
                            <tr>
                                {propData.headers.map((head, index)=> (
                                    <th key={index} scope="col">{head}</th>
                                ))} 
                            </tr>
                        </thead>
                        <tbody> 
                            {propData.rows.map((row, rowIndex) => (
                                <tr key={rowIndex}>
                                    <th scope="row">{row.구분}</th>
                                    {row.data.map((item, colIndex) => (
                                        <td key={colIndex}>{item}</td>
                                    ))}
                                </tr>
                            ))}
                            <tr>
                                <th scope="row">혜택</th>
                                <td colSpan={propData.headers.length - 1} dangerouslySetInnerHTML={{ __html: propData.혜택 }} />
                            </tr>
                        </tbody>
                    </table>
                </div>
                <p className="desc">카바나 요금 외 입장료는 별도 부과됩니다. (시즌별 입장료 상이)</p>
            </div>
        </div>
    )
}

export default InfoTable