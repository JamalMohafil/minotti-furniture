'use client'
import React, { useRef, useState } from "react";
import { FaDownload, FaTimes } from "react-icons/fa";
import Slider from "react-slick";

type Props = {

  images:string[],
};

const SliderProduct = ({ images }: Props) => {
  const isDragging = useRef(false);
  const startTime = useRef(0);
const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  variableWidth: false, // تغيير هذا إلى false
  centerMode: false, // تغيير هذا إلى false
  adaptiveHeight: true,
  responsive: [
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};
  const handleMouseDown = () => {
    isDragging.current = false;
    startTime.current = new Date().getTime();
  };

  const handleMouseMove = () => {
    isDragging.current = true;
  };
  const openFullScreen = (img: any) => {
    setFullScreenImage(img);
  };
  const handleMouseUp = (img: any) => {
    const endTime = new Date().getTime();
    if (!isDragging.current && endTime - startTime.current < 200) {
      openFullScreen(img);
    }
  };
  const [fullScreenImage, setFullScreenImage] = useState(null);
  const downloadImage = (imgUrl: string) => {
    fetch(imgUrl)
      .then((response) => response.blob())
      .then((blob) => {
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.download = "image.jpg";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        window.URL.revokeObjectURL(url);
      })
      .catch((error) => console.error("Error downloading the image:", error));
  };

  const closeFullScreen = () => {
    setFullScreenImage(null);
  };

  return (
    <>
      <div className="slider-container">
        <Slider {...settings}>
          {images.map((img, index) => (
            <div key={index} className="slide-item">
              <div className="relative h-[90vh] flex items-center justify-center">
                <img
                  src={img}
                  className="max-h-full max-w-full max-md:max-w-[100vw] w-full object-contain cursor-pointer"
                  alt={`Slide ${index + 1}`}
                  onMouseDown={handleMouseDown}
                  onMouseMove={handleMouseMove}
                  onMouseUp={() => handleMouseUp(img)}
                />
                <button
                  className="absolute bottom-5 left-5 bg-white text-black p-2 rounded"
                  onClick={() => downloadImage(img)}
                >
                  <FaDownload />
                </button>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      {fullScreenImage && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50">
          <img
            src={fullScreenImage}
            className="max-h-[90vh] max-w-[90vw] object-contain"
            alt="Full screen"
          />
          <button
            className="absolute top-5 right-5 text-white text-3xl"
            onClick={closeFullScreen}
          >
            <FaTimes />
          </button>
          <button
            className="absolute bottom-5 left-5 bg-white text-black p-2 rounded"
            onClick={() => downloadImage(fullScreenImage)}
          >
            <FaDownload />
          </button>
        </div>
      )}
    </>
  );
};

export default SliderProduct;
