import React from "react";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "./Infopart3.css";

function Infopart3() {
  return (
    <section style={{ height: "92vh" }}>
      <h2>
        Which{" "}
        <span style={{ color: "#66B2FF" }}>
          Programming language to choose ?
        </span>
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
                src="https://cdn-icons-png.flaticon.com/512/1256/1256343.png?w=740&t=st=1667504464~exp=1667505064~hmac=728ad18af4512564d412c659a0c462c0c034819f799ddb922a6a7923e913d857"
                alt=""
              />
            </div>
            Binary code comprises a series of zeros and ones, used to
            communicate instructions. This code is a low-level programming
            language. Each digit in a coded sequence connects to a switch in
            your computer. Each switch connects to an action, and together
            thousands of switches operate a device. High-level code, a computer
            communication process that works much like human language, allows
            programmers to operate entire systems simultaneously. High-level
            programming languages convert human language from programmers into
            binary code that computers understand.
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img
                className="slide__image"
                src="https://cdn-icons-png.flaticon.com/512/1256/1256341.png?w=740&t=st=1667504760~exp=1667505360~hmac=58414e31ab3e9d01f37a9217b9e8b80ec1507864df0367db2b645a9883f6e355"
                alt=""
              />
            </div>
            Binary code comprises a series of zeros and ones, used to
            communicate instructions. This code is a low-level programming
            language. Each digit in a coded sequence connects to a switch in
            your computer. Each switch connects to an action, and together
            thousands of switches operate a device. High-level code, a computer
            communication process that works much like human language, allows
            programmers to operate entire systems simultaneously. High-level
            programming languages convert human language from programmers into
            binary code that computers understand.
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img
                className="slide__image"
                src="https://cdn-icons-png.flaticon.com/512/1256/1256336.png?w=740&t=st=1667504383~exp=1667504983~hmac=906bd8bf3c930cadd942f3e1e911124021f626e0c03c08f46b7756dab13ef33e"
                alt=""
              />
            </div>
            Binary code comprises a series of zeros and ones, used to
            communicate instructions. This code is a low-level programming
            language. Each digit in a coded sequence connects to a switch in
            your computer. Each switch connects to an action, and together
            thousands of switches operate a device. High-level code, a computer
            communication process that works much like human language, allows
            programmers to operate entire systems simultaneously. High-level
            programming languages convert human language from programmers into
            binary code that computers understand.
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img
                className="slide__image"
                src="https://cdn-icons-png.flaticon.com/512/1256/1256222.png?w=740&t=st=1667504238~exp=1667504838~hmac=2b310721b41e1806e71f96581844e8a1a11df035cde7bdce661e71dd3b274b63"
                alt=""
              />
            </div>
            Binary code comprises a series of zeros and ones, used to
            communicate instructions. This code is a low-level programming
            language. Each digit in a coded sequence connects to a switch in
            your computer. Each switch connects to an action, and together
            thousands of switches operate a device. High-level code, a computer
            communication process that works much like human language, allows
            programmers to operate entire systems simultaneously. High-level
            programming languages convert human language from programmers into
            binary code that computers understand.
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="resource__button">
        <Link to="/resources" className="btn_link">
          <button>
            Resources{" "}
            <ArrowForwardIosIcon
              style={{ fontSize: "15px", marginLeft: "3px" }}
            />
          </button>
        </Link>
      </div>
    </section>
  );
}

export default Infopart3;
