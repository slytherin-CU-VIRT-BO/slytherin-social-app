
import {FaUserPlus} from "react-icons/fa";
import React from "react";
import "./AddFriend.css";

// IMPORT DATESTRING

const ProfileCard = ({ data }) => {
  
  return (
    <button onClick={addFriend}>
        Add Friend
        <FaUserPlus />
    </button>
  );
};

export default ProfileCard;
