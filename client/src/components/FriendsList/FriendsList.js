import React from 'react';
// import './ProfilePosts.css';
import uniqid from 'uniqid';
import FriendIcon from '@material-ui/icons/People'
 
const ProfilePosts = (props) => {
  if (!props.friends.length) return null

  return (
    //need css for friends-list, post, count-icon, post-text
    <section id='friends'>
      <ul className='friends-list'>
        {props.posts.map((firstName,lastName) => (
            <li className='friend' key={uniqid()}>
                <h3 className='friend-name'> <FriendIcon/> {firstName} {lastName}</h3>
            </li>
        ))}
      </ul>
    </section>
  )
}

export default ProfilePosts
