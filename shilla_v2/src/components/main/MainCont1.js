import {Link} from 'react-router-dom'
import '../../scss/reset.css'
import '../../scss/common.scss'
import '../../scss/main.scss'

const MainCont1 = () => {
  return (
    <>
        {/*  s:// cont1. 메인 비주얼  */}
        <section className="cont1">
            <div className="swiper">
                <div className="swiper-wrapper">
                    <div className="swiper-slide slide1">
                        <div className="center">
                            <div className="txt-box">
                                <span>Members Only</span>
                                <h2><span>R</span>EWARDS <span>R</span>ELAX <span>S</span>PA <span>B</span>LISS</h2>
                                <p>몸과 마음을 편안하게 만들어주는 스파 프로그램으로 진정한 휴식을 느껴보세요.</p>
                            </div>
                            <Link to="/specialOffer/detail/56"  className="pkg-link">패키지 바로 가기</Link>
                        </div>
                    </div>
                    <div className="swiper-slide slide2">
                        <div className="center">
                            <div className="txt-box">
                                <span>Members Only</span>
                                <h2><span>R</span>EWARDS <span>P</span>RIVATE <span>M</span>OMENT AT <span>U</span>RBAN <span>C</span>ABANA</h2>
                                <p>어번 아일랜드의 프라이빗한 카바나에서 도심 속 휴식을 즐겨보세요.</p>
                            </div>
                            <Link to="/specialOffer/detail/59" className="pkg-link">패키지 바로 가기</Link>
                        </div>
                    </div>
                </div>
                <div className="swiper-button-next"></div>
                <div className="swiper-button-prev"></div>
                <div className="swiper-pagination"></div>
            </div>
        </section>
        {/*  e:// cont1. 메인 비주얼  */}
    </>
  )
}

export default MainCont1
