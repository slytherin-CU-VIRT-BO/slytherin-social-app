import React from "react";
import {
  FaClock,
  FaMapMarker,
  FaRegStar,
  FaCamera,
  FaPen,
  FaMailBulk,
} from "react-icons/fa";
import "./ProfileCard.css";
// import AddFriend from "../AddFriend/AddFriend";

// IMPORT DATESTRING

const ProfileCard = ({ data }) => {
  
  return (
    <section className="profilecard main">
      <header>
        <div>
          <img
            src="https://source.unsplash.com/random/?city,night"
            alt="pic"
            className="profileimg"
          />
          <div className="edit">
            <FaCamera />
          </div>
        </div>
        <h1 className="profile-name">
          {data.firstName} {data.lastName}
        </h1>
        <h2>@{data.username}</h2>
      </header>

      <article>
        <div className="profinfo">
          <FaClock />
          <h3>{data.createdAt}</h3>
        </div>
        <div className="profinfo">
          <FaMapMarker />
          <h3>Located at</h3>
        </div>
        <div className="profinfo">
          <FaMailBulk />
          <h3>Email: {data.email}</h3>
        </div>
        <div className="profinfo">
          <FaRegStar />
          <h3>I was born</h3>
        </div>
      </article>
      <div className="btn-group">
        <button>Logout</button>
        <button>Edit Profile</button>
      </div>
      <div className="btn-group">
        <button>
          Message
          <FaPen />
        </button>
        {/* <AddFriend /> */}
      </div>
    </section>
  );
};

export default ProfileCard;
