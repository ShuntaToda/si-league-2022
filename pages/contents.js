import Image from "next/image";
import React from "react";
import Layout from "../components/layout/Layout";
import { client } from "../libs/client";
import noImage from "../images/no-image.png";
import Link from "next/link";

const Contents = ({ blogs }) => {
  console.log(blogs[0]);
  return (
    <Layout>
      <div className="container">
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 justify-content-center">
          {blogs.map((blog) => (
            <div key={blog.id} className={"c-blog-block col"}>
              <Link href={`/blog/${blog.id}`} className="text-dark text-decoration-none">
                <div className="c-blog-block__card card h-100">
                  <div className="c-blog-block__image">
                    {blog.eyecatch ? (
                      <Image
                        src={blog.eyecatch.url}
                        height={200}
                        width={400}
                        alt={"blog-image"}
                      ></Image>
                    ) : (
                      <Image src={noImage} height={200} width={400} alt={"blog-image"}></Image>
                    )}
                  </div>
                  <div className="c-blog-block__contents card-body">
                    <h5 className="card-title">{blog.title}</h5>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
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
