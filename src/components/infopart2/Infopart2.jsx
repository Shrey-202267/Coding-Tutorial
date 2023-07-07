import React from "react";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "./Infopart2.css";

function Infopart2() {
  return (
    <section style={{ height: "77vh" }}>
      <h2>
        What is <span style={{ color: "#66B2FF" }}>Programmin Language ?</span>
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
                src="https://cdn-icons-png.flaticon.com/512/1256/1256222.png?w=740&t=st=1667504238~exp=1667504838~hmac=2b310721b41e1806e71f96581844e8a1a11df035cde7bdce661e71dd3b274b63"
                alt=""
              />
            </div>
            A programming language is a set of instructions that can be used to
            interact with and control a computer. These languages are used to
            design websites, create apps, develop operating systems, control
            spacecraft, and analyze data. Programming languages are necessary
            because computers can't understand English. Programming languages
            bridge this gap by helping programmers translate their commands into
            something that the computer can understand and execute.
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img
                className="slide__image"
                src="https://cdn-icons-png.flaticon.com/512/1256/1256336.png?w=740&t=st=1667504383~exp=1667504983~hmac=906bd8bf3c930cadd942f3e1e911124021f626e0c03c08f46b7756dab13ef33e"
                alt=""
              />
            </div>
            A programming language is a set of instructions that can be used to
            interact with and control a computer. These languages are used to
            design websites, create apps, develop operating systems, control
            spacecraft, and analyze data. Programming languages are necessary
            because computers can't understand English. Programming languages
            bridge this gap by helping programmers translate their commands into
            something that the computer can understand and execute.
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img
                className="slide__image"
                src="https://cdn-icons-png.flaticon.com/512/1256/1256222.png?w=740&t=st=1667504753~exp=1667505353~hmac=df97116ddb040dff5a48f4f53142053c04155c47cac2d1507076881b9fc17ab5"
                alt=""
              />
            </div>
            A programming language is a set of instructions that can be used to
            interact with and control a computer. These languages are used to
            design websites, create apps, develop operating systems, control
            spacecraft, and analyze data. Programming languages are necessary
            because computers can't understand English. Programming languages
            bridge this gap by helping programmers translate their commands into
            something that the computer can understand and execute.
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img
                className="slide__image"
                src="https://cdn-icons-png.flaticon.com/512/1256/1256336.png?w=740&t=st=1667504800~exp=1667505400~hmac=c0f53c4fd9efdc78dc4806eaee22ce8a2ddbd34e042997ebca7c35cb592da232"
                alt=""
              />
            </div>
            A programming language is a set of instructions that can be used to
            interact with and control a computer. These languages are used to
            design websites, create apps, develop operating systems, control
            spacecraft, and analyze data. Programming languages are necessary
            because computers can't understand English. Programming languages
            bridge this gap by helping programmers translate their commands into
            something that the computer can understand and execute.
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}

export default Infopart2;
