"use client";
import Image from "next/image";
import dynamic from "next/dynamic";

import { useRef, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowDownLong, FaFacebook, FaInstagram, FaLinkedin, FaPinterest, FaTwitter, FaYoutube } from "react-icons/fa6";
const HeroSection = dynamic(() => import("@/Components/HomePage/HeroSection"), {
  ssr: true, // هذا الخيار يعطل الـ Server-Side Rendering للمكون
  loading: () => <p>Loading...</p>, // يمكن إضافة مكون تحميل يتم عرضه أثناء تحميل المكون الأساسي
});
const NewsSection = dynamic(() => import("@/Components/HomePage/NewsSection"), {
  ssr: true, // هذا الخيار يعطل الـ Server-Side Rendering للمكون
  loading: () => <p>Loading...</p>, // يمكن إضافة مكون تحميل يتم عرضه أثناء تحميل المكون الأساسي
});
const ContentSwitcher = dynamic(
  () => import("@/Components/HomePage/ContentSwitcher"),
  {
    ssr: true, // هذا الخيار يعطل الـ Serveشr-Side Rendering للمكون
    loading: () => <p>Loading...</p>, // يمكن إضافة مكون تحميل يتم عرضه أثناء تحميل المكون الأساسي
  }
);
import SocialImagesSection from "@/Components/HomePage/SocialImagesSection";

export default function Home() {


  const images = [
    "https://www.minotti.com/media/immagini/43165_z_MINOTTI_SALONE2024_01.jpg",
    "https://www.minotti.com/media/immagini/43167_z_MINOTTI_SALONE2024_03.jpg",
    "https://www.minotti.com/media/immagini/43163_z_MINOTTI_SALONE2024_4.jpg",
    "https://www.minotti.com/media/immagini/43940_z_MINOTTI_SALONE2024_011.jpg",
    "https://www.minotti.com/media/immagini/43164_z_MINOTTI_SALONE2024_06.jpg",
  ];

  const sliderRef = useRef<Slider>(null);


  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true,
    cssEase: "linear",
    swipe: true, // Enables swipe functionality for touch devices
    draggable: true, // Enables drag functionality for mouse interactions
    pauseOnHover: false,
  };

  return (
    <div>
      <div className="relative w-full">
        <div className="shadow2"></div>
        <Slider ref={sliderRef} {...settings}>
          {images.map((src, index) => (
            <div key={index} className="relative w-full h-[100vh]">
              <Image
                fill
                src={src}
                alt={`Slide ${index + 1}`}
                className="relative object-cover"
              />
            </div>
          ))}
        </Slider>
        <span className="arrow">
          <FaArrowDownLong />
        </span>
      </div>

      <ContentSwitcher
        name="Focus On"
        links={[
          { title: "INDOOR", link: "/" },
          { title: "OUTDOOR", link: "/" },
        ]}
      />
      <HeroSection
        link="/"
        image={
          "https://www.minotti.com/media/immagini/37255_z_MINOTTI_COLLEZIONE_24.jpg"
        }
        title="2024 Collection"
        description="Find out more"
      />
      <HeroSection
        link="/"
        image={"https://www.minotti.com/media/immagini/11315_z_YVES2.jpg"}
        title="Yves"
        description="Hannes Peer design"
      />
      <HeroSection
        link="/"
        image={"https://www.minotti.com/media/immagini/17727_z_SUPERMOON.jpg"}
        title="Supermoon"
        description="Giampiero Tagliaferri design"
      />
      <HeroSection
        link="/"
        image={"https://www.minotti.com/media/immagini/11314_z_NICO.jpg"}
        title="Nico"
        description="Hannes Peer design"
      />
      <HeroSection
        link="/"
        image={"https://www.minotti.com/media/immagini/21304_z_DAYLIGHT02.jpg"}
        title="Daylight"
        description="GamFratesi design"
      />
      <ContentSwitcher
        name="Be Inspired"
        links={[
          { title: "Residential", link: "/" },
          { title: "Hotel & Resort", link: "/" },
          { title: "Restaurant and bar", link: "/" },
          { title: "Retail", link: "/" },
          { title: "Corporate", link: "/" },
          { title: "Yachting", link: "/" },
        ]}
      />
      <HeroSection
        link="/"
        image={
          "https://www.minotti.com/media/immagini/31109_z_Marbella_Villa_Calma.jpg"
        }
        title="Marbella, Villa Calma"
        description="Find out more"
      />
      <NewsSection
        news={[
          {
            title: "On air the new 2024 adv campaign",
            date: "Aug 2024",
            link: "/",
            image: "https://www.minotti.com/media/immagini/45186_t_HP.jpg",
          },
          {
            title: "Book Salone 2024",
            date: "JUL 2024",
            link: "/",
            image: "https://www.minotti.com/media/immagini/44930_t_HP.jpg",
          },
          {
            title: "News 2024",
            date: "JUL 2024",
            link: "/",
            image: "https://www.minotti.com/media/immagini/44937_t_HP_01.jpg",
          },
        ]}
      />
      <HeroSection
        link="/"
        image={"https://www.minotti.com/media/immagini/32548_z_STUTTGART.jpg"}
        title="Stuttgart"
        description="Find out more"
      />
      <HeroSection
        link="/"
        image={
          "https://www.minotti.com/media/immagini/11318_z_MINOTTI_FLAGSHIP_STORES_06_24_57flag.jpg"
        }
        title="Flagship Stores Network"
        description="View All"
      />
      <ContentSwitcher
        name="Be Social"
        links={[
          { title: "Facebook", link: "/",icon:<FaFacebook/> },
          { title: "Instagram", link: "/",icon:<FaInstagram/> },
          { title: "Pinterest", link: "/",icon:<FaPinterest/> },
          { title: "Twitter", link: "/" ,icon:<FaTwitter/>},
          { title: "Youtube", link: "/",icon:<FaYoutube/> },
          { title: "LinkedIn", link: "/",icon:<FaLinkedin/> },
        ]}
      />
      <SocialImagesSection/>
    </div>
  );
}
