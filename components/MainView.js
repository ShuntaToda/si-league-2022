import React, { useEffect } from "react";
import Slider from "react-slick";
import Image from "next/image";
import image5 from "../images/aaa.jpg";
import { client } from "../libs/client";

export const MainView = () => {
  // const getView = async () => {
  //   const data = await client.get({ endpoint: "blogs" });
  //   console.log(data);
  // };

  // useEffect(() => {
  //   getView();
  // }, []);
  const settings = {
    dots: true,
    infinite: true,
    speed: 100,
    arrows: true,
    centerMode: true,
  };

  const images = [image5, image5, image5];
  return (
    <Slider className="c-main-view" {...settings}>
      {images.map((img, index) => (
        <div key={index} className="px-1">
          <Image src={img} alt="pictuer" />
        </div>
      ))}
    </Slider>
  );
};
