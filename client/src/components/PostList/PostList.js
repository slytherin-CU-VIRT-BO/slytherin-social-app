import React from 'react';
// import './PostList.css';
export default function PostList({ posts }) {
  if (!posts.length) {
    return <h3 className="title">No Posts Yet</h3>;
  }

  return (
    <div>

      <div className="dash">
        <div className="stats">
          <h1 className="title">Posts</h1>
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