import React from 'react'
import './swiber.css'
import { Swiper, SwiperSlide } from 'swiper/react';

import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import kfc from '../../IMAGES/with.png'
import time from '../../IMAGES/05.png'
import othaim from '../../IMAGES/othaim.png'
import huwei from '../../IMAGES/huawei.png'
import jan from '../../IMAGES/jan.png'
import baba from '../../IMAGES/baba.png'
import Stc from '../../IMAGES/Stc-logo.png'
import krispycream from '../../IMAGES/Logo.KrispyKreme.svg.png'
const Swiber = () => {
    
    return (
        <div  className='swiberr-section'>
           <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          '@0.00': {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          '@0.75': {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          '@1.00': {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          '@1.50': {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide ><img src={kfc}/></SwiperSlide>
        <SwiperSlide ><img src={time}/></SwiperSlide>
        <SwiperSlide ><img style={{width:'160px' , paddingTop:'40px'}} src={othaim}/></SwiperSlide>
        <SwiperSlide ><img style={{width:'160px' , paddingTop:'50px'}} src={huwei}/></SwiperSlide>
        <SwiperSlide ><img style={{width:'160px', paddingTop:'40px'}} src={jan}/></SwiperSlide>
        <SwiperSlide ><img style={{width:'290px' , paddingTop:'50px'}} src={baba}/></SwiperSlide>
        <SwiperSlide ><img style={{width:'160px', paddingTop:'70px'}} src={Stc}/></SwiperSlide>
        <SwiperSlide> <img style={{ paddingTop:'70px'}} src={krispycream}/></SwiperSlide>
      </Swiper>
        </div>
    )
}

export default Swiber
