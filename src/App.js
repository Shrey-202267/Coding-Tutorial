import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import VideoDisplay from "./components/videodisplay/VideoDisplay";
import Resources from "./components/resources/Resources";
import Navbar from "./components/navbar/Navbar";

const App = () => {
  return (
    <BrowserRouter>
      <div style={{ background: "#001E3C" }}>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/video/:id" element={<VideoDisplay />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
