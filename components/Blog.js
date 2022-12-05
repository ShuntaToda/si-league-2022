import React from "react";

const Blog = ({ blog }) => {
  console.log(blog);
  return (
    <div className="c-blog py-4 container">
      <div className="c-blog__container shadow-lg rounded py-4 px-3">
        <div className="c-blog__title">
          <h1>{blog.title}</h1>
        </div>
        <div className="c-blog__content">
          <div
            dangerouslySetInnerHTML={{
              __html: `${blog.content}`,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Blog;
