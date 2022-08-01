import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_POSTS } from '../../utils/queries';
import ProfilePage from "../../components/ProfilePage/ProfilePage";
import Post from '../Post/Post';
import NewPost from '../NewPost/NewPost';
import PostList from '../PostList/PostList';
import FriendsList from '../FriendsList/FriendsList';
import "./Dashboard.css";

export default function Dashboard() {
    const { loading, data } = useQuery(GET_POSTS)
    const posts = data?.posts || []
    console.log(data);

    return (
        <section className="dash">
			<div className="dashleft">
				<ProfilePage />
			</div>
				<main className="dashmiddle">
					<Post />
					<NewPost />
					<PostList />
				</main>
			
			<aside className="dashright userlist">
				< FriendsList />
			</aside>
		</section>
	);
};
