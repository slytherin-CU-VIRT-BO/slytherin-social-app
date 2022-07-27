import React from 'react';
import './NewPost.css';

const NewPost = ({ onSubmit }) => {
return (
<form onSubmit={onSubmit}>
    <label htmlFor="postText">Thoughts here:</label>
    <input type="postText" id="postText"
     placeholder="I'm feeling..." 
    />
    <label htmlFor="Link">Link here:</label>
    <input type="Link" id="Link"
     placeholder="Link" 
    />
    <input type="button" value="submit">
      Create Post
    </input>
</form>
);
};

export default NewPost;