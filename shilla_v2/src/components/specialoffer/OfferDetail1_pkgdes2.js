import { Link } from "react-router-dom";
import { useState } from "react";
import "../../scss/sub01_01_sub135.scss";
import OfferDetail1_pkgdes3 from "./OfferDetail1_pkgdes3";
import OfferDetail1_pop from "./OfferDetail1_pop";

const OfferDetail1_pkgdes2 = () => {
    const [activePop, setactivePop] = useState(null);
    const description = [
        {
            id: "1",
            title: "Superior Suite",
            linktag: "객실 자세히보기",
            popCname: "pop-offerRoom",
            img: "../../img/sub/offerGrand.jpg",
            des: "영빈관이 내려다보이는 수페리어 스위트에서 보내는 아늑한 시간",
        },
        {
            id: "2",
            title: "Premier Suite",
            linktag: "객실 자세히보기",
            popCname: "pop-offerRoom2",
            img: "../../img/sub/offerRoom3.jpg",
            des: " 여유로운 공간감이 돋보이는 프리미어 스위트에서 보내는 쾌적한 시간",
        },
        {
            id: "3",
            title: "Shilla Bear",
            linktag: "공통혜택 자세히보기",
            popCname: "pop-offerRoom3",
            img: "../../img/sub/eventTeddy2.jpg",
            des: "신라베어의 블루 드래곤 키링이 여러분에게 희망과 행운을 안겨드립니다.",
        },
    ];

    return (
        <>
            {/* <!-- 패키지 상세설명 사이드 3개 --> */}
            {/* 리스트 출력 */}
            {description.map(des => (
                <OfferDetail1_pkgdes3
                    key={des.id}
                    con={des}
                    onclick={() => {
                        setactivePop(des.id);
                        // console.log(des.id);
                    }}
                />
            ))}
            {/* 팝업 */}
            {description.map(des => (
                <OfferDetail1_pop
                    key={des.id}
                    con={des}
                    isactive={des.id === activePop}
                    onclose={() => setactivePop(null)}
                />
            ))}
        </>
    );
};

export default OfferDetail1_pkgdes2;
