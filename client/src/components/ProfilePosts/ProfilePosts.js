import React from 'react';
import './ProfilePosts.css';
import uniqid from 'uniqid';
import LikeIcon from '@material-ui/icons/Favorite'
import CommentIcon from '@material-ui/icons/Comment'
 
const ProfilePosts = (props) => {
  if (!props.posts.length) return null

  return (
    //need css for posts-grid, post, count-icon, post-text
    <section id='posts'>
      <ul className='posts-grid'>
        {props.posts.map((postText,likes,comments) => (
            <li className='post' key={uniqid()}>
                <p className='post-text'>{postText}</p>
                <div className='count-icon'>
                    <LikeIcon /> {likes}
                </div>
                <div className='count-icon'>
                    <CommentIcon /> {comments.length}
                </div>
            </li>
        ))}
      </ul>
    </section>
  )
}

export default ProfilePosts
