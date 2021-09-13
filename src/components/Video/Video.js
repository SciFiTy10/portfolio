import React from "react";

function Video(props) {
  const styles = {
    wrapper: {
      position: "relative",
      paddingBottom: "56.25%",
      height: 0,
    },
    video: {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
    },
  };
  return (
    <div style={styles.wrapper}>
      <iframe
        title={props.title}
        src={`https://www.loom.com/embed/${props.id}`}
        frameBorder="0"
        webkitallowfullscreen="true"
        mozallowfullscreen="true"
        allowFullScreen
        style={styles.video}
      ></iframe>
    </div>
  );
}

export default Video;
