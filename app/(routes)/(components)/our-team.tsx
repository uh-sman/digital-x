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
export const OurTeam = () => {
  const [clicked, setClicked] = React.useState<any>();
  const imageSlider = [
    {
        imageUrl: "/image (3).png",
        text: "We build responsive web site / engine that detect the visitor's screen size & orientation and change the layout accordingly with flexible layouts, images, application and database for your business or institutions.",
    },
    {
      imageUrl: "/image (1).png",
      text: "We build responsive web site / engine that detect the visitor's screen size & orientation and change the layout accordingly with flexible layouts, images, application and database for your business or institutions.",
    },
    {
        imageUrl: "/image (2).png",
      text: "We build responsive web site / engine that detect the visitor's screen size & orientation and change the layout accordingly with flexible layouts, images, application and database for your business or institutions.",
    },
  ];


  return (
    <section
      className={`flex flex-col xl:flex-row justify-center gap-8 px-5 xl:px-5 my-24 w-full h-[694] py-12`}
    >
      <div className="flex flex-col justify-center space-y-8">
        <h1 className="font-bold text-2xl lg:text-5xl tracking-wide text-wrap max-w-2xl leading-normal">
          Our Team
        </h1>
        <div className="flex flex-wrap">
          {imageSlider.map(({ imageUrl, text }, index) => (
            <Card key={index} className="max-w-lg rounded-2xl hover:shadow-lg hover:scale-95">
              <Image
                src={imageUrl}
                alt="slider-image"
                width={500}
                height={600}
                className="w-[500px] h-[550px]"
              />
              {/* <p className="text-wrap max-w-md text-center">{text}</p> */}
            </Card>
          ))}
        </div>
      </div>
      <p></p>
    </section>
  );
};
