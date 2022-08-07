import ProfileCard from "../ProfileCard/ProfileCard";
import React from "react";
import "./ProfilePage.css";
import PostList from "../PostList/PostList";
import FriendsList from "../FriendsList/FriendsList";
import { useQuery } from "@apollo/client";
import { GET_USER } from "../../utils/queries";
import { useLocation } from "react-router-dom";

const ProfilePage = (props) => {
  const location = useLocation();
  const { loading, error, data } = useQuery(GET_USER, {
    variables: {
      username: location.state.username,
    },
  });

  const renderPage = () => {
    if (loading) {
      return <div>Loading...</div>;
    }
    if (error) {
      console.error(error);
      return <div>Error!</div>;
    }
    return (
      <div>
        <h2 className="profile-name">
          {data.user.firstName} {data.user.lastName}
        </h2>

        <section className="dash">
          <div className="dashleft">
            <ProfileCard data={data.user} />
          </div>

          <main className="dashmiddleprofile">
            <PostList posts={data.user.posts} />
          </main>

          <div className="dashrightprofile">
            <FriendsList friends={data.user.friends} />
          </div>
        </section>
      </div>
    );
  };

  return <div>{renderPage()}</div>;
};

export default ProfilePage;
