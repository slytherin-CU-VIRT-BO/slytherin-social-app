import React from 'react';
// import './ProfilePage.css';
import ProfilePosts from '../ProfilePosts/ProfilePosts'
import FriendsList from '../FriendsList/FriendsList'
import { useQuery } from "@apollo/client";
import { GET_ME } from '../../utils/queries';

const ProfilePage = () => {
  const { loading, error, data } = useQuery(GET_ME)

  if (loading) return 'Loading...'
  if (error) return 'Something Bad Happened'

  if (!data.length) return null

  return (
    <body>
      <div class="dash">
        <div>
          <h2 className='title'>Slytherin fellow {data.firstName} {data.lastName}</h2>
        </div>

        <main className="stats">

          <div className="title">
            <ProfilePosts posts={data.posts} />
          </div>
          <div className="overview">
            <FriendsList friends={data.friends} />
          </div>

        </main>
      </div>
    </body>
  )
}

export default ProfilePage;