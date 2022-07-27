import React from 'react';
import './ProfilePage.css';
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
    //need css for profile-page
    <section id='profile' className='profile-page'>
            <h2 className='profile-name'>{data.firstName} {data.lastName}</h2>
            <FriendsList friends = {data.friends}/>
            <ProfilePosts posts = {data.posts}/>
    </section>
  )
}

export default ProfilePage
