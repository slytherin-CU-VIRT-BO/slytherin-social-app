import React from 'react';
import PostList from '../PostList/PostList';
import { useQuery } from '@apollo/client';
import { GET_POSTS } from '../../utils/queries';
import "./Post.css";

export default function Post() {
    const { loading, data } = useQuery(GET_POSTS)
    const posts = data?.posts || []
    console.log(data);

    return (
        <article className="post halfborder single">
			<header>
				<Link to={`/user/${post.username}`} className="green">
                <img src="https://source.unsplash.com/random/1000x1000/?profile,person" alt="" class="image-cover bor-rad-10"/>
				</Link>
				<div>
					<h3>{username}</h3>
					<p>{createdAt}</p>
				</div>
			</header>
			<div className="post__details">
						<h3>{post.postText}</h3>
			</div>
			<div className="post__footer">
				<div className="post__reactions">
				</div>
				<Input placeholder={"Write a comment..."}/>
			</div>
		</article>
	);
};


