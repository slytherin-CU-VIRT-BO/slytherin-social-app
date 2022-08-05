import React from "react";
import "./PostList.css";

const PostList = ({ posts }) => {
  if (!posts.length) {
    return <h3>No Posts Yet</h3>;
  }

  return (
    <div>
      <h3 className="h3">Posts</h3>
      <div className="card">
        {posts &&
          posts.map((post, index) => (
            <div key={index} className="postcard">

              <div>{post.username} posted at {post.createdAt}</div>
              <p className="postcard-text">{post.postText}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default PostList;
