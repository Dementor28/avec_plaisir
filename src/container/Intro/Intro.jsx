import React from "react";
import { meal } from "../../constants";
import "./Intro.css";

const Intro = () => {
  const vidRef = React.useRef();

  return (
    <div className="app__bg app__wrapper section__padding">
    <div className="app__video">
      <video
        ref={vidRef}
        src={meal}
        type="video/mp4"
        loop
        controls={false}
        muted
        autoPlay
      />
    </div>
    </div>
  );
};

export default Intro;
