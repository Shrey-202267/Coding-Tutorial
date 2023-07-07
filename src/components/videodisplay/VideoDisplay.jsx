import React from "react";
import { useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import "./VideoDisplay.css";

const VideoDisplay = () => {
  const { id } = useParams();
  return (
    <div className="videoDisplay__Container">
      <div className="div__player">
        <ReactPlayer
          className="video__player"
          url={`https://www.youtube.com/watch?v=${id}`}
          controls
          playing={true}
        />
      </div>
    </div>
  );
};

export default VideoDisplay;
