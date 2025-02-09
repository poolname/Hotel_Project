import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';

const Gallery = ({ propImages }) => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    return (
        <div className="gallery">
            {/* 메인 Swiper */}
            <Swiper
                style={{ '--swiper-navigation-color': '#fff', '--swiper-pagination-color': '#fff' }}
                loop={true}
                spaceBetween={10}
                navigation={true}
                thumbs={{ swiper: thumbsSwiper }}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper2"
            >
                {propImages.map((img, index) => (
                    <SwiperSlide key={index}>
                        <img src={img} alt={`gallery-img-${index}`} />
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* 썸네일 Swiper */}
            <Swiper
                onSwiper={setThumbsSwiper}
                loop={true}
                spaceBetween={10}
                slidesPerView={4}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper"
                breakpoints={{
                    0: {
                        slidesPerView: 2, // 화면 너비가 1240px 이하일 때 썸네일 2개
                    },
                    1240: {
                        slidesPerView: 4, // 화면 너비가 1241px 이상일 때 썸네일 4개
                    },
                }}
            >
                {propImages.map((img, index) => (
                    <SwiperSlide key={index}>
                        <img src={img} alt={`thumbnail-img-${index}`} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Gallery;
