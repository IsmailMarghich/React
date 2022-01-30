import React from "react";

const VideoDetail = ({ video }) => {
  if (!video) {
    return <div>Search for a video!</div>;
  }

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}?autoplay=1`;
  return (
    <div>
      <div className="ui embed">
        <iframe title="videoplayer" src={videoSrc} />
      </div>
      <div className="ui segment">
        <h4 className="ui header">{video.snippet.title}</h4>
        <p className="ui ">{video.snippet.description}</p>
      </div>
    </div>
  );
};
export default VideoDetail;
