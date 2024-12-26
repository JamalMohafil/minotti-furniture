import React from "react";

type Props = {};

const TechnicalFeatures = (props: Props) => {
  return (
    <div className="flex w-screen bg-white max-lg:px-12 max-sm:px-8 text-black px-24 pt-32 pb-20 flex-col gap-y-24">
      <h1 className="text-5xl max-sm:text-3xl text-primary font-extralight">
        Technical Features
      </h1>
      <div className="grid grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1 gap-5 max-md:gap-12 ">
        <div className="flex flex-col gap-y-4 justify-center items-center">
          <span>Sommier + padded headboard cm 172 for mattress cm 160x200</span>
          <img
            src="https://www.minotti.com/media/immagini/41270_n_HORIZONTE_BED_OFFSET_SOMMIER%20PADDED_HEADBOARD_172X234_H84.jpg"
            className="w-full h-max  object-contain"
          />
        </div>
        <div className="flex flex-col gap-y-4 justify-center items-center">
          <span>
            OFFSET rear headboard panel cm 155 mod. A - nightstand cm 60
          </span>
          <img
            src="https://www.minotti.com/media/immagini/41271_n_HORIZONTE_BED_OFFSET_REAR_HEADBOARD_PANEL_155_MOD_A.jpg"
            className="w-full h-max  object-contain"
          />
        </div>
        <div className="flex flex-col gap-y-4 justify-center items-center">
          <span>
            OFFSET rear headboard panel cm 158 mod. B - nightstand cm 60
          </span>
          <img
            src="https://www.minotti.com/media/immagini/41272_n_HORIZONTE_BED_OFFSET_READ_HEADBOARD_PANEL_158_MOD_B.jpg"
            className="w-full h-max  object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default TechnicalFeatures;
