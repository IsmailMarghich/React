import React from "react";

const CommentDetail = (props) => {
  return (
    <div className="comment">
      <a href="/" className="avatar">
        <img alt="avatar" src={props.avatarUrl} />{" "}
        {/*generate a random avatar*/}
      </a>
      <div className="content">
        <a href="/" className="author">
          {props.name} {/*set name recieved from parent component*/}
        </a>
        <div className="metadata">
          <span className="date">{props.timeAgo}</span>
        </div>
        <div className="text">{props.content}</div>
      </div>
    </div>
  );
};
export default CommentDetail;
