import { Card } from "@/components/card";
import Image from "next/image";
import React from "react";

const CardWrapper = () => {
  const cardItems = [
    {
      title: "Our Business Services",
      description:
        "We build responsive web site / engine that detect the visitor's screen size & orientation and change the layout accordingly with flexible layouts, images, application and database for your business or institutions.",
        imageUrl: "/image 19.png",
        className: "font-bold text-3xl max-w-[200px] leading-relaxed mb-4"
    },
    {
      title: "Website Design & Management",
      description:
        "We build responsive web site / engine that detect the visitor's screen size & orientation and change the layout accordingly with flexible layouts, images, application and database for your business or institutions.",
        imageUrl: "/image 19.png",
        className: "font-bold text-3xl max-w-lg leading-relaxed mb-4"
    },
    {
      title: "Social Media & Management",
      description:
        "We build responsive web site / engine that detect the visitor's screen size & orientation and change the layout accordingly with flexible layouts, images, application and database for your business or institutions.",
        imageUrl: "/image 19.png",
        className: "font-bold text-3xl max-w-lg leading-relaxed mb-4"
    },
    {
      title: "Content Marketing",
      description:
        "We build responsive web site / engine that detect the visitor's screen size & orientation and change the layout accordingly with flexible layouts, images, application and database for your business or institutions.",
        imageUrl: "/image 19.png",
        className: "font-bold text-3xl max-w-lg leading-relaxed mb-4"
    },
    {
      title: "Email Marketing",
      description:
        "We build responsive web site / engine that detect the visitor's screen size & orientation and change the layout accordingly with flexible layouts, images, application and database for your business or institutions.",
        imageUrl: "/image 19.png",
        className: "font-bold text-3xl max-w-lg leading-relaxed mb-4"
    },
    {
      title: "Google Ads",
      description:
        "We build responsive web site / engine that detect the visitor's screen size & orientation and change the layout accordingly with flexible layouts, images, application and database for your business or institutions.",
        imageUrl: "/image 19.png",
        className: "font-bold text-3xl max-w-lg leading-relaxed mb-4"
    },
  ];
  return (
    <section className="flex justify-center bg-[#F2F7F6] py-8">
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 mx-8">
      {cardItems.map(({ title, description, imageUrl, className }) => (
        <Card className="h-96 max-w-md shadow-2xl rounded-2xl py-8 px-5">
            <Image src={imageUrl} alt="logo" width={50} height={50}/>
          <h1 className={className}>
            {title}
          </h1>
          <p className="text-[#808080] leading-snug max-w-[480px] text-lg ">{description}</p>
          {/* <button className="hidden hover:flex">Discover more</button> */}
        </Card>
      ))}
      </div>
    </section>
  );
};

export default CardWrapper;
