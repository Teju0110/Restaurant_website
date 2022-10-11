import React from "react";
import restau_video from "../restaurant_web.mp4";
import { BsFillPlayFill, BsPauseFill } from 'react-icons/bs';
import './Video.css'

const Video = () => {
  const vidRef = React.useRef();
  const [playVideo, setPlayVideo] = React.useState(false);

  return (
    <div className="video" id="video">
      <video
        src={restau_video}
        ref={vidRef}
        type="video/mp4"
        Loop
        controls={false}
        muted
      />
      <div className="video_container">
        <div
          className="app_video"
          onClick={() => {
            setPlayVideo(!playVideo);
            if (playVideo) {
              vidRef.current.pause();
            } else {
              vidRef.current.play();
            }
          }}
        >
          {playVideo ? (
            <BsPauseFill color="#fff" fontSize={30} style={{marginTop:"25px", marginLeft:"25px"}} />
          ) : (
            <BsFillPlayFill color="#fff" fontSize={30}  style={{marginTop:"25px", marginLeft:"25px"}} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Video;
