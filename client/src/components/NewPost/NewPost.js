import { isConstValueNode } from 'graphql';
import React from 'react';
import './NewPost.css';
import { FaPhotoVideo, FaRegPaperPlane} from 'react-icons/fa'

const NewPost = ({ onSubmit }) => {
return (
<article className="newpost gradient-border">
  <form onSubmit={onSubmit}>
    <textarea placeholder="What are you slythering about?"/>
    <div className="btns">
      <label htmlFor="PostText">
      </label>
      <button type="submit"><FaRegPaperPlane/></button>
      <button>
        < FaPhotoVideo />
      </button>
    </div>
  </form>
</article>
);
};

export default NewPost;