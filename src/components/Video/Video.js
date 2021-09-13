import React from "react";
import useScreenSize from "../../hooks/useScreenSize";

function Video(props) {
  //call custom hook to get the screen size
  const screenSize = useScreenSize();

  return (
    <iframe
      width={screenSize.isMobile ? "340" : "440"}
      height={screenSize.isMobile ? "190" : "250"}
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
