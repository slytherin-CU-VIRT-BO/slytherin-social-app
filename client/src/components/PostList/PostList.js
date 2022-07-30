import React from 'react';
// import './PostList.css';
export default function PostList({ posts }) {
  if (!posts.length) {
    return <h1 className="title">No Posts Yet</h1>;
  }

  return (
    <div>
          <h1 className="title">Posts</h1>
          {posts &&
            posts.map(post => (
              <div key={post._id} className="post-header">
                <p className="post-body">
                  {post.postText}
                </p>
                <div>{post.createdAt}</div>
              </div>
            ))}
        </div>
      
  );
}