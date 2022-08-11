import React, { useState } from "react";
import { FaPhotoVideo } from "react-icons/fa";
import Unsplash, { toJson } from "unsplash-js";

const unsplash = new Unsplash({
  accessKey: "",
});

const Header = () => {

  const [search, setSearch] = useState("");
  const [pics, setPics] = useState([]);

  const searchPhotos = async (e) => {
    e.preventDefault();

    unsplash.search
      .photos(search)
      .then(toJson)
      .then((json) => {

        setPics(json.results);
      });

  };

  return (
    <div className="pageHeader">
      <div className="icon">
        <FaPhotoVideo />
      </div>
      <h3>ByThePixel</h3>
      <input
          type="text"
          name="query"
          className="search"
          placeholder="Search Photos"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
    </div>
  );
};

export default Header;
