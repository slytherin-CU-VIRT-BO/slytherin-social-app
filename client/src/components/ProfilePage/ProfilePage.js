import React from 'react';
import './ProfilePage.css';
import ProfilePosts from '../ProfilePosts/ProfilePosts'
import FriendsList from '../FriendsList/FriendsList'
import { useQuery } from 'graphql-hooks'
 
//revise query for grab user by id with posts 
const HOMEPAGE_QUERY = `query HomePage($limit: Int) {
  users(limit: $limit) {
    id
    name
  }
}`

const ProfilePage = () => {
  const { loading, error, data } = useQuery(HOMEPAGE_QUERY, { variables: { limit: 10 } })
 
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
