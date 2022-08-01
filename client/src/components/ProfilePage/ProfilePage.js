import React from 'react';
import './ProfilePage.css';
import ProfilePosts from '../ProfilePosts/ProfilePosts'
import FriendsList from '../FriendsList/FriendsList'
import { useQuery } from "@apollo/client";
import { GET_ME } from '../../utils/queries';
import { Link } from "react-router-dom";

const ProfilePage = () => {
  const { loading, error, data } = useQuery(GET_ME)

  if (loading) return 'Loading...'
  if (error) return 'Something Bad Happened'

  if (!data.length) return null

  return (
    <body>
    <div className="profile-page">
      <h2 className='profile-name'>Slytherin fellow {data.firstName} {data.lastName}</h2>
      {/* {userParam && (<button className="addfriend" onClick={handleClick}>Add Friend</button>)} */}
      {/* Insert link to edit profile component here */}
      <p>
        Edit Profile<Link to="/editprofile">Sign In.</Link>
      </p>
    </div>

    <main className="profile-container">

      <div className="post-container">
        <ProfilePosts posts={data.posts} />
      </div>
      <div className="friends-container">
        <FriendsList friends={data.friends} />
      </div>
      
    </main>
  </body>
  )
}

export default ProfilePage;
