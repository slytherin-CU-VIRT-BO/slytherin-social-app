import React from 'react'
import './PostList.css'

const PostList = ({ posts }) => {
    if (!posts.length) {
        return <h3>No Posts Yet</h3>;
      }
    
      return (
        <div>
        <h3>Posts</h3>
        <card>
          {posts && posts.map(post => (
          <div key="{post._id}" className="postcard">
            <p className="postcard-text">{post.postText}</p>
            <div>{post.createdAt}</div>
          </div>
          ))}
        </card>
      </div>
      );
    }

    export default PostList;