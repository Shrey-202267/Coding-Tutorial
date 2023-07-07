import React from "react";
import "./Home.css";
import Header from "../header/Header";
import Infopart1 from "../infopart1/Infopart1";
import Infopart2 from "../infopart2/Infopart2";
import Infopart3 from "../infopart3/Infopart3";
import Footer from "../footer/Footer";

const Home = () => {
  return (
    <div>
      <Header />
      <Infopart1 />
      <Infopart2 />
      <Infopart3 />
      <Footer />
    </div>
  );
};

export default Home;
