import {Link} from 'react-router-dom'
import '../../scss/reset.css'
import '../../scss/common.scss'
import '../../scss/main.scss'
import { useState } from 'react'

const MainCont4 = () => {
    const roomData = [
        {
            link : '/standard',
            title : "스탠다드 디럭스룸 페이지로 이동",
            text_kor : '스탠다드',
            text_eng : 'Standard',
            type : [
                { delay : "0", link : '/standard', title : "디럭스룸 페이지로 이동" , text : '디럭스'},
                { delay : "100", link : '/standard/businessDeluxe', title : "비지니스 디럭스룸 페이지로 이동" , text : '비지니스 디럭스'},
                { delay : "200", link : '/standard/barrierFreeDeluxe', title : "베리어프리 비지니스 디럭스룸 페이지로 이동" , text : '베리어프리 비지니스 디럭스'},
                { delay : "300", link : '/standard/grandCornerDeluxe', title : "그랜드 코너 디럭스룸 페이지로 이동" , text : '그랜드 코너 디럭스'},
            ]
        },
        {
            link : '/executive',
            title : "이그제큐티브 비지니스 디럭스룸 페이지로 이동",
            text_kor : '이그제큐티브',
            text_eng : 'Executive',
            type : [
                { delay : "0", link : '/executive/execBusinessDeluxe', title : "이그제큐티브 비지니스 디럭스룸 페이지로 이동" , text : '이그제큐티브 비지니스 디럭스'},
                { delay : "100", link : '/executive/grandDeluxe', title : "이그제큐티브 그랜드 디럭스룸 페이지로 이동" , text : '이그제큐티브 그랜드 디럭스'}
            ]
        },
        {
            link : '/suite',
            title : "수페리어 스위트 룸 페이지로 이동",
            text_kor : '스위트',
            text_eng : 'Suite',
            type : [
                { delay : "0", link : '/suite/superior', title : "수페리어 스위트 룸 페이지로 이동" , text : '수페리어 스위트'},
                { delay : "100", link : '/suite/korean', title : "코리안 스위트 룸 페이지로 이동" , text : '코리안 스위트'},
                { delay : "200", link : '/suite/corner', title : "코너 스위트 룸 페이지로 이동" , text : '코너 스위트'},
                { delay : "300", link : '/suite/premier', title : "프리미어 스위트 룸 페이지로 이동" , text : '프리미어 스위트'},
                { delay : "400", link : '/suite/royal', title : "로열 스위트 룸 페이지로 이동" , text : '로열 스위트'},
                { delay : "500", link : '/suite/silla', title : "신라 스위트 룸 페이지로 이동" , text : '신라 스위트'},
                { delay : "600", link : '/suite/presidential', title : "프레지덴셜 스위트 룸 페이지로 이동" , text : '프레지덴셜 스위트'},
            ]
        },
        {
            link : '/executiveLounge',
            title : "이그제큐티브 라운지 페이지로 이동",
            text_kor : '더 이그제큐티브 라운지',
            text_eng : 'The Executive Lounge',
            type :[]
        },
    ]

    let [roomType,roomTypeSet] = useState(roomData)

    return (
        <>
            {/* <!-- s:// cont4. 객실 --> */}
            <section className="cont4">
                <div className="center">
                    <div className="title_box">
                        <h2 className="cont-tit">객실</h2>
                        <p className="en-tit">ROOM</p>
                    </div>
                </div>
                {
                    roomType.map((item,index)=>{
                        return  <div className="back" key={index}>
                                    <div className="center-wrap" data-aos="fade-up">
                                        <div className="center">
                                            <div className="text-box">
                                                <h3><Link to={item.link} title={item.title}>{item.text_kor} <span>{item.text_eng}</span></Link></h3>
                                                <ul className="type">
                                                    {   
                                                        item.type.map((type,idx)=>{
                                                            if(item.type.length >= 1){
                                                                return  <li key={idx} data-aos="fade-up" data-aos-delay={type.delay}><Link to={type.link} title={type.title}>{type.text}</Link></li>
                                                            }
                                                            return
                                                        })
                                                    }
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                    })
                }
            </section>
            {/* <!-- e:// cont4. 객실 --> */}
        </>
    )
}

export default MainCont4
