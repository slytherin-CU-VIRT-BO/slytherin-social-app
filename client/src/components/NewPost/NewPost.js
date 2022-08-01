import React from 'react';
import './NewPost.css';
import { FaAngleRight } from 'react-icons/fa';


const NewPost = ({ onSubmit }) => {
	return (
		<form onSubmit={onSubmit}>
			<textarea
				placeholder="Post something here!"
				value={form.postText}
			/>
			<div className="btns">
				<button type="submit" aria-label="submit">
					< FaAngleRight />
				</button>
			</div>
		</form>
	);
};

export default NewPost;

