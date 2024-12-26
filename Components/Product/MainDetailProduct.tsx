import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react'
import { FaFacebookF, FaPinterestP } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

type Props = {}

const MainDetailProduct = (props: Props) => {
    const [showShareMenu, setShowShareMenu] = useState(false);

const toggleShareMenu = () => {
  setShowShareMenu(!showShareMenu);
};
  const shareMenuRef = useRef<any>();
  const shareWordRef = useRef<any>();
  const handleClickOutside = (event: any) => {
    if (
      shareMenuRef.current &&
      !shareMenuRef.current.contains(event.target) &&
      shareWordRef.current &&
      !shareWordRef.current.contains(event.target)
    ) {
      setShowShareMenu(false);
    }
  };

  useEffect(() => {
    if (showShareMenu) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showShareMenu]);
  return (
    <div className="flex justify-between flex-col text-black px-16 py-14 bg-white mt-[-6px] items-center gap-8">
      <div className="flex flex-col gap-y-0 justify-center items-center">
        <h1 className="text-[90px] text-black">AMII</h1>
        <Link href={"/"} className="underline text-primary ">
          Marcio Kogan / Studio MK27
        </Link>
      </div>
      <div className="flex justify-between gap-8 ">
        <div className="w-2/5 flex flex-col">
          <p
            className="first-letter:text-[100px]
             first-letter:leading-none first-letter:pr-3 
             first-letter:float-left first-letter:align-top"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
            voluptatibus consequatur fugit quasi sint! Sequi nostrum repellendus
            laborum ipsa officia, porro tempora, non quaerat, rem voluptatem
            expedita recusandae veniam praesentium quisquam beatae! Minus nemo,
            consequatur beatae possimus eveniet iste, temporibus id, eaque
            impedit error cumque. Iste assumenda maiores quos officiis iure a
            provident et eligendi! Quo iste exercitationem nam quaerat,
            voluptates hic voluptatem libero est, quod rerum natus, praesentium
            quisquam eius. Reprehenderit neque commodi dolore fugit ut suscipit
            nulla facere, exercitationem,
          </p>
          <p>
            porro aperiam? Autem nesciunt tempora aliquid eos cumque rerum
            magnam reiciendis beatae qui sint! Cum commodi, unde, asperiores
            voluptate quibusdam nobis dignissimos aliquid sapiente minus
            blanditiis soluta assumenda dolorem iure obcaecati, rem ducimus nisi
            architecto iusto reprehenderit! Voluptate enim saepe, vitae quia
            nostrum esse voluptas quod illo mollitia sunt recusandae dolorum
            soluta culpa cumque illum voluptatum dolorem iusto obcaecati,
            reprehenderit necessitatibus praesentium deleniti, lab
          </p>
          <p>
            {" "}
            dignissimos, eveniet laudantium doloribus, optio ex quas officiis
            accusamus quia animi numquam necessitatibus. Reiciendis quisquam nam
            eaque dignissimos ullam minus blanditiis ab, repellendus magnam
            nihil temporibus odit accusamus exercitationem consectetur ex facere
            porro provident nemo libero accusantium officia eligendi.
            Repudiandae esse voluptatem, recusandae reprehenderit quisquam hic
            illum molestiae natus tempora, laudantium temporibus cupiditate qui
            aut eos quaerat maiores saepe, voluptate quas. Reprehenderit
          </p>
          <div className="flex flex-col items-start space-y-6 mt-10">
            {/* زر التنزيل */}
            <button className="border-2 transition-all hover:bg-black hover:text-white hover:rounded-xl border-black px-6 py-2 text-sm tracking-wide">
              DOWNLOAD
            </button>

            {/* الروابط السفلية */}
            <div className="relative">
              <div className="flex space-x-6 text-sm tracking-wide">
                <div className="flex relative items-center justify-center">
                  <span className="block w-6 border-b border-black"></span>
                  <span
                    onClick={toggleShareMenu}
                    className="mx-2 cursor-pointer"
                    ref={shareWordRef}
                  >
                    SHARE
                  </span>
                  {showShareMenu && (
                    <div
                      ref={shareMenuRef}
                      className="absolute top-6 left-[60%] trnaslate-x-[-40%] transform -translate-x-1/2 border-2 border-black p-2 bg-white"
                    >
                      <div className="flex space-x-4">
                        <FaFacebookF className="text-xl cursor-pointer" />
                        <FaPinterestP className="text-xl cursor-pointer" />
                        <MdEmail className="text-xl cursor-pointer" />
                      </div>
                    </div>
                  )}
                </div>
                <div className="flex items-center justify-center">
                  <span className="block w-6 border-b border-black"></span>
                  <span className="mx-2">FIND A DEALER</span>
                </div>
                <div className="flex items-center justify-center">
                  <span className="block w-6 border-b border-black"></span>
                  <span className="mx-2">SAVE IN YOUR SELECTION</span>
                </div>
              </div>

              {/* قائمة المشاركة */}
            </div>
          </div>
        </div>

        <div className="w-3/5">
          <img
            className="w-full h-max"
            loading="lazy"
            src="https://www.minotti.com/media/immagini/40224_n_HORIZONTE_BED_01.jpg"
            alt="minotti"
          />
        </div>
      </div>
    </div>
  );
}

export default MainDetailProduct