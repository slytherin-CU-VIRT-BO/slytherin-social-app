import React from "react";
import "./Trending.css";
import { FaHatWizard } from 'react-icons/fa';

const Trending = () => {
  return (
    <>
      <h3 className="h32">People you may know</h3>
      <div className="trend">
            <div className="trend2">
              <h1 className="peep"><FaHatWizard/>Gonzo</h1>
              <p className="trend-text2">Web Developer</p>
            </div>
      </div>
      <div className="trend">
            <div className="trend2">
              <h1 className="peep"><FaHatWizard/>Rizzo</h1>
              <p className="trend-text2">Data Scientist</p>
            </div>
      </div>
      <div className="trend">
            <div className="trend2">
              <h1 className="peep"><FaHatWizard/>Lizzo</h1>
              <p className="trend-text2">Flautist</p>
            </div>
      </div>
      <div className="trend">
            <div className="trend2">
              <h1 className="peep"><FaHatWizard/>Kermit</h1>
              <p className="trend-text2">Muppet</p>
            </div>
      </div>
      
    </>
  );
};

export default Trending;

