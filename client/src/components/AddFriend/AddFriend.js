
import {FaUserPlus,FaUserMinus,GiCancel} from "react-icons/fa";
import React from "react";
import "./AddFriend.css";

function CancelFriendRequest(props) {
  return (
    <button onClick={props.onClick}>
      Cancel Friend Request
      <GiCancel />
    </button>
  );
};

function RemoveFriend(props) {
  return (
    <button onClick={props.onClick}>
      Remove Friend
      <FaUserMinus />
    </button>
  );
};

function SendFriendRequest(props) {
  return (
    <button onClick={props.onClick}>
      Add Friend
      <FaUserPlus />
    </button>
  );
};

const AddFriend = ({ data }) => {
    if(potato==data.potato) {

    } else if(potato!=data.potato) {
      return

    } else {
      return

    };
};

export default AddFriend;
