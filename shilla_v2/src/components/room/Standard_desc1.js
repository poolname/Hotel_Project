import React from 'react';

const Standard_desc1 = () => {
    
    return (
        <div className="guide">
            <div className="list">
                <h4>취소/변경/노쇼(No-show)</h4>
                <div className="txt-wrap">
                    <ul className="txt">
                        <li>    
                            숙박 예정일 1일 전 18시까지는 위약금 없음
                        </li>
                        <li>
                            숙박 예정일 1일 전 18시 이후 취소/변경/노쇼 발생 시 <br />
                            <strong>
                                * 성수기(5월~10월, 12월24일~31일) : 최초 1일 숙박 요금의 80%가 위약금으로 부과 <br />
                                * 비수기(성수기 외 기간) : 최초 1일 숙박 요금의 10%가 위약금으로 부과
                            </strong>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Standard_desc1;