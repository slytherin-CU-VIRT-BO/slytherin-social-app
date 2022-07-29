import React from 'react';
import './ProfilePosts.css';
import uniqid from 'uniqid';
import FriendIcon from '@material-ui/icons/People'

const ProfilePosts = (props) => {
  if (!props.friends.length) return null

  return (
    <div class="dash">
      <div class="stats">
        <h1 class="title">Friends</h1>
        <ul className='overview'>
          {props.posts.map((firstName, lastName) => (
            <li className='panel' key={uniqid()}>
              <h3 className='friend-name'> <FriendIcon /> {firstName} {lastName}</h3>
              <div>
              <div class="icon">
                <i class="fas fa-user"></i>
              </div>
            </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default ProfilePosts
