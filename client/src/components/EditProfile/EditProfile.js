import React from 'react';
import './EditProfile.css';

const EditProfile = ({ onSubmit }) => {
return (
<form onSubmit={onSubmit}>
    <input type="postText" id="postText"
     placeholder="Username" 
    />
    <input type="firstName" id="firstName"
     placeholder="First Name" 
    />
    <input type="lastName" id="lastName"
     placeholder="Last Name" 
    />
    <input type="email" id="email"
     placeholder="Email" 
    />
    <input type="button" value="submit">
      Save Changes
    </input>
</form>
);
};

export default EditProfile;