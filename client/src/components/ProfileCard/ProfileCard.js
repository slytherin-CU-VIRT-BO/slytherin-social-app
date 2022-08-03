import React from "react";
import {

  FaClock,
  FaMapMarker,
  FaRegStar,
  FaCamera,
  FaUserPlus,
  FaPen,
  FaMailBulk,
} from "react-icons/fa";
import "./ProfileCard.css";

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
          {/* <div className="edit">
            <FaCamera />
          </div> */}
        </div>
        <h1 className="profile-name">
          {data.firstName} {data.lastName}
        </h1>
        <h2>@{data.username}</h2>
      </header>

      <article>
        <div className="profinfo">
          <FaClock />
          <h3>User since {data.createdAt}</h3>
        </div>
        <div className="profinfo">
          <FaMapMarker />
          <h3>Location</h3>
        </div>
        <div className="profinfo">
          <FaMailBulk />
          <h3>{data.email}</h3>
        </div>
        <div className="profinfo">
          <FaRegStar />
          <h3>Birthday</h3>
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
        <button>
          Add Friend
          <FaUserPlus />
        </button>
      </div>
    </section>
  );
};

export default ProfileCard;
