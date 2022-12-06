import Link from "next/link";
import Layout from "../components/layout/Layout";
import { client } from "../libs/client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MainView } from "../components/MainView";
import Blog from "../components/Blog";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

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
      <div className="c-more-blog text-center pt-4">
        <Link
          href={"/contents"}
          className="text-secondary text-decoration-none d-flex justify-content-center"
        >
          <span className="fw-bold">もっと見る</span>
          <span className="ps-2">
            <FontAwesomeIcon className="h-75" icon={faArrowRight} />
          </span>
        </Link>
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
