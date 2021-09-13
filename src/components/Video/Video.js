import React from "react";
import * as aboutStyles from "../../styles/Component/about.module.scss";

function Video(props) {
  return (
    <iframe
      className={aboutStyles.aboutVideo}
      title={props.title}
      src={`https://www.loom.com/embed/${props.fileId}`}
      frameBorder="0"
      webkitallowfullscreen="true"
      mozallowfullscreen="true"
      allowFullScreen
    ></iframe>
  );
}

export default Video;
