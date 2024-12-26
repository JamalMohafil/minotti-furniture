"use client";
import React, { useState, useRef, useEffect } from "react";
import Slider from "react-slick";
import { FaTimes, FaDownload, FaFacebookF, FaPinterestP } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowDownLong } from "react-icons/fa6";
import Image from "next/image";
import Link from "next/link";
import { MdEmail } from "react-icons/md";
import TechnicalFeatures from "@/Components/Product/TechnicalFeatures";
import DetailsProd from "@/Components/Product/DetailsProd";
import SliderProduct from "@/Components/Product/SliderProduct";

const Page = () => {
  const images = [
    "https://www.minotti.com/media/immagini/43587_z_AMII_01.jpg",
    "https://www.minotti.com/media/immagini/43588_z_AMII_02.jpg",
    "https://www.minotti.com/media/immagini/43589_z_AMII_03.jpg",
    "https://www.minotti.com/media/immagini/43590_z_AMII_04.jpg",
    "https://www.minotti.com/media/immagini/43591_z_AMII_05.jpg",
  ];

  return (
    <div className="w-screen flex flex-col">
      <div className="relative w-full">
        <div className="shadow2"></div>
        <div className="shadow2"></div>
        <div className="shadow"></div>
        <div className="shadow"></div>
        <h1 className="absolute max-md:text-5xl top-[45%] tracking-[0.4em] translate-y-[-45%] left-[50%] translate-x-[-50%] text-[130px] z-[5] text-white">
          AMII
        </h1>
        <img
          src="https://www.minotti.com/media/immagini/16929_z_GENERALE_2024_COLLECTION_lr.jpg"
          className="w-full h-[95vh] object-cover"
        />
        <span className="arrow z-[6] absolute bottom-10 left-1/2 transform -translate-x-1/2">
          <FaArrowDownLong className="text-white" />
        </span>
      </div>
      <SliderProduct images={images} />

      <TechnicalFeatures />
      <DetailsProd />
      <div className=" w-screen max-md:px-12 max-[400px]:px-6 bg-white flex flex-col gap-y-12 text-black px-24 py-12 ">
        <h2 className="text-4xl max-md:text-3xl">View the whole range</h2>
        <div className="grid grid-cols-3 max-md:grid-cols-1 max-lg:grid-cols-2 items-start place-items-start">
          <Link
            href={"/products/3"}
            className="flex hover:opacity-80 transition-all flex-col gap-2 justify-center items-center"
          >
            <Image
              src={
                "https://www.minotti.com/media/immagini/36097_n_HORIZONTE_01.jpg"
              }
              width={500}
              height={500}
              alt="image"
            />
            <h2 className="text-xl uppercase">Horizonte</h2>
          </Link>
        </div>
      </div>
      <div className="w-screen bg-white max-lg:px-6 max-md:grid-cols-1 text-black px-24 grid grid-cols-2 py-16 gap-10">
        <Link
          href={"/category/2"}
          className="flex hover:opacity-80 transition-all  flex-col justify-center items-center gap-y-6"
        >
          <Image
            width={500}
            height={500}
            alt="image"
            className="w-full max-md:max-w-[500px]"
            src={
              "https://www.minotti.com/media/immagini/40526_n_CORRELATO_FINALE.jpg"
            }
          />
          <h2 className="text-4xl">2023 Collection</h2>
        </Link>
        <Link
          href={"/category/2"}
          className="flex hover:opacity-80 transition-all  flex-col justify-center items-center gap-y-6"
        >
          <Image
            width={500}
            height={500}
            className="w-full max-md:max-w-[500px]"
            alt="image"
            src={"https://www.minotti.com/media/immagini/11505_n_ANTE_MENU.jpg"}
          />
          <h2 className="text-4xl">The World Of Materials</h2>
        </Link>
      </div>
    </div>
  );
};

export default Page;
