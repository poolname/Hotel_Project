import React from "react";
import OfferDetail1_itembar from "./OfferDetail1_itembar";

const OfferDetail1_fitness = () => {
    const ftsinfo = [
        " 체련장(Gym), 실내 수영장, 실내 사우나(유료시설)는 매월 3번째 수요일 정기 휴무입니다. (세 번째 수요일이 공휴일일 경우, 네번째 수요일로 변경됩니다.)",
        "체련장은 만 16세 이상, 실내 사우나는 만 13세 이상부터 이용가능합니다.",
        " 실내 수영장은 성인 고객 전용 시설로서, 안전을 위해 만 13세 이상인 고객에 한해 입장 가능합니다.",
        " (단, 주말 및 공휴일에는 성인 보호자의 보호 하에 만 13세 미만인 고객이 입장 가능하며, 신장 140cm 미만인 고객은 성인 보호자의 보호 하에 구명조끼 착용 시 입장 가능합니다.)",
        "수영장에서 다이빙은 금지되어 있습니다.",
        "적정 인원 초과 시 이용을 위해 대기하실 수 있습니다.",
    ];
    return (
        <div>
            {/* <!-- 안내사항 --> */}
            <div className="section-title">피트니스 클럽 이용안내</div>
            <ul className="pkg-fitness">
                {ftsinfo.map((item, idx) => (
                    <OfferDetail1_itembar data={item} key={item} />
                ))}
            </ul>
        </div>
    );
};

export default OfferDetail1_fitness;
