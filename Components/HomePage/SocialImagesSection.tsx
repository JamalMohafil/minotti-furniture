import React from "react";
import Image from "next/image"; // Assuming you're using Next.js for image optimization
import {
  FaFacebook,
  FaInstagram,
  FaPinterest,
  FaYoutube,
} from "react-icons/fa6";
import Link from "next/link";

type Props = {};

const SocialImagesSection = (props: Props) => {
  return (
    <div className="grid grid-cols-2 w-screen max-md:grid-cols-1 max-h-[100vh] max-md:max-h-[200vh]  gap-0">
      <div className="relative">
        <img
          src="https://www.minotti.com/media/immagini/11647_z_SALONE_FB.jpg"
          alt="Facebook"
          className="w-full h-[50vh] object-cover"
        />
        <div className="bg-black/50 z-[2] absolute left-0 top-0 w-full h-full" />
        <Link
          href={"/"}
          className="absolute hover:opacity-80 transition-all flex items-center gap-2 top-[50%] z-[3] translate-x-[-50%] trasnlate-y-[-50%] left-[50%] text-2xl text-white"
        >
          <span>Facebook</span>
          <span>
            <FaFacebook />
          </span>
        </Link>
      </div>
      <div className="relative">
        <img
          src="https://www.minotti.com/media/immagini/11648_z_YVES_IG.jpg"
          alt="Instagram"
          className="w-full h-[50vh]  object-cover"
        />
        <div className="bg-black/50 z-[2] absolute left-0 top-0 w-full h-full" />
        <Link
          href={"/"}
          className="absolute hover:opacity-80 transition-all flex items-center gap-2 top-[50%] z-[3] translate-x-[-50%] trasnlate-y-[-50%] left-[50%] text-2xl text-white"
        >
          <span>Instagram</span>
          <span>
            <FaInstagram />
          </span>
        </Link>{" "}
      </div>
      <div className="relative">
        <img
          src="https://www.minotti.com/media/immagini/11649_z_PINTEREST.jpg"
          alt="Pinterest"
          className="w-full h-[50vh] object-cover"
        />
        <div className="bg-black/50 z-[2] absolute left-0 top-0 w-full h-full" />
        <Link
          href={"/"}
          className="absolute hover:opacity-80 transition-all flex items-center gap-2 top-[50%] z-[3] translate-x-[-50%] trasnlate-y-[-50%] left-[50%] text-2xl text-white"
        >
          <span>Pinterest</span>
          <span>
            <FaPinterest />
          </span>
        </Link>{" "}
      </div>
      <div className="relative">
        <img
          src="https://www.minotti.com/media/immagini/11650_z_MINOTTI_LATITUDINI_youtube.jpg"
          alt="Youtube"
          className="w-full h-[50vh] object-cover"
        />
        <div className="bg-black/50 z-[2] absolute left-0 top-0 w-full h-full" />
        <Link
          href={"/"}
          className="absolute hover:opacity-80 transition-all flex items-center gap-2 top-[50%] z-[3] translate-x-[-50%] trasnlate-y-[-50%] left-[50%] text-2xl text-white"
        >
          <span>Youtube</span>
          <span>
            <FaYoutube />
          </span>
        </Link>{" "}
      </div>
    </div>
  );
};

export default SocialImagesSection;
