import React from 'react';
import './styles.scss';
import { Navigation, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function Carousel({ perview = 4, space = 30, isAuto = false, children }) {
    return (
        <div style={{ overflow: 'hidden', paddingTop: '10px' }}>
            {isAuto ? (<Swiper
                modules={[Navigation, Scrollbar, A11y, Autoplay]}
                spaceBetween={space}
                slidesPerView={perview}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false
                }}
            >
                {children}
            </Swiper>) : (<Swiper
                modules={[Navigation, Scrollbar, A11y, Autoplay]}
                spaceBetween={10}
                slidesPerView={perview}
            >
                {children}
            </Swiper>)}
        </div>
    );
}

export default Carousel;
