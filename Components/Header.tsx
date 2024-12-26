"use client";
import React, { useEffect, useState } from "react";
import TopNav, { LANGS, TOPLINKS } from "./TopNav";
import Image from "next/image";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";
import { GoFileDirectory, GoPlus } from "react-icons/go";
import { BiMinus } from "react-icons/bi";
import { CgSearch } from "react-icons/cg";
import { useRouter } from "next/navigation";

type Props = {};
const HEADERLINKS = [
  {
    title: "Materials",
    subLinks: {
      images: [
        {
          title: "Materials",
          image:
            "https://www.minotti.com/media/immagini/14260_t_ANTE_MENU_01.jpg",
          link: "/",
        },
        {
          title: "Care And Maintenance",

          image:
            "https://www.minotti.com/media/immagini/14266_t_CURA-E-MANUTENZIONE.jpg",
          link: "/",
        },
      ],
      items: [
        {
          show: true,
          links: [
            {
              title: "Materials",
              link: "/category/2",
            },
            {
              title: "Care And Maintenance",
              link: "/category/2",
            },
          ],
        },
      ],
    },
  },
  {
    title: "Collections",
    link: "/",
  },

  {
    title: "About us",
    subLinks: {
      images: [
        {
          title: "Profile",
          image: "https://www.minotti.com/media/immagini/16779_t_ANTE_MENU.jpg",
          link: "/",
        },
        {
          title: "company showroom",

          image: "https://www.minotti.com/media/immagini/16777_t_ANTE_MENU.jpg",
          link: "/",
        },
        {
          title: "Indoor Outdoor",

          image:
            "https://www.minotti.com/media/immagini/15057_t_INDOOR_OUTDOOR.jpg",
          link: "/",
        },
      ],
      items: [
        {
          show: true,
          links: [
            {
              title: "About Us",
              link: "/",
            },
            {
              title: "Company Showroom",
              link: "/",
            },
          ],
        },
      ],
    },
  },
  {
    title: "News & Media",
    subLinks: {
      images: [
        {
          title: "Minotti Concept Store by Meiser",
          image: "https://www.minotti.com/media/immagini/44028_t_ANTE_MENU.jpg",
          link: "/",
        },
        {
          title: "Minotti opens the new Concept Store by Pesch in Cologne",

          image: "https://www.minotti.com/media/immagini/42730_t_Ante_Menu.jpg",
          link: "/",
        },
        {
          title:
            "Minotti opens the new flagship store in Chongqing with Ansel Home",

          image: "https://www.minotti.com/media/immagini/42532_t_ANTE_MENU.jpg",
          link: "/",
        },
      ],
      items: [
        {
          show: true,
          links: [
            {
              title: "News",
              link: "/",
            },
            {
              title: "Advertising Campaign",
              link: "/",
            },
          ],
        },
      ],
    },
  },
  {
    title: "Sales Network",
    subLinks: {
      images: [
        {
          title: "Store Locator",
          image:
            "https://www.minotti.com/media/immagini/14749_t_STORE%20LOCATOR.jpg",
          link: "/",
        },
        {
          title: "Minotti Stuttgart by Kampe 54",

          image: "https://www.minotti.com/media/immagini/44358_t_ANTE_MENU.jpg",
          link: "/",
        },
        {
          title: "Minotti Kobe by Sukeno",

          image: "https://www.minotti.com/media/immagini/42984_t_ANTE_MENU.jpg",
          link: "/",
        },
      ],
      desc: `Be informed that we, Minotti S.p.A., sell exclusively through our authorized dealer network, indicated in this section of the web-site. Any quotation of products belonging to the Minotti S.p.A. collection carried out by unauthorized parties who are not members of this section, must be considered doubtful and unofficial. On these quotations, Minotti S.p.A. disclaims any guarantee and responsibility for the originality, quality and safety of the products.`,
      items: [
        {
          show: true,
          links: [
            {
              title: "Flagship Stores Network",
              link: "/",
            },
            {
              title: "Store Locator",
              link: "/",
            },
          ],
        },
      ],
    },
  },
  {
    title: "Products",
    link: "/category/2",
    subLinks: {
      images: [
        {
          title: "Hospiliaty",
          image:
            "https://www.minotti.com/media/immagini/35953_t_ANTEPRIMA_menu.jpg",
          link: "/",
        },
        {
          title: "STUDIO COLLECTION",

          image:
            "https://www.minotti.com/media/immagini/35952_t_ANTEPRIMA_menu.jpg",
          link: "/",
        },
      ],
      items: [
        {
          title: "INDOOR",
          titleLink: "/category/2",
          links: [
            {
              title: "Sofas",
              link: "/",
            },
            {
              title: "Chaise Longue",
              link: "/",
            },
            {
              title: "Armchairs",
              link: "/",
            },
            {
              title: "Accessiors",
              link: "/",
            },
            { title: "Little armchairs and stools", link: "/" },
            {
              title: "Tables",
              link: "/",
            },
            {
              title: "Coffee Tables",
              link: "/",
            },
          ],
        },
        {
          links: [
            {
              title: "Console tables",
              link: "/",
            },
            {
              title: "Bookcases and sideboards",
              link: "/",
            },
            {
              title: "Rugs",
              link: "/",
            },
            {
              title: "Beds",
              link: "/",
            },
            {
              title: "Night-tables",
              link: "/",
            },
            {
              title: "Bedwear",
              link: "?",
            },
          ],
        },
        {
          title: "OUTDOOR",
          titleLink: "/",
          links: [
            {
              title: "Sofas",
              link: "/",
            },
            {
              title: "Chaise Longue",
              link: "/",
            },
            {
              title: "Armchairs",
              link: "/",
            },
            {
              title: "Accessiors",
              link: "/",
            },
            { title: "Little armchairs and stools", link: "/" },
            {
              title: "Tables",
              link: "/",
            },
            {
              title: "Coffee Tables",
              link: "/",
            },
            {
              title: "Sunloungers",
              link: "/",
            },
            {
              title: "Bedwear",
              link: "/",
            },
            {
              title: "Rugs",
              link: "/",
            },
          ],
        },
      ],
    },
  },
  {
    title: "2024 Collection",
    link: "/",
  },
  {
    title: "2024 Experience",
    link: "/",
  },
  {
    title: "Projects",
    link: "/",
  },
  {
    title: "Video",
    link: "/",
  },
];
const Header = (props: Props) => {
  const [active, setActive] = useState<boolean>(false);
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [openSubIndex, setOpenSubIndex] = useState<number | null>(null);
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const toggleSubLinks = (index: number) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };
  const [searchTerm, setSearchTerm] = useState<string>("");
  const toggleSubLinksLinks = (index: number) => {
    if (openSubIndex === index) {
      setOpenSubIndex(null);
    } else {
      setOpenSubIndex(index);
    }
  };
  const router = useRouter();
  return (
    <>
      <TopNav searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <header
        className={`${
          isFixed
            ? "fixed bg-primary/80 mt-[-24px] max-lg:py-6"
            : "absolute md:mt-8 lg:mt-4"
        } transition-all left-0 top-0  w-full z-20`}
      >
        <div className="w-full bg-primary/5 max-[1200px]:gap-4 max-lg:px-16 max-[400px]:px-3 max-sm:px-8 max-lg:justify-between  justify-center flex items-end gap-8 pt-6 z-30 relative">
          <ul className=" max-lg:hidden flex gap-6 max-[1200px]:gap-2 items-center">
            {HEADERLINKS.slice(5, 10).map((link, i) => {
              let gridLength = 0;

              // تحقق من وجود subLinks و items و images
              if (link.subLinks) {
                gridLength =
                  (link.subLinks.items ? link.subLinks.items.length : 0) +
                  (link.subLinks.images ? link.subLinks.images.length : 0);
              }
              return (
                <li
                  key={i}
                  className="text-white py-5 font-semibold text-sm hover:text-accent cursor-pointer group"
                >
                  {/* Products Menu */}
                  {link.subLinks ? (
                    <>
                      <span>{link.title}</span>
                      <div
                        className="absolute max-h-0 overflow-hidden group-hover:max-h-[600px] transition-all flex top-[100%] left-0 w-screen 
                   bg-primary/80 text-white shadow-lg group-hover:p-8 pt-0 justify-center"
                      >
                        <div
                          className={`max-w-[80%] min-[1400px]:max-w-[1300px] max-[1300px]:max-w-[92%] max-[1090px]:max-w-[98%] border-t pt-8 border-white  w-full flex justify-around gap-8`}
                        >
                          {link.subLinks.items.map((item: any, idx) => {
                            return (
                              <div className="min-w-[5%]">
                                {item.titleLink ? (
                                  <Link
                                    href={item.titleLink}
                                    className="font-bold text-lg mb-4"
                                  >
                                    {item.title}
                                  </Link>
                                ) : (
                                  <h4 className="font-bold text-lg mb-4">
                                    {item.title}
                                  </h4>
                                )}
                                {item.links.map((link: any, i: number) => (
                                  <Link
                                    key={idx}
                                    href={link.link}
                                    className="block hover:text-accent mb-2"
                                  >
                                    {link.title}
                                  </Link>
                                ))}
                              </div>
                            );
                          })}

                          {/* Image Columns */}
                          {link.subLinks.desc && (
                            <p className="max-w-[210px] text-gray-300 font-medium">
                              {link.subLinks.desc}
                            </p>
                          )}
                          {link.subLinks.desc ||
                          (link.subLinks.images.length > 2 &&
                            link.subLinks.items.length > 1) ? (
                            <div
                              className={`
                            "max-w-[60%] gap-3 justify-end flex flex-wrap  "
                              
                               
                            `}
                            >
                              {link.subLinks.images.map((imageLink, idx) => (
                                <div className="flex flex-col gap-4">
                                  <Link
                                    key={idx}
                                    href={imageLink.link}
                                    className="hover:text-accent"
                                  >
                                    <img
                                      src={imageLink.image}
                                      alt={imageLink.title}
                                      className="w-full max-h-[190px] hover:opacity-80"
                                    />
                                    <h4 className="font-semibold mt-2">
                                      {imageLink.title}
                                    </h4>
                                  </Link>
                                </div>
                              ))}
                            </div>
                          ) : (
                            <>
                              {link.subLinks.images.map((imageLink, idx) => (
                                <div className="flex flex-col gap-4">
                                  <Link
                                    key={idx}
                                    href={imageLink.link}
                                    className="hover:text-accent"
                                  >
                                    <img
                                      src={imageLink.image}
                                      alt={imageLink.title}
                                      className="w-full hover:opacity-80"
                                    />
                                    <h4 className="font-semibold mt-2">
                                      {imageLink.title}
                                    </h4>
                                  </Link>
                                </div>
                              ))}
                            </>
                          )}
                        </div>
                      </div>
                    </>
                  ) : (
                    <Link href={link.link}>{link.title}</Link>
                  )}
                </li>
              );
            })}
          </ul>
          <Link href="/" className="lg:py-5">
            <Image
              width={150}
              height={150}
              src="https://www.minotti.com/img/logo.png"
              alt="logo"
            />
          </Link>
          <span
            onClick={() => setActive(!active)}
            className="text-white  lg:hidden flex text-3xl cursor-pointer"
          >
            <CiMenuFries />
          </span>
          <ul className=" max-lg:hidden flex gap-6 max-[1200px]:gap-2 items-center">
            {HEADERLINKS.slice(0, 5).map((link, i) => {
              let gridLength = 0;

              // تحقق من وجود subLinks و items و images
              if (link.subLinks) {
                gridLength =
                  (link.subLinks.items ? link.subLinks.items.length : 0) +
                  (link.subLinks.images ? link.subLinks.images.length : 0);
              }
              return (
                <li
                  key={i}
                  className="text-white py-5 font-semibold text-sm hover:text-accent cursor-pointer group"
                >
                  {/* Products Menu */}
                  {link.subLinks ? (
                    <>
                      <span>{link.title}</span>{" "}
                      <div
                        className="absolute max-h-0 overflow-hidden group-hover:max-h-[600px] transition-all flex top-[100%] left-0 w-screen 
                   bg-primary/80 text-white shadow-lg group-hover:p-8 pt-0 justify-center"
                      >
                        <div
                          className={`max-w-[80%] min-[1400px]:max-w-[1300px] max-[1300px]:max-w-[92%] max-[1090px]:max-w-[98%] border-t pt-8 border-white  w-full flex justify-around gap-8`}
                        >
                          {link.subLinks.items.map((item: any, idx) => {
                            return (
                              <div className="min-w-[20%]" key={idx}>
                                <h4 className="font-bold text-lg mb-4">
                                  {item.title}
                                </h4>
                                {item.links.map((link: any, i: number) => (
                                  <Link
                                    key={i}
                                    href={link.link}
                                    className="block hover:text-accent mb-2"
                                  >
                                    {link.title}
                                  </Link>
                                ))}
                              </div>
                            );
                          })}

                          {/* Image Columns */}
                          {link.subLinks.desc && (
                            <p className="max-w-[210px] text-gray-300 font-medium">
                              {link.subLinks.desc}
                            </p>
                          )}
                          {link.subLinks.desc ||
                          (link.subLinks.images.length > 2 &&
                            link.subLinks.items.length > 1) ? (
                            <div
                              className={`
                            "max-w-[60%] gap-3 justify-end flex flex-wrap  "
                              
                               
                            `}
                            >
                              {link.subLinks.images.map((imageLink, idx) => (
                                <div className="flex flex-col gap-4">
                                  <Link
                                    key={idx}
                                    href={imageLink.link}
                                    className="hover:text-accent"
                                  >
                                    <img
                                      src={imageLink.image}
                                      alt={imageLink.title}
                                      className="w-full max-h-[190px] hover:opacity-80"
                                    />
                                    <h4 className="font-semibold mt-2">
                                      {imageLink.title}
                                    </h4>
                                  </Link>
                                </div>
                              ))}
                            </div>
                          ) : (
                            <>
                              {link.subLinks.images.map((imageLink, idx) => (
                                <div className="flex flex-col gap-4">
                                  <Link
                                    key={idx}
                                    href={imageLink.link}
                                    className="hover:text-accent"
                                  >
                                    <img
                                      src={imageLink.image}
                                      alt={imageLink.title}
                                      className="w-full hover:opacity-80"
                                    />
                                    <h4 className="font-semibold mt-2">
                                      {imageLink.title}
                                    </h4>
                                  </Link>
                                </div>
                              ))}
                            </>
                          )}
                        </div>
                      </div>
                    </>
                  ) : (
                    <Link href={link.link}>{link.title}</Link>
                  )}
                </li>
              );
            })}
          </ul>
          <div
            className={`lg:hidden absolute w-full bg-primary min-h-[500px] top-[120%] left-0 ${
              active ? "flex " : "hidden"
            } flex-col`}
          >
            <ul className="flex flex-col">
              <li className="flex md:hidden bg-[#777777] gap-3 items-center max-sm:px-6 px-16 py-1 text-sm">
                {LANGS.map((item, i) => (
                  <Link
                    href={item.link}
                    className={`${item.active ? "text-white" : "text-accent"}`}
                    key={i}
                  >
                    {item.title}
                  </Link>
                ))}
              </li>
              {HEADERLINKS.map((item, i) => {
                const isOpen = openIndex === i;
                return (
                  <li key={i} className="w-full flex flex-col">
                    {item.link ? (
                      <Link
                        href={item.link}
                        onClick={() => toggleSubLinks(i)}
                        className={`text-xl px-16 max-sm:px-6 py-2.5 bg-[#4f4f4f] w-full transition-all cursor-pointer duration-500 hover:text-accent border-b border-black`}
                      >
                        {item.title}
                      </Link>
                    ) : (
                      <span
                        onClick={() => toggleSubLinks(i)}
                        className={`text-xl max-sm:px-6 px-16 py-2.5 bg-[#4f4f4f] w-full transition-all cursor-pointer duration-500 hover:text-accent border-b border-black`}
                      >
                        {item.title}
                      </span>
                    )}
                    {item.subLinks && isOpen && (
                      <div className="flex pt-4 mt-5 bg-primary w-full flex-col gap-3">
                        <div
                          className={`gridimages min-[560px]:flex flex-nowrap items-center ${
                            item.subLinks.images.length > 2
                              ? "justify-around"
                              : "justify-evenly"
                          }  gap-4`}
                        >
                          {item.subLinks.images.map((imageLink, idx) => (
                            <div
                              key={idx}
                              className="flex flex-col min-[560px]:max-w-[30%] max-[560px]:w-[100%] mb-4"
                            >
                              <Link
                                href={imageLink.link}
                                className="hover:text-accent flex flex-col gap-2"
                              >
                                <img
                                  src={imageLink.image}
                                  alt={imageLink.title}
                                  className="w-full object-cover max-h-[120px] max-[400px]:max-h-[200px] hover:opacity-80"
                                />
                                <h4 className="font-medium text-sm mt-2">
                                  {imageLink.title}
                                </h4>
                              </Link>
                            </div>
                          ))}
                        </div>
                        <ul className="flex items-center flex-col mt-4 w-full justify-between">
                          {item.subLinks.items.map((subItem: any, idx) => {
                            const isSubOpen = openSubIndex === idx;
                            if (subItem?.title) {
                              return (
                                <>
                                  <li
                                    key={idx}
                                    className={`text-xl max-sm:px-6 flex w-full justify-between items-center px-16 border-t ${
                                      isSubOpen ? " " : "border-b"
                                    } border-accent py-3`}
                                  >
                                    <Link href={subItem?.titleLink}>
                                      {subItem?.title}
                                    </Link>
                                    <span
                                      className="text-3xl cursor-pointer text-accent"
                                      onClick={() => toggleSubLinksLinks(idx)}
                                    >
                                      {isSubOpen ? <BiMinus /> : <GoPlus />}
                                    </span>
                                  </li>
                                  {isSubOpen &&
                                    subItem.links.map(
                                      (link: any, i: number) => (
                                        <li
                                          key={i}
                                          className={`text-xl flex w-full max-sm:px-6 justify-between items-center px-16 ${
                                            i === 1 && "border-t"
                                          } ${
                                            i !== subItem.links.length - 1 &&
                                            "border-b"
                                          } border-accent py-3`}
                                        >
                                          <Link href={link.link}>
                                            {link?.title}
                                          </Link>
                                        </li>
                                      )
                                    )}
                                </>
                              );
                            }
                            return (
                              subItem.show === true &&
                              subItem.links.map((link: any, i: number) => (
                                <li
                                  key={i}
                                  className="text-xl flex max-sm:px-6 w-full justify-between items-center px-16 border-t border-b border-accent py-3"
                                >
                                  <span>{link?.title}</span>
                                  <span className="text-3xl text-accent">
                                    <GoPlus />
                                  </span>
                                </li>
                              ))
                            );
                          })}
                        </ul>
                      </div>
                    )}
                  </li>
                );
              })}
              <div className="flex gap-2 w-full pb-5 pt-2">
                <ul className="flex items-center flex-col w-full gap-2">
                  <div className="flex items-center transition-all hover:opacity-80 w-full px-12 max-[400px]:px-6 gap-2">
                    <input
                      type="text"
                      className="text-lg  text-accent bg-transparent outline-none border-0 w-full"
                      placeholder="Search"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <button
                      className="text-white text-xl p-3"
                      onClick={() =>
                        router.push(`/category/as?query=${searchTerm}`)
                      }
                    >
                      <CgSearch />
                    </button>
                  </div>
                  <div className="flex flex-wrap px-6 max-[400px]:px-4 justify-center items-center w-full gap-3">
                    {TOPLINKS.map((item, i) => (
                      <li key={i}>
                        <Link
                          href={item.link}
                          className="text-sm uppercase max-[400px]:text-[12px] text-accent hover:text-accent/60  transition-all"
                        >
                          {item.title}
                        </Link>
                      </li>
                    ))}
                  </div>
                </ul>
                {/* 
              <button className="flex items-center transition-all hover:opacity-80 gap-2">
                <span className="text-[12px] text-accent">My Selection</span>
                <span className="bg-secondary text-lg p-3">
                  <GoFileDirectory />
                </span>
              </button> */}
              </div>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
