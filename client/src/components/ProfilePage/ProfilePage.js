import ProfileCard from '../ProfileCard/ProfileCard';
import NewPost from '../NewPost/NewPost';
import React from 'react';
import './ProfilePage.css';
import ProfilePosts from '../ProfilePosts/ProfilePosts';
import FriendsList from '../FriendsList/FriendsList';
import ProfileCard from '../ProfileCard/ProfileCard';
import NewPost from '../NewPost/NewPost';
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
      <h2 className='profile-name'>{data.firstName} {data.lastName}</h2>

    <section className="dash">
			<div className="dashleft">
				<ProfileCard data = {data}/>
			</div>

				<main className="dashmiddle">
          <NewPost />
        <ProfilePosts posts={data.posts} />
				</main>
			
			<aside className="dashright userlist">
      <FriendsList friends={data.friends} />
			</aside>
      
		</section>
    </body>
  )
}

export default ProfilePage;
