import React from 'react'

export default function PostList({ posts }) {
    if (!posts.length) {
        return <h3>No Posts Yet</h3>;
      }
    
      return (
        <div>
          <h3>Posts</h3>
          {posts &&
            posts.map(post => (
              <div key={post._id} className="card mb-3">
                <p className="card-header">
                  {post.postText}
                </p>
                <div>{post.createdAt}</div>
              </div>
            ))}
        </div>
      );
    }
