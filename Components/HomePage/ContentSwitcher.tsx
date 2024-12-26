import Link from "next/link";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

type Props = {
  name: string;
  links: {
    title: string;
    link: string;
    icon?:any;
  }[];
};

const ContentSwitcher = ({ name, links }: Props) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      gsap.fromTo(
        containerRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
      );
    }
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-screen bg-white py-32 max-sm:py-20 flex flex-col justify-center items-center px-8 max-md:px-4"
    >
      <h1 className="text-black text-6xl max-md:text-4xl mb-8 text-center">
        {name}
      </h1>
      <ul className="flex items-center gap-4 flex-wrap max-w-[90%] max-md:max-w-[95%] max-sm:max-w-full justify-center">
        {links.map((link, i) => (
          <React.Fragment key={i}>
            <li
              className={`text-[16px]  max-md:text-sm uppercase text-gray-700`}
            >
              <Link
                href={link ? (link.link ? link.link : "/") : "/"}
                className={` ${
                  link.icon && "flex flex-nowrap w-max items-center gap-2"
                }`}
              >
                {link.title}
                {link.icon && link.icon}
              </Link>
            </li>
            {i !== links.length - 1 && (
              <div className="h-[2px] w-6 bg-gray-700"></div>
            )}
          </React.Fragment>
        ))}
      </ul>
    </div>
  );
};

export default ContentSwitcher;
