
import {FaUserPlus,FaUserMinus,GiCancel} from "react-icons/fa";
import React, { useState }  from "react";
import { useQuery } from "@apollo/client";
import {GET_ME} from "../../utils/queries";
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
    const {data} = useQuery(GET_ME);
    const [FriendState, setFriendState] = useState(() => CheckFriendState(
      if(data.friends.includes()) {
          
      } else if(potato!=data.potato) {
        return
  
      } else {
        return
  
      };
    ));
    const handleFriends = () => {

    }

};

export default AddFriend;
