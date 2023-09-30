import React from 'react';
import { Link } from "react-router-dom";

export default function Post({ title, categories, date, imageUrl, description }) {
  return (
    <div className="post">
        <img
        className="postImg"
        src={imageUrl}
        alt=""
        />
        <div className="postInfo">
           <span className="postTitle">
            <Link to="" className="link">
              {title}
            </Link>
            </span>
            <hr/>
            <span className="postDate">{date}</span>
        </div>
        <p className="postDesc">
            {description}
        </p>
    </div>
  )
}

