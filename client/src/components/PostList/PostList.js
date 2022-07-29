import React from 'react';
// import './PostList.css';
const PostList = ({ posts }) => {
  if (!posts.length) {
      return <h3>No Posts Yet</h3>;
    }
  return (
    <div>

      <div className="dash">
        <div className="stats">
          <h1 className="title">Posts</h1>
        </div>
      </div>
      <div className="dash">
        <div className="stats">
          {posts &&
            posts.map(post => (
              <div key={post._id} className="title">
                <p className="post-body">
                  {post.postText}
                </p>
                <div>{post.createdAt}</div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
export default PostList;