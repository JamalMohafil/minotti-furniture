'use client';
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

type Props = {
  image: string;
  title: string;
  description: string;
  link: string;
};

const HeroSection = ({ image, title, description, link }: Props) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          } else {
            setIsVisible(false);
          }
        });
      },
      { threshold: 0.5 } // Adjust this value to control when the effect triggers (50% of the element visible)
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className="relative w-full h-[100vh] transition-opacity duration-500"
      style={{ opacity: isVisible ? 1 : 0.2 }}
    >
      <div className="shadow2"></div>
      <div className="shadow"></div>

      <Image
        fill
        src={image}
        alt={`image of ${title}`}
        className="relative object-cover"
      />
      <Link href={link} className="group">
        <h1
          className="absolute group-hover:text-accent transition-all duration-300 
        w-max max-sm:text-3xl left-[50%] translate-x-[-50%] z-10 bottom-24 text-5xl"
        >
          {title}
        </h1>
        {description && (
          <span className="absolute max-sm:text-[14x] w-max group-hover:text-accent 
          transition-all duration-300 left-[50%] translate-x-[-50%] z-10 bottom-[55px] text-lg">
            {description}
          </span>
        )}
      </Link>
    </div>
  );
};

export default HeroSection;
