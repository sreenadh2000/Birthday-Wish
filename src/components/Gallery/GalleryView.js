import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/scrollbar';

import './GalleryView.css';

// import required modules
import { Scrollbar } from 'swiper/modules';

export default function App() {
  return (
  
      <Swiper
        scrollbar={{
          hide: true,
        }}
        modules={[Scrollbar]}
        className="mySwiper"
      >
        <SwiperSlide>
        <img src='https://d1csarkz8obe9u.cloudfront.net/posterpreviews/happy-birthday-design-template-b327a0d0d4c7905ba5cea99c01391c89_screen.jpg?ts=1689920309' alt='Birthday Cake' 
 width={"100%"}
        /></SwiperSlide>
        <SwiperSlide>
        <img src='https://th.bing.com/th/id/OIP.RI9WcyzuAbz6Y_toNvXaUQAAAA?rs=1&pid=ImgDetMain'
         alt='Queto1' 
         width={"100%"}
          
        /></SwiperSlide>
        <SwiperSlide>
        <img src='https://kekmart.com/wp-content/uploads/2023/03/Simple-Birthday-Wishes.jpg' 
        alt='quate 2' 
        width={"100%"}
        /></SwiperSlide>
       <SwiperSlide>
        <img 
        src='https://images.esellerpro.com/3274/I/218/91/NH011.jpg'
         alt='Quateo 3' 
           width={"100%"}
        /></SwiperSlide>
        <SwiperSlide>
        <img src='https://th.bing.com/th/id/OIP.-0iX3F_mYxq1l-2ShlnVLAHaHa?w=691&h=691&rs=1&pid=ImgDetMain'
         alt='Queto 4' 
         width={"100%"}

        /></SwiperSlide>
      </Swiper>
    
  );
}