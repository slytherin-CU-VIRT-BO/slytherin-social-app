import React from "react";
import { FaClock, FaMapMarker, FaRegStar, FaCamera, FaMailBulk} from 'react-icons/fa';
import "./ProfileCard.css";
import getDateString from "../../utils/getDateString";

return (
    <section className="profilecard gradient-border">
        <header>
            <div>
                <img src="https://source.unsplash.com/random/?city,night" alt="profile_image" className="profilecard__dp roundimage" />
                
                    <div className="dp-upload">
                        < FaCamera />
                    </div>
            </div>
            <h2 className='profile-name'></h2>
            <h1>{data.firstName} {data.lastName}</h1>
            <h2>@{data.username}</h2>
        </header>

        <article>
            <div className="profinfo">
                < FaClock />
                <h3>{createdAt}</h3>
            </div>
            <div className="profinfo">
                < FaMapMarker />
                <h3>Located at</h3>
            </div>
            <div className="profinfo">
                <img src={mailIcon} alt="mail" />
                <h3>Email</h3>
            </div>
            <div className="profinfo">
                < FaRegStar/>
                <h3>I was born</h3>
            </div>
        </article>
            <div className="btn-group">
                <button>Logout</button>
                <button>Edit Profile</button>
            </div>
            <div className="btn-group">
                <button>Message</button>
                <button>Add Friend</button>
            </div>
    </section>
);


export default ProfileCard;