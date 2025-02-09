import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

const SwiperGallery = ( { galleryImgs } ) => {
    const [thumbsSwiper, setThumbsSwiper ] = useState(null)
    
    return (
        <div className="gallery">
            <Swiper style={{
                '--swiper-navigation-color': '#fff',
                '--swiper-pagination-color': '#fff',
                }}
                loop={true}
                spaceBetween={10}
                navigation={true}
                thumbs={{ swiper: thumbsSwiper }}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper2"
            >


            <div className="standard-delux-gallery gallery">
                <div className="swiper mySwiper2">
                    <div className="swiper-wrapper">
                    {
                        galleryImgs.map ((img, index) => {
                            return (
                                <SwiperSlide key={ index }>
                                    <img src={ img } /> 
                                </SwiperSlide>
                            )
                        })
                    }
                    </div>
                </div>
                <div className="swiper-button-next"></div>
                <div className="swiper-button-prev"></div>
            </div>
            </Swiper>

            <Swiper
                onSwiper={setThumbsSwiper}                                       
                loop={true}
                spaceBetween={10}
                slidesPerView={2}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper"
                breakpoints={{
                    0: {
                        slidesPerView: 2,
                    },
                    1240: {
                        slidesPerView: 4,
                    }
                }}
                >
            
            <div thumbsSlider="" className="swiper mySwiper">
                <div className="swiper-wrapper">
                    {
                        galleryImgs.map ((img, index) => {
                            return (
                                <SwiperSlide key={ index }>
                                    <img src={ img } /> 
                                </SwiperSlide>
                            )
                        })
                    }
                </div>
            </div>
            </Swiper>
        </div>
    )
}


export default SwiperGallery;