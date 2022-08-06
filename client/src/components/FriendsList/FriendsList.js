import React from "react";
import "./FriendsList.css";
import uniqid from "uniqid";
import FriendIcon from "@material-ui/icons/People";

const FriendsList = (props) => {
  if (!props.friends.length) return "";

  return (
    <>
      <article className="hardcode">
        <p>
          {" "}
          The sonnet has all the things we are told poetry should have: music,
          memorability, scaffolding, an innate ability to tell a story. It is
          the vestments of Shakespeare, Petrarch, Yeats, Frost. In matters of
          desire or annihilation, the sonnet is both the question and the
          answer.{" "}
        </p>
      </article>
      <section id="friends">
        <ul className="friends-list">
          {props.posts.map((firstName, lastName) => (
            <li className="friend" key={uniqid()}>
              <h3 className="friend-name">
                {" "}
                <FriendIcon /> {firstName} {lastName}
              </h3>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};

export default FriendsList;
