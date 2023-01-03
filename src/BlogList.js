import React from "react";
import { Link } from "react-router-dom";

export default function BlogList({ blogs }) {
  return (
    <div className="blog-list">
      {localStorage.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <Link to={`/blogs/${blog.id}`}>
            <h2>{blog.title}</h2>
            <p>written by {blog.author}</p>
          </Link>
        </div>
      ))}
    </div>
  );
}
