import React from "react";
import "./Trending.css";
import { FaHatWizard } from 'react-icons/fa';
import {GET_USERS} from '../../utils/queries'
import { useQuery } from "@apollo/client";

const Trending = () => {
  const { loading, error, data } = useQuery(GET_USERS);
  console.log(data);
  
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
        <h3 className="h32">People you may know</h3>
          {data.users &&
            data.users.map((user, index) => (
              <div className="trend">
                    <div  key={index} className="trend2">
                      <h1 className="peep"><FaHatWizard/>{user.username}</h1>
                      <p className="trend-text2">{user.firstName} {user.lastName}</p>
                    </div>
              </div>
            ))}
        </div>
      );
  };

return <div>{renderPage()}</div>;
};

export default Trending;