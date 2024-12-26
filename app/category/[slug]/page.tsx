"use client";
import AnimatedText from "@/Components/AnimatedText";
import Image from "next/image";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

type Props = {};
const ITEMS = [
  {
    category: "Sofas",
    products: [
      {
        link: "/products/2",
        designer: "Hanees",
        type: ["INDOOR", "2024 Collection"],
        title: "Yves",
        image: "https://www.minotti.com/media/immagini/43346_n_YVES.jpg",
      },
      {
        link: "/products/2",
        title: "Yves Sofa",
        designer: "Giam",
        type: ["INDOOR", "2024 Collection"],

        image: "https://www.minotti.com/media/immagini/43656_n_YVES_SOFA.jpg",
      },
      {
        link: "/products/2",
        title: "Yves Round",
        designer: "Giam",
        type: ["INDOOR", "2024 Collection"],
        image: "https://www.minotti.com/media/immagini/43658_n_YVES_ROUND.jpg",
      },
      {
        link: "/products/2",
        title: "Supermoon",
        designer: "Giam",
        type: ["INDOOR", "2024 Collection"],
        image: "https://www.minotti.com/media/immagini/43667_n_SUPERMOON.jpg",
      },
      {
        link: "/products/2",
        designer: "Hanees",
        type: ["INDOOR", "2024 Collection"],
        title: "Amii",
        image: "https://www.minotti.com/media/immagini/43791_n_AMII.jpg",
      },
      {
        link: "/products/2",
        title: "Daylight",
        designer: "Hanees",
        type: ["INDOOR", "2024 Collection"],
        image: "https://www.minotti.com/media/immagini/43796_n_DAYLIGHT.jpg",
      },
      {
        link: "/products/2",
        title: `Pattie "Cord" Outdoor`,
        designer: "Hanees",
        type: ["INDOOR", "2024 Collection"],
        image:
          "https://www.minotti.com/media/immagini/43812_n_PATTIE_OUT_SOFA.jpg",
      },
    ],
  },
  {
    category: "Sunloungers",
    products: [
      {
        link: "/products/2",
        title: "Daylight Daybed",
        designer: "Hanees",
        type: ["OUTDOOR", "2024 Collection"],
        image:
          "https://www.minotti.com/media/immagini/44341_n_DAYLIGHT_SUNBED.jpg",
      },
    ],
  },
  {
    category: "Armchairs",
    products: [
      {
        link: "/products/2",
        title: "Pattie",
        designer: "Hanees",
        type: ["INDOOR", "2024 Collection"],
        image: "https://www.minotti.com/media/immagini/43673_n_PATTIE.jpg",
      },
      {
        link: "/",
        title: "Vivienne",
        designer: "Giam",
        type: ["INDOOR", "2024 Collection"],
        image: "https://www.minotti.com/media/immagini/43691_n_VIVIENNE.jpg",
      },
      {
        link: "/",
        title: "Kendall",
        designer: "Giam",
        type: ["INDOOR", "2024 Collection"],
        image: "https://www.minotti.com/media/immagini/43704_n_KENDALL.jpg",
      },
      {
        link: "/",
        title: "Trio",
        designer: "Hanees",
        type: ["OUTDOOR", "2024 Collection"],
        image: "https://www.minotti.com/media/immagini/43708_n_TRIO.jpg",
      },
      {
        link: "/",
        title: "Emmi",
        designer: "Giam",
        type: ["INDOOR", "2024 Collection"],
        image: "https://www.minotti.com/media/immagini/43716_n_EMMI.jpg",
      },
      {
        link: "/",
        designer: "Giam",
        type: ["INDOOR", "2024 Collection"],
        title: "Supermoon",
        image:
          "https://www.minotti.com/media/immagini/43696_n_SUPERMOON_ARMCHAIR.jpg",
      },
      {
        link: "/",
        title: "Yves Round",
        designer: "Hanees",
        type: ["INDOOR", "2024 Collection"],
        image:
          "https://www.minotti.com/media/immagini/43891_n_YVES_ROUND_ARMCHAIR.jpg",
      },
      {
        link: "/",
        title: `Pattie "Cord" Outdoor`,
        designer: "Hanees",
        type: ["OUTDOOR", "2024 Collection"],
        image:
          "https://www.minotti.com/media/immagini/43803_n_PATTIE_OUT_ARMCHAIR.jpg",
      },
      {
        link: "/",
        designer: "Giam",
        type: ["OUTDOOR", "2024 Collection"],
        title: "Trio Outdoor",
        image: "https://www.minotti.com/media/immagini/43795_n_TRIO_OUT.jpg",
      },
    ],
  },
  {
    category: "Accessories",
    products: [
      {
        link: "/",
        designer: "Hanees",
        type: ["INDOOR", "2024 Collection"],
        title: `Janis`,
        image: "https://www.minotti.com/media/immagini/43760_n_JANIS.jpg",
      },
      {
        link: "/",
        designer: "Hanees",
        type: ["INDOOR", "2024 Collection"],
        title: `Pilotis Bench`,
        image:
          "https://www.minotti.com/media/immagini/43719_n_PILOTIS_BENCH.jpg",
      },
      {
        link: "/",
        designer: "Hanees",
        type: ["INDOOR", "OUTDOOR", "2024 Collection"],
        title: `Emmi "Cord" Outdoor`,
        image: "https://www.minotti.com/media/immagini/43825_n_EMMI_CORD.jpg",
      },
      {
        link: "/",
        title: `Yves Outdoor`,
        designer: "Giam",
        type: ["INDOOR", "2024 Collection"],
        image:
          "https://www.minotti.com/media/immagini/43868_n_YVES_OUTDOOR.jpg",
      },
    ],
  },
  {
    category: "Little armchairs and stools",
    products: [
      {
        link: "/",
        title: `Vivienne "Dining"`,
        designer: "Giam",
        type: ["INDOOR", "2024 Collection"],
        image:
          "https://www.minotti.com/media/immagini/43675_n_VIVIENNE_DINING.jpg",
      },
      {
        link: "/",
        title: `Pattie "Cord" Outdoor Dining`,
        designer: "Giam",
        type: ["OUTDOOR", "2024 Collection"],
        image:
          "https://www.minotti.com/media/immagini/43701_n_PATTIE_OUT_DINING.jpg",
      },
      {
        link: "/",
        title: `Trio Outdoor "Dining"`,
        designer: "Hanees",
        type: ["OUTDOOR", "2024 Collection"],
        image:
          "https://www.minotti.com/media/immagini/43877_n_TRIO_OUT_DINING.jpg",
      },
    ],
  },
  {
    category: "Tables",
    products: [
      {
        link: "/",
        title: `Nico`,
        designer: "Hanees",
        type: ["INDOOR", "2024 Collection"],
        image: "https://www.minotti.com/media/immagini/43771_n_NICO.jpg",
      },
      {
        link: "/",
        title: `Rayan`,
        designer: "Hanees",
        type: ["INDOOR", "2024 Collection"],
        image: "https://www.minotti.com/media/immagini/43766_n_RAYAN.jpg",
      },
      {
        link: "/",
        designer: "Giam",
        type: ["INDOOR", "OURDOOR", "2024 Collection"],
        title: `Diagramma "Writing Desk"`,
        image:
          "https://www.minotti.com/media/immagini/43833_n_DIAGRAMMA_DESK.jpg",
      },
      {
        link: "/",
        title: `Drake Dining "Outdoor"`,
        designer: "Hanees",
        type: ["OUTDOOR", "2024 Collection"],
        image:
          "https://www.minotti.com/media/immagini/43866_n_DRAKE_OUTDOOR.jpg",
      },
      {
        link: "/",
        title: `Rayan Outdoor`,
        designer: "Hanees",
        type: ["OUTDOOR", "2024 Collection"],
        image: "https://www.minotti.com/media/immagini/43827_n_RAYAN_OUT.jpg",
      },
      {
        link: "/",
        title: `Quadrado 24`,
        designer: "Giam",
        type: ["OUTDOOR", "INDOOR", "2024 Collection"],
        image: "https://www.minotti.com/media/immagini/43871_n_QUADRADO_24.jpg",
      },
    ],
  },
];
const page = (props: any) => {
    const searchParams = useSearchParams();

    const search = searchParams.get("query");
  console.log(props)
  const [searchTerm, setSearchTerm] = useState(search || "");
  const [searchValue, setSearchValue] = useState(search || "");
  const [selectedDesigner, setSelectedDesigner] = useState("View All");
  const [selectedCategory, setSelectedCategory] = useState("View All");
  const [selectedType, setSelectedType] = useState("View All");
   
  const filteredItems = ITEMS.map((category) => ({
    ...category,
    products: category.products.filter(
      (product) =>
        product.title.toLowerCase().includes(searchValue.toLowerCase()) &&
        (selectedDesigner === "View All" ||
          product.designer === selectedDesigner) &&
        (selectedCategory === "View All" ||
          category.category === selectedCategory) &&
        (selectedType === "View All" || product.type.includes(selectedType))
    ),
  })).filter((category) => category.products.length > 0);
  return (
    <div>
      <div className="relative w-full">
        <div className="shadow2"></div>
        <div className="shadow"></div>
        <img
          src="https://www.minotti.com/media/immagini/16929_z_GENERALE_2024_COLLECTION_lr.jpg"
          className="w-full h-[70vh] object-cover "
        />
      </div>
      <div
        className="px-12 pb-80 bg-white w-screen text-black py-16 flex flex-col
       justify-center items-center"
      >
        <AnimatedText text="2024 Collection" className="text-6xl" />

        <div className="w-max flex gap-3  mt-12">
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="px-3 py-3 rounded-md border border-black/70"
          >
            <option>View All</option>
            <option>Sofas</option>
            <option>Sunloungers</option>
            <option>Armchairs</option>
            <option>Accessories</option>
            <option>Little armchairs and stools</option>
            <option>Tables</option>
          </select>

          <select
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
            className="px-3 py-3 rounded-md border border-black/70"
          >
            <option>View All</option>
            <option>2024 Collection</option>
            <option>OUTDOOR</option>
            <option>INDOOR</option>
          </select>

          <select
            value={selectedDesigner}
            onChange={(e) => setSelectedDesigner(e.target.value)}
            className="px-3 py-3 rounded-md border border-black/70"
          >
            <option>View All</option>
            <option>Hanees</option>
            <option>Giam</option>
          </select>
          <div className="flex items-center w-max rounded-md border border-black px-3 py-2 text-black">
            <input
              type="search"
              placeholder="Search by product name"
              className="w-[200px] outline-none border-none"
              value={searchTerm}
              onChange={(e) => {
                if(e.target.value === "") setSearchValue("")
                setSearchTerm(e.target.value) 

              }}
            />
            <FaSearch className="cursor-pointer" onClick={() => setSearchValue(searchTerm)} />
          </div>
        </div>
        {filteredItems.map((item, index) => (
          <div className="flex flex-col justify-center items-center w-full gap-y-5 mt-48">
            <div className="flex items-center justify-center space-x-4">
              <span className="block w-12 h-[2px] bg-black"></span>
              <h1 className="text-5xl font-light text-black capitalize">
                {item.category}
              </h1>
              <span className="block w-12 h-[2px] bg-black"></span>
            </div>
            <div className="grid grid-cols-3 gap-4 gap-y-24  text-black place-content-center mt-12 items-center">
              {item.products.map((prod, i) => (
                <Link
                  key={i}
                  href={prod.link}
                  className="flex hover:opacity-80 transition-all flex-col gap-2 justify-center items-center"
                >
                  <Image
                    src={prod.image}
                    width={500}
                    height={500}
                    alt="image"
                  />
                  <h2 className="text-2xl uppercase">{prod.title}</h2>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
