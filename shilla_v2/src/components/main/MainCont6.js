import React from 'react'
import '../../scss/reset.css'
import '../../scss/common.scss'
import '../../scss/main.scss'

const MainCont6 = () => {
  return (
    <>
        {/* <!-- s:// cont6. 갤러리 --> */}
        <section className="cont6">
            <div className="center">
                <div className="title_box">
                    <h2 className="cont-tit">갤러리</h2>
                    <p className="en-tit">GALLERY</p>
                </div>
                <div className="video_wrap">
                    <iframe width="1280" height="720" src="https://www.youtube.com/embed/pBQsNC6-6XU" title="Where the heritage of the Shilla meets local flavor - SMQD" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                </div>
            </div>
        </section>
        {/* <!-- e:// cont6. 갤러리 --> */}
    </>
  )
}

export default MainCont6
