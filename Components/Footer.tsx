import React from "react";
import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaPinterestP,
  FaYoutube,
  FaVimeoV,
  FaLinkedinIn,
} from "react-icons/fa";
import { RiWechatFill } from "react-icons/ri";

const Footer = () => {
  const socialIcons = [
    { Icon: FaFacebookF, name: "Facebook" },
    { Icon: FaInstagram, name: "Instagram" },
    { Icon: FaPinterestP, name: "Pinterest" },
    { Icon: FaYoutube, name: "YouTube" },
    { Icon: FaVimeoV, name: "Vimeo" },
    { Icon: FaLinkedinIn, name: "LinkedIn" },
    { Icon: RiWechatFill, name: "WeChat" },
  ];

  return (
    <footer className="bg-black text-white py-8 px-4">
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-between min-[1300px]:px-24 items-center">
          {/* Subscribe Section */}
          <div className="w-2/3 max-md:w-full flex flex-col gap-y-5">

          <div className="w-full md:max-w-[400px]  mb-6 md:mb-0">
            <h3 className="text-xl mb-4">Subscribe to keep updated</h3>
            <form className="flex max-[400px]:flex-col max-[400px]:gap-y-4">
              <input
                type="email"
                placeholder="Your e-mail address"
                className="bg-transparent border-b border-white p-2 flex-grow"
                />
              <button
                type="submit"
                className="ml-2 bg-white text-black px-4 py-2"
                
              >
                SUBSCRIBE
              </button>
            </form>
          </div>

          {/* Company Info */}
          <div className="w-full  mb-6  md:mb-0 text-sm">
            <p>© Minotti 2024. All Rights Reserved</p>
            <p>Minotti SpA</p>
            <p>Via Indipendenza, 152 - 20821 Meda (MB)</p>
            <p>C.F. 00693150153 | P.I. 00680170969</p>
            <p>Numero REA : MB-671894</p>
            <p>Cap. Soc. 1.000.000€ i.v.</p>
          </div>
          </div>

          {/* Links and Social Icons */}
          <div className="w-full md:w-1/3 text-center max-md:text-left">
            <div className="mb-4">
              {socialIcons.map(({ Icon, name }) => (
                <a
                  key={name}
                  href={`#${name.toLowerCase()}`}
                  className="inline-block ml-2"
                >
                  <Icon className="w-6 h-6" />
                </a>
              ))}
            </div>
            <div className="text-sm">
              <Link href="/privacy-policy">
                Privacy policy and cookie policy
              </Link>
              <br />
              <Link href="/legal-notice">Legal notice</Link>
              <br />
              <Link href="/corporate">Corporate</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
