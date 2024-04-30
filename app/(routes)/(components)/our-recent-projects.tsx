"use client";
import { Card } from "@/components/card";
import Image from "next/image";
import React from "react";

interface HeroProps {
  title: string;
  description: string;
  image: string;
  buttonTitle?: string;
  label: string;
  bgStyle?: string;
}
export const OurRecentProjects = () => {
  const [clicked, setClicked] = React.useState<any>();
  const imageSlider = [
    {
      imageUrl: "/Frame 48095420.png",
      text: "We build responsive web site / engine that detect the visitor's screen size & orientation and change the layout accordingly with flexible layouts, images, application and database for your business or institutions.",
    },
    {
      imageUrl: "/Frame 48095422.png",
      text: "We build responsive web site / engine that detect the visitor's screen size & orientation and change the layout accordingly with flexible layouts, images, application and database for your business or institutions.",
    },
    {
      imageUrl: "/Frame 48095423.png",
      text: "We build responsive web site / engine that detect the visitor's screen size & orientation and change the layout accordingly with flexible layouts, images, application and database for your business or institutions.",
    },
  ];
  const navigation = [
    {
        label: "1",
        active: true
    },
    {
        label: "2",
        active: false
    },
    {
        label: "3",
        active: false
    },
    {
        label: "4",
        active: false
    },
    {
        label: "5",
        active: false
    },
    {
        label: "...",
        active: false
    },
    {
        label: "10",
        active: false
    },
    
  ];

  return (
    <section
      className={`flex flex-col xl:flex-row justify-center gap-8 px-5 xl:px-0 my-24 w-full h-[694] py-12`}
    >
      <div className="flex flex-col justify-center space-y-8">
        <h1 className="font-bold text-2xl lg:text-5xl tracking-wide text-wrap max-w-md lg:max-w-2xl leading-normal">
          Our Recent Projects
        </h1>
        <p className="text-[#808080] leading-snug max-w-[480px] text-lg">
          Here are some of our recent projects that you can key in as an
          investor/partnership or request for bespoke software for your business
        </p>
        <div className="flex flex-wrap lg:flex-warp">
          {imageSlider.map(({ imageUrl, text }, index) => (
            <Card key={index} className="max-w-lg rounded-2xl">
              <Image
                src={imageUrl}
                alt="slider-image"
                width={500}
                height={600}
              />
              <p className="text-wrap max-w-md text-center">{text}</p>
            </Card>
          ))}
        </div>
        <ul
          className={`flex gap-4 justify-center`}
        >
          {navigation.map((item, index) => (
            <li
            key={index}
              className={`px-1  ${
                item.active && "bg-[#5840B9] text-white rounded-md px-3"
              }`}
            >
              {item.label}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
