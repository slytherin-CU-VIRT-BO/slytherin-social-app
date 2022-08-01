import React from 'react';
// import './PostList.css';
export default function PostList({ posts }) {
  if (!posts.length) {
    return <h1 className="title">No Posts Yet</h1>;
  }

  return (
    <div className="posts">
			{posts.map(post => (
				<Post post={post} key={post._id} />
			))}
		</div>
      
  );
}