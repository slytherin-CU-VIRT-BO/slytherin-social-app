//resolve graphql hooks grab all by userid
import React from 'react';
import './Projects.css';
import uniqid from 'uniqid';
import LikeIcon from '@material-ui/icons/Favorite'
import CommentIcon from '@material-ui/icons/Comment'

const Profile = () => {
  if (!posts.length) return null

  return (
    //need css for posts-grid, post, count-icon, post-text
    <section id='posts' className='posts-grid'>
      <h2 className='section__title'>{Name}'s Posts</h2>
      <ul className='project__stack'>
        {posts.map((post) => (
            <div className='post' key={uniqid()}>
                <h3>{post.title}</h3>
                <p className='post-text'>{posts.postText}</p>
                <a className='count-icon'>
                    <LikeIcon /> {posts.likes}
                </a>
                <a className='count-icon'>
                    <CommentIcon /> {posts.comments.length}
                </a>
                
            </div>
        ))}
      </ul>
    </section>
  )
}

export default Profile
