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
      username: props.username
    }
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

            <main className="dashmiddle">
              <NewPost />
              {/* <ProfilePosts posts={data.user.posts} /> */}
            </main>

            <aside className="dashright userlist">
              <FriendsList friends={data.user.friends} />
            </aside>
          </section>
        </div>
      );
  };

  return <div>{renderPage()}</div>;
};

export default ProfilePage;
