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
export const Testimonials = () => {
  const [clicked, setClicked] = React.useState<any>();
  const imageSlider = [
    {
        imageUrl: "/Frame 1.png",
        title: "Fatima Elmagnifico",
        text: "NeXaHive is an amazing organization, they are best when it come to this kinda job",
    },
    {
      imageUrl: "/Frame 1.png",
      title: "Fatima Elmagnifico",
      text: "NeXaHive is an amazing organization, they are best when it come to this kinda job",
    },
    {
        imageUrl: "/Frame 1.png",
        title: "Fatima Elmagnifico",
      text: "NeXaHive is an amazing organization, they are best when it come to this kinda job",
    },
    {
        imageUrl: "/Frame 1.png",
        title: "Fatima Elmagnifico",
      text: "NeXaHive is an amazing organization, they are best when it come to this kinda job",
    },
  ];


  return (
    <section
      className={`flex flex-col xl:flex-row justify-center gap-8 px-5 xl:px-0 my-24 w-full h-[694] py-12`}
    >
      <div className="flex flex-col justify-center space-y-8">
        <h1 className="font-bold text-2xl lg:text-5xl tracking-wide text-wrap max-w-2xl leading-normal">
          Testimonials
        </h1>
        <div className="grid grid-rows-1 lg:grid-cols-2 gap-4 xl:gap-8">
          {imageSlider.map(({ imageUrl, text, title }, index) => (
            <Card key={index} className="max-w-lg lg:w-[800px] border-2 border-[#5840B9] space-y-8 px-6 py-8">
              <Image
                src={imageUrl}
                alt="slider-image"
                width={100}
                height={100}
                className="w-[100px] h-[100px]"
              />
              <h1 className="font-bold text-xl">{title}</h1>
              <p className="text-wrap max-w-sm text-[#808080] text-lg">{text}</p>
            </Card>
          ))}
        </div>
      </div>
      <p></p>
    </section>
  );
};
