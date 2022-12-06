import React from "react";
import Layout from "../components/layout/Layout";
import { client } from "../libs/client";

const Contents = ({ blogs }) => {
  console.log(blogs);
  return (
    <Layout>
      <div>
        {blogs.map((blog) => (
          <div key={blog.id}>{blog.title}</div>
        ))}
      </div>
    </Layout>
  );
};

export default Contents;

export const getStaticProps = async () => {
  const data = await client.get({
    endpoint: "blogs",
  });
  return {
    props: {
      blogs: data.contents,
    },
  };
};
