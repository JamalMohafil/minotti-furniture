import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
  news: { date: string; title: string; image: string; link: string }[];
};

const NewsSection = ({ news }: Props) => {
  return (
    <div className="py-24 w-screen text-black bg-white max-sm:px-6 px-12 flex flex-col">
      <div className="flex items-center max-w-[1400px] mx-auto">
        <h1 className="text-5xl max-sm:text-4xl font-light">News</h1>
        <span className="mx-4 w-8 h-[1px] bg-black"></span>{" "}
        {/* الخط بين News و See All News */}
        <a href="#" className="text-sm tracking-widest text-black">
          SEE ALL NEWS
        </a>
      </div>
      <div className="flex flex-col max-lg:gap-y-28 w-full max-lg:justify-center gap-y-40 mt-24 items-center justify-between">
        {news.map((item, i) => (
          <Link
            href={item.link}
            key={i}
            className="hover:opacity-70 max-lg:flex-col max-lg:gap-y-2 
             transition-all flex justify-between w-full max-w-[1400px] items-start"
          >
            <span className="text-lg text-accent">{item.date}</span>
            <h2 className="w-[32%] max-lg:w-full text-3xl  max-sm:text-2xl">{item.title}</h2>
            <Image
              alt={`Image of ${item.title}`}
              width={400}
              height={100}
              className="object-cover max-lg:w-[100%] w-[48%]"
              src={item.image}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default NewsSection;
