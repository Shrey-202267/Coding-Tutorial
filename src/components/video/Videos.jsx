import React from "react";
import "./Videos.css";
import { Typography, Stack, Box } from "@mui/material";
import VideoCard from "../videocard/VideoCard";

const Videos = ({ selectedCategory, videos }) => {
  console.log(videos);
  return (
    <div className="videos">
      <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: "#fff" }}>
        {`${selectedCategory}`} <span style={{ color: "#66B2FF" }}>videos</span>
      </Typography>

      <Stack direction="row" flexWrap="wrap" gap={4}>
        {videos.map((item, index) => {
          return (
            <Box key={index}>
              {item.id.videoId && <VideoCard video={item} />}
            </Box>
          );
        })}
      </Stack>
    </div>
  );
};

export default Videos;
