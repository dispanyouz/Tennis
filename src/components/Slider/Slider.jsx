import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import s from "./Slider.module.scss";

function Slider() {
    return (
        <div className={s.container}>
            <h2>Фото кортов</h2>
            <Swiper spaceBetween={50} slidesPerView={3}>
                <SwiperSlide>Slide1</SwiperSlide>
                <SwiperSlide>Slide2</SwiperSlide>
                <SwiperSlide>Slide3</SwiperSlide>
                <SwiperSlide>Slide4</SwiperSlide>
            </Swiper>
        </div>
    )
}

export default Slider;