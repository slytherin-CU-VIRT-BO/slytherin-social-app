import { useMutation } from "@apollo/client";
import React, { useState } from "react";
import './NewPost.css';
import { FaPhotoVideo, FaRegPaperPlane} from 'react-icons/fa';
import { ADD_POST } from "../../utils/mutations";

const NewPost = () => {
    const [formState, setFormState] = useState({
      postText: ""
    });
    
    const [errorMessage, setErrorMessage] = useState("");

    const [addPost] = useMutation(ADD_POST);
   
    const formSubmit = async (event) => {
      event.preventDefault();
      event.stopPropagation();

      addPost({
          variables: {
            postText: formState.postText
          },
        });
      };

      const handleChange = (event) => {
        if (!event.target.value.length) {
          setErrorMessage(`${event.target.name} is required.`);
        } else {
          setErrorMessage("");
    
          const { name, value } = event.target;
          setFormState({ ...formState, [name]: value });
        }
      };

return (
<article className="newpost gradient-border">
  <form onSubmit={formSubmit}>
    <textarea 
        placeholder="What are you slythering about?"
        name='postText'
        onChange={handleChange}
    />
    <div className="btns">
      <label htmlFor="PostText">
      </label>
      <button type="submit"><FaRegPaperPlane/></button>
      <button>
        < FaPhotoVideo />
      </button>
    </div>
    {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
  </form>
</article>
);
};

export default NewPost;