import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import Image from "next/image";
import image5 from "../images/aaa.jpg";

import { client } from "../libs/client";

export const MainView = () => {
  const [imageContents, setImageContents] = useState([]);

  const getView = async () => {
    const data = await client.get({ endpoint: "main-view" });
    setImageContents(data.contents);
  };

  useEffect(() => {
    getView();
  }, []);
  const settings = {
    dots: true,
    infinite: true,
    speed: 100,
    arrows: true,
    centerMode: true,
  };

  return (
    <Slider className="c-main-view my-4" {...settings}>
      {imageContents.map((content, index) => (
        <div key={index} className="px-1">
          <Image src={content.image.url} width={1500} height={1000} alt="pictuer" />
        </div>
      ))}
    </Slider>
  );
};
