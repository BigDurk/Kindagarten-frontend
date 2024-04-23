import React, { useState } from "react";
import YouTube from "react-youtube";

const VideoPlayer = ({ videoId }) => {
  const [isReady, setIsReady] = useState(false);

  // Options for the YouTube player
  const opts = {
    height: "390",
    width: "1080",
    playerVars: {
      autoplay: 0,
    },
  };

  // Callback function to set isReady state to true when the video is ready
  const onReady = (event) => {
    setIsReady(true);
  };

  return (
    <div>
      {/* {!isReady && <img src="/images/hero1.jpg" alt="Default Thumbnail" />} */}
      <YouTube videoId={videoId} opts={opts} onReady={onReady} />
    </div>
  );
};

export default VideoPlayer;
