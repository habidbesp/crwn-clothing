import React from "react";
import { Link } from "react-router-dom";
import "./directory-item.styles.scss";

const DirectoryItem = ({ category: { title, imageUrl } }) => (
  <Link className="directory-item-container" to={`shop/${title}`}>
    <div
      className="background-image"
      style={{ backgroundImage: `url(${imageUrl})` }}
    />
    <div className="body">
      <h2>{title}</h2>
      <p>Shop Now</p>
    </div>
  </Link>
);

export default DirectoryItem;
