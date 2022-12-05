import Link from "next/link";
import Layout from "../components/layout/Layout";
import { client } from "../libs/client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MainView } from "../components/MainView";
import Blog from "../components/Blog";

export default function Home({ blog }) {
  console.log(blog);
  return (
    <Layout>
      <MainView></MainView>
      <div>
        {blog.map((blog) => (
          <Blog blog={blog} key={blog.id}></Blog>
        ))}
      </div>
    </Layout>
  );
}

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async () => {
  const data = await client.get({
    endpoint: "blogs",
    queries: { filters: "category[equals]gmvnsg2l82j" },
  });
  return {
    props: {
      blog: data.contents,
    },
  };
};
