import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";

function VideoCard({
  video: {
    id: { videoId },
    snippet,
  },
}) {
  return (
    <Card sx={{ width: "320px", borderRadius: "0" }}>
      <Link to={videoId && `/video/${videoId}`}>
        <CardMedia
          image={snippet?.thumbnails?.high?.url}
          alt={snippet?.title}
          sx={{ width: 358, height: 190 }}
        />
      </Link>

      <CardContent sx={{ background: "#132F4C", height: "106px" }}>
        <Link
          to={videoId && `/video/${videoId}`}
          style={{ textDecoration: "none" }}
        >
          <Typography variant="subtitle1" fontWeight="bold" color="#fff">
            {snippet?.title.slice(0, 60)}
          </Typography>
        </Link>
      </CardContent>
    </Card>
  );
}

export default VideoCard;
