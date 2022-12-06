import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const MoreBlog = () => {
  return (
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
  );
};

export default MoreBlog;
