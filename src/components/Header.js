import React from "react";
import { FaPhotoVideo } from "react-icons/fa";

const Header = () => {
  return (
    <div className="pageHeader">
      <div className="icon">
        <FaPhotoVideo />
      </div>
      <h3>ByThePixel</h3>
      <input className="search" type="text" placeholder="Search" />
    </div>
  );
};

export default Header;
