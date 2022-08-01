import React from 'react';
import './FriendsList.css';
// import uniqid from 'uniqid';
// import FriendIcon from '@material-ui/icons/People'

const ProfilePosts = (props) => {
  if (!props.friends.length) return null

  return (
    <div class="title">Friends
      <ul className='users'>
        {props.posts.map((username) => (
          <li className='user' key={username.id}>
            <h3 className='friend-name'> {username}</h3>
            <div>
              <img
                src="https://source.unsplash.com/random/1000x1000/?profile,person"
                className="roundimage"
              />
            </div>
          </li>
        ))}
      </ul>
      </div>
      )
}

      export default ProfilePosts
