import React from 'react';
import './ProfilePosts.css';
import uniqid from 'uniqid';
 
const ProfilePosts = (props) => {
  if (!props.friends.length) return null

  return (
    //need css for friends-list, post, count-icon, post-text
    <section id='posts'>
      <ul className='friends-list'>
        {props.posts.map((firstName,lastName) => (
            <li className='post' key={uniqid()}>
                <h3 className='friend-name'>{firstName} {lastName}</h3>
            </li>
        ))}
      </ul>
    </section>
  )
}

export default ProfilePosts
