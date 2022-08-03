import ProfileCard from "../ProfileCard/ProfileCard";
import React from "react";
import "./ProfilePage.css";
import ProfilePosts from "../ProfilePosts/ProfilePosts";
import FriendsList from "../FriendsList/FriendsList";
import NewPost from "../NewPost/NewPost";
import { useQuery } from "@apollo/client";
import { GET_ME } from "../../utils/queries";
import { Link } from "react-router-dom";

const ProfilePage = () => {
  const { loading, error, data } = useQuery(GET_ME);

  const renderPage = () => {
    if (loading) {
      return <p>Loading...</p>;
    } else if (error) {
      return <p>Something Bad Happened</p>;
    } else {
      return (
        <div>
          <h2 className="profile-name">
            {data.me.firstName} {data.me.lastName}
          </h2>

          <section className="dash">
            <div className="dashleft">
              <ProfileCard data={data.me} />
            </div>

            <main className="dashmiddle">
              <NewPost />
              <ProfilePosts posts={data.me.posts} />
            </main>

            <aside className="dashright userlist">
              <FriendsList friends={data.me.friends} />
            </aside>
          </section>
        </div>
      );
    }
  };

  return <div>{renderPage()}</div>;
};

export default ProfilePage;
