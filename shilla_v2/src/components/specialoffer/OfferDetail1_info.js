import React from "react";
import OfferDetail1_itembar from "./OfferDetail1_itembar";

const OfferDetail1_info = () => {
    const info = [
        { id: 1, elem: "상기 이미지들은 연출된 예로 실제와 다를 수 있습니다." },
        {
            id: 2,
            elem: "본 상품은 카드사 할인 등의 중복 할인 혜택이 적용되지 않습니다.",
        },
        {
            id: 3,
            elem: "본 상품은 성인 2인 1실 기준이며, 요금에는 10% 부가가치세가 부과됩니다.",
        },
        { id: 4, elem: "본 상품 투숙 시 투숙 인원을 추가할 수 없습니다." },
        { id: 5, elem: "Check-in은 오후 4시, Check-out은 오후 1시까지입니다." },
        {
            id: 6,
            elem: "패키지에 포함된 혜택 및 선물은 1박당 1회(또는 1개) 제공됩니다.",
        },
        { id: 7, elem: "주류는 성인 고객에 한해 이용 가능합니다." },
        {
            id: 8,
            elem: "호텔 부대시설은 감염병 예방법, 재난 안전법 등 관련 법령 및 방역당국 등의 규제,조치 사항 등에 따라 사전 고지 없이 이용이 제한되거나 변경될 수 있습니다.",
        },
    ];
    const cancel = [
        {
            id: 1,
            elem: "숙박 예정일 2일 전 18시까지는 위약금 없이 취소 및 변경 가능합니다.",
        },
        { id: 2, elem: "숙박 예정일 1일 전 18시까지 취소 및 변경 시," },
        {
            id: 3,
            elem: "· 성수기(5월~10월, 12월 24일~31일) : 최초 1일 숙박 요금의 80% 위약금으로 부과",
        },
        {
            id: 4,
            elem: "· 비수기(성수기 외 기간) : 최초 1일 숙박 요금의 10% 위약금으로 부과",
        },
        {
            id: 5,
            elem: "숙박 예정일 1일 전 18시 이후 취소, 변경 및 노쇼(No-show) 발생 시",
        },
        {
            id: 6,
            elem: "· 성수기(5월~10월, 12월 24일~31일) 주중에는 최초 1일 숙박 요금의 80%, 주말(금, 토, 공휴일 전일)에는 최초 1일 숙박 요금의 90%가 위약금으로 부과",
        },
        {
            id: 7,
            elem: "· 비수기(성수기 외 기간) 주중에는 최초 1일 숙박 요금의 20%, 주말(금, 토, 공휴일 전일)에는 최초 1일 숙박 요금의 30%가 위약금으로 부과",
        },
    ];
    return (
        <div className="pkg-info">
            <p>안내사항</p>
            <ul className="info-txt">
                {info.map(item => (
                    <OfferDetail1_itembar data={item.elem} key={item.id} />
                ))}
                <p>
                    <b>□ 취소/변경 및 노쇼(No-show) 안내</b>
                </p>
                {cancel.map(item => (
                    <OfferDetail1_itembar data={item.elem} key={item.id} />
                ))}
            </ul>
        </div>
    );
};

export default OfferDetail1_info;
