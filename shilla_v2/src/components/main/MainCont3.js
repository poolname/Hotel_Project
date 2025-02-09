import {Link} from 'react-router-dom'
import '../../scss/reset.css'
import '../../scss/common.scss'
import '../../scss/main.scss'
import { useState } from 'react'

const MainCont3 = () => {

    const MainCont3Data = [
        {
            delay : '0',
            link : "/specialOffer/detail/58",
            img : "/img/main/special-1.jpg",
            title : 'OUR MEMORIES',
            date : '2024.05.01 ~ 2024.11.30',
            price: '450,000 ~'
        },
        {
            delay : '150',
            link : "/specialOffer/detail/75",
            img : "/img/main/special-2.jpg",
            title : 'EVERLASTING MOMENT',
            date : '2024.04.01 ~ 2024.11.30',
            price: '1,400,000 ~'
        },
        {
            delay : '300',
            link : "/specialOffer/detail/57",
            img : "/img/main/special-3.jpg",
            title : 'SWEET LTTLE CHEF',
            date : '2024.09 ~ 2024.11',
            price: '500,000 ~'
        },
    ]
    let [mainCont3,mainCont3Set] = useState(MainCont3Data);
  return (
    <>
        {/* <!-- s:// cont3. 메인 스페셜 오퍼 --> */}
        <section className="cont3">
            <div className="center">
                <div className="title_box">
                    <h2 className="cont-tit">스페셜 오퍼</h2>
                    <p className="en-tit">SPECIAL OFFERS</p>
                    <Link to="/specialOffer" className="view-more">+  더보기</Link>
                </div>
                <ul className="special-list">
                    {
                        mainCont3.map((item,index)=>{
                            return  <li data-aos="fade-up" data-aos-delay={item.delay} key={index}>
                                        <Link to={item.link}>
                                            <div className="img-wrap">
                                                <img src={item.img} alt=""/>
                                            </div>
                                            <div className="txt-wrap">
                                                <h3>{item.title}</h3>
                                                <p className="date"><i className="fa-regular fa-calendar-check"></i>{item.date}</p>
                                                <p className="price"><i className="fa-solid fa-won-sign"></i>{item.price}</p>
                                            </div>
                                            <div className="view-more">
                                                <span>자세히 보기</span>
                                            </div>
                                        </Link>
                                    </li>
                        })
                    }
                </ul>
            </div>
        </section>
        {/* <!-- e:// cont3. 메인 스페셜 오퍼 --> */}
    </>
  )
}

export default MainCont3
