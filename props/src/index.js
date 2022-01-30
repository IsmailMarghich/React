import React from "react";
import ReactDOM from "react-dom";
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";
import faker from "faker";
const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <CommentDetail
          name="Thomas"
          timeAgo="Today at 5:45PM"
          content="I like the blog."
          avatarUrl={faker.image.image()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          name="Bob"
          timeAgo="Yesterday at 3:12PM"
          content="I found this article very interesting."
          avatarUrl={faker.image.image()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          name="John"
          timeAgo="Today at 9:25AM"
          content="I did not like this blog."
          avatarUrl={faker.image.image()}
        />
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
