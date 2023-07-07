import React from "react";
// import Swiper core and required modules
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "./Infopart1.css";

function Infopart1() {
  return (
    <section style={{ height: "77vh" }}>
      <h2>
        What is <span style={{ color: "#66B2FF" }}>Coding ?</span>
      </h2>
      <div className="container part1__container">
        <Swiper
          className="points"
          // install Swiper modules
          modules={[Navigation, Pagination]}
          spaceBetween={100}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
        >
          <SwiperSlide>
            <div>
              <img
                className="slide__image"
                src="https://cdn-icons-png.flaticon.com/512/1256/1256250.png?w=740&t=st=1667504307~exp=1667504907~hmac=9dc721c102c416f2a2f882b325ef947e0cd561a5e060ede50604188d86c82121"
                alt=""
              />
            </div>
            Coding is typing of step by step commands for computer to follow.
            Basically it is telling computer what we want to do. It is said that
            the computer are not clever but they are obedient. They will do
            exactly what you want them to do, so long as you tell them how to do
            it correctly. Code powers our digital world. Every website,
            smartphone app, computer program etc. relies on code in order to
            operate. This makes coders the architects and builders of the
            digital age.
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img
                className="slide__image"
                src="https://cdn-icons-png.flaticon.com/512/1256/1256222.png?w=740&t=st=1667504915~exp=1667505515~hmac=7fcb745ab6db6fbf6f3933db50c8cc80a64f0e92f854f416f1c26a9212e7da60"
                alt=""
              />
            </div>
            Coding is typing of step by step commands for computer to follow.
            Basically it is telling computer what we want to do. It is said that
            the computer are not clever but they are obedient. They will do
            exactly what you want them to do, so long as you tell them how to do
            it correctly. Code powers our digital world. Every website,
            smartphone app, computer program etc. relies on code in order to
            operate. This makes coders the architects and builders of the
            digital age.
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img
                className="slide__image"
                src="https://cdn-icons-png.flaticon.com/512/1256/1256341.png?w=740&t=st=1667504760~exp=1667505360~hmac=58414e31ab3e9d01f37a9217b9e8b80ec1507864df0367db2b645a9883f6e355"
                alt=""
              />
            </div>
            Coding is typing of step by step commands for computer to follow.
            Basically it is telling computer what we want to do. It is said that
            the computer are not clever but they are obedient. They will do
            exactly what you want them to do, so long as you tell them how to do
            it correctly. Code powers our digital world. Every website,
            smartphone app, computer program etc. relies on code in order to
            operate. This makes coders the architects and builders of the
            digital age.
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img
                className="slide__image"
                src="https://cdn-icons-png.flaticon.com/512/1256/1256336.png?w=740&t=st=1667504957~exp=1667505557~hmac=d43f51d3637d9d05a2034e2c61dba62f993566c25ac9064c569f0d6cbfc72a17"
                alt=""
              />
            </div>
            Coding is typing of step by step commands for computer to follow.
            Basically it is telling computer what we want to do. It is said that
            the computer are not clever but they are obedient. They will do
            exactly what you want them to do, so long as you tell them how to do
            it correctly. Code powers our digital world. Every website,
            smartphone app, computer program etc. relies on code in order to
            operate. This makes coders the architects and builders of the
            digital age.
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}

export default Infopart1;
