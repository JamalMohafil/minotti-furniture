import Link from "next/link";
import React from "react";
import { GoFileDirectory } from "react-icons/go";
import { CgSearch } from "react-icons/cg";
import { useRouter } from "next/navigation";

type Props = {
  searchTerm:any;
  setSearchTerm:any
};
export const TOPLINKS = [
  {
    title: "CONTACT Us",
    link: "/",
  },
  {
    title: "Catalogues",
    link: "/",
  },
  {
    title: "Download Area",
    link: "/",
  },
  {
    title: "Designers",
    link: "/",
  },
  {
    title: "Login",
    link: "/",
  },
];
export const LANGS = [{
  title: "EN",
  active:true,
  link:"/en"
},
{
  title: "FR",
  active:false,
  link:"/fr"
},
{
  title: "ES",
  active:false,
  link:"/es"
},{
  title: "DE",
  active:false,
  link:"/de"
},{
  title: "IT",
  active:false,
  link:"/it"
},{
  title: "RU",
  active:false,
  link:"/ru"
}
];
const TopNav = ({searchTerm,setSearchTerm}: Props) => {
  const router = useRouter()
  return (
    <div className="w-full h-[40px] z-20 max-md:hidden flex justify-between items-center bg-primary">
      <div className="px-4 max-lg:px-1">
        <ul className="flex gap-4 max-lg:gap-2  ">
          {LANGS.map((item, i) => (
            <li key={i}>
              <Link
                href={item.link}
                className={`text-[11px] cursor-pointer uppercase ${
                  item.active
                    ? "text-white"
                    : "text-accent/60 hover:text-accent/100 transition-all"
                } `}
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex gap-2">
        <ul className="flex items-center gap-2">
          {TOPLINKS.map((item, i) => (
            <li key={i}>
              <Link
                href={item.link}
                className="text-[12px] max-[850px]:text-[11px] uppercase text-accent hover:text-accent/60  transition-all"
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
        <div className="flex items-center transition-all hover:opacity-80 gap-2">
    
          <input
            type="text"
            className="text-[12px] text-accent bg-transparent outline-none border-0 max-w-[50px]"
            placeholder="Search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button
            className="text-white text-lg p-3"
            onClick={() => router.push(`/category/as?query=${searchTerm}`)}
          >
            <CgSearch />
          </button>
        </div>
        <button className="flex items-center transition-all hover:opacity-80 gap-2">
          <span className="text-[12px] text-accent">My Selection</span>
          <span className="bg-secondary text-lg p-3">
            <GoFileDirectory />
          </span>
        </button>
      </div>
    </div>
  );
};

export default TopNav;
