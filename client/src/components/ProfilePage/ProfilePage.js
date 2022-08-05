import ProfileCard from "../ProfileCard/ProfileCard";
import React from "react";
import "./ProfilePage.css";
import ProfilePosts from "../ProfilePosts/ProfilePosts";
import FriendsList from "../FriendsList/FriendsList";
import NewPost from "../NewPost/NewPost";
import { useQuery } from "@apollo/client";
import { GET_USER } from "../../utils/queries";
import { Link } from "react-router-dom";

const ProfilePage = (props) => {
  const { loading, error, data } = useQuery(GET_USER, {
    variables: {
      username: "potato"
    }
  });

  const testUser = {
  
      "user": {
        "username": "potato",
        "firstName": null,
        "lastName": null,
        "email": "potato@gmail.com",
        "posts": [
          {
            "postText": "potato",
            "createdAt": "Aug 3rd, 2022 at 6:28 pm",
            "comments": []
          },
          {
            "postText": "potato",
            "createdAt": "Aug 3rd, 2022 at 6:28 pm",
            "comments": []
          },
          {
            "postText": "potato",
            "createdAt": "Aug 3rd, 2022 at 6:28 pm",
            "comments": []
          }
        ],
        "friends": [],
        "friendRequests": []

    }
  };

  const renderPage = () => {
    // if (loading) {
    //   return <div>Loading...</div>;
    // }
    // if (error) {
    //   console.error(error);
    //   return <div>Error!</div>;
    // }
      return (
        <div>
          <h2 className="profile-name">
            {testUser.user.firstName} {testUser.user.lastName}
          </h2>

          <section className="dash">
            <div className="dashleft">
              <ProfileCard data={testUser.user} />
            </div>

            <main className="dashmiddleprofile">
              <NewPost />
              {/* <ProfilePosts posts={data.user.posts} /> */}
            </main>

            <div className="dashrightprofile">
              <FriendsList friends={testUser.me.friends} />
            </div>
          </section>
        </div>
      );
  };

  return <div>{renderPage()}</div>;
};

export default ProfilePage;

