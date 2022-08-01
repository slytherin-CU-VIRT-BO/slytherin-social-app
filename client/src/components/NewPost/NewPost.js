import React from 'react';
import './NewPost.css';

const NewPost = ({ onSubmit }) => {
return (
<article className="newpost gradient-border">
  <form onSubmit={onSubmit}>
    <textarea placeholder="What are you slythering about?"/>
    <div className="btns">
      <label htmlFor="PostText">
        <div>
          < FaFile />
        </div>
      </label>
      <input type="link"/>
      <button type="submit" aria-label="submit">
        < FaFaPhotoVideo />
      </button>
    </div>
  </form>
</article>
);
};

export default NewPost;