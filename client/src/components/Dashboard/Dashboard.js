import React from 'react';
import './Dashboard.css';
import PostList from '../PostList/PostList';
import { useQuery } from '@apollo/client';
import { GET_POSTS } from '../../utils/queries';
import NavBar from '../NavBar/NavBar';
import NewPost from '../NewPost/NewPost';
import FriendsList from '../FriendsList/FriendsList';

export default function Dashboard() {
    const { loading, data } = useQuery(GET_POSTS)
    const posts = data?.posts || []
    console.log(data);

  return (
    <>
	<main>
        <div className="">
          {loading ? (
            <div>Loading...</div>
          ) : (
            <section className="dash">
			<div className="dashleft">
				<NavBar />
			</div>
				<main className="dashmiddle">
					<PostList posts={posts}/>
				</main>
			
			<aside className="dashright userlist">
				<Trending />
			</aside>
		</section>
          )}
        </div>

    </main></>
  )
}

    
    
