import React from "react";
import "./Trending.css";
import { FaHatWizard } from 'react-icons/fa';
import { GET_USERS } from '../../utils/queries'
import { useQuery } from "@apollo/client";
import { Link } from "react-router-dom";
const Trending = () => {
  const { loading, error, data } = useQuery(GET_USERS);

  const renderPage = () => {
    if (loading) {
      return <div>Loading...</div>;
    }
    if (error) {
      console.error(error);
      return <div>Error!</div>;
    }
    return (
      <><h3 className="h32">People you might know</h3>
        <div className="containerpymk">
          {data.users &&
            data.users.map((user, index) => (
              <div key={index} className="trend">
                <div className="trend2">
                  <Link
                    activestyle="true"
                    to="/profile"
                    state={{ username: user.username }}>
                    <h1 className="peep"><FaHatWizard />{user.username}</h1>
                    <p className="trend-text2">{user.firstName} {user.lastName}</p>
                  </Link>
                </div>
              </div>
            ))}
        </div>
      </>
    );
  };

  return <div>{renderPage()}</div>;
};

export default Trending;