"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { RegularBodyText } from "./TextPresets";

export interface CarouselItem {
  imageSrc: string;
  imageAlt: string;
  title: string;
  caption?: string;
}

interface CarouselProps {
  items: CarouselItem[];
}

const Carousel: React.FC<CarouselProps> = ({ items }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="w-3/4 mx-auto p-8">
      <Slider {...settings}>
        {items.map((item, index) => (
          <div key={index} className="flex flex-col space-y-8">
            <div>
              <img
                src={item.imageSrc}
                alt={item.imageAlt}
              />
            </div>
            <div>
              <RegularBodyText text={item.title} bold />
              <RegularBodyText text={item.caption} />
            </div>
          </div>
        ))
        }
      </Slider>
    </div>
  );
};

export default Carousel;