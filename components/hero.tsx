import Image from 'next/image'
import React from 'react'

interface HeroProps {
    title: string,
    description: string,
    image: string,
    buttonTitle?: string,
    label: string,
    bgStyle?: string
}
export const Hero = ({ title, description, image, buttonTitle, bgStyle }:HeroProps) => {
  return (
    <section className={`flex flex-col xl:flex-row justify-around gap-8 px-5 xl:px-0 my-24 ${bgStyle} w-full h-[694] py-12`}>
        <div className='flex flex-col justify-center space-y-8'>
            <h1 className='font-bold text-2xl lg:text-5xl tracking-wide text-wrap max-w-2xl leading-normal'>{title}</h1>
            <p className='text-[#808080] leading-snug max-w-[480px] text-lg'>{description}</p>
           {
            buttonTitle && (
                <button className='bg-[#5840B9] rounded-full px-6 py-3 text-gray-200 max-w-52'>{buttonTitle}</button>
            )
           }
        </div>
        <Image src={image} alt='hero-image' width={500} height={500}/>
    </section>
  )
}
