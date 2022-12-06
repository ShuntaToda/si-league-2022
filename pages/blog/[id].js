// pages/blog/[id].js
import Blog from "../../components/Blog";
import Layout from "../../components/layout/Layout";
import MoreBlog from "../../components/MoreBlog";
import { client } from "../../libs/client";

export default function BlogId({ blog }) {
  return (
    <Layout>
      <Blog blog={blog} key={blog.id}></Blog>
      <MoreBlog></MoreBlog>
    </Layout>
  );
}

// 静的生成のためのパスを指定します
export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: "blogs" });

  const paths = data.contents.map((content) => `/blog/${content.id}`);
  return { paths, fallback: false };
};

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async (context) => {
  const id = context.params.id;
  const data = await client.get({ endpoint: "blogs", contentId: id });

  return {
    props: {
      blog: data,
    },
  };
};
