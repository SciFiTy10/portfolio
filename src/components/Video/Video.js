import React from "react";

function Video(props) {
  return (
    <iframe
      width="450"
      height="250"
      title={props.title}
      src={`https://www.loom.com/embed/${props.id}`}
      frameBorder="0"
      webkitallowfullscreen="true"
      mozallowfullscreen="true"
      allowFullScreen
    ></iframe>
  );
}

export default Video;
