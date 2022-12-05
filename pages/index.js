import Link from "next/link";
import Layout from "../components/layout/Layout";
import { client } from "../libs/client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MainView } from "../components/MainView";

export default function Home({ blog }) {
  console.log(blog);
  return (
    <Layout>
      <MainView></MainView>
      <Link href={""} className={"btn btn-primary"}>
        ボタン
      </Link>
      <Link href={""} className={"btn btn-secondary"}>
        ボタン
      </Link>
      <div>
        <ul>
          {blog.map((blog) => (
            <li key={blog.id}>
              <Link href={`/blog/${blog.id}`}>{blog.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  );
}

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async () => {
  const data = await client.get({ endpoint: "blogs" });
  return {
    props: {
      blog: data.contents,
    },
  };
};
