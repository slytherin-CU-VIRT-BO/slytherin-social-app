import React from 'react';
import './Dashboard.css';
import PostList from '../PostList';
import { useQuery } from '@apollo/client';
import { GET_POSTS } from '../../utils/queries';

export default function Dashboard() {
    const { loading, data } = useQuery(GET_POSTS)
    const posts = data?.posts || []

  return (
    <main>
        <div className="">
          {loading ? (
            <div>Loading...</div>
          ) : (
            <PostList
              posts={posts}
            />
          )}
        </div>

    </main>
  )
}
