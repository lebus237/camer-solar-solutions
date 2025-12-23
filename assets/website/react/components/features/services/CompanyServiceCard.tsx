import React from "react";
import { CompanyServiceType } from "../../../../types/CompanyServiceType";

export const CompanyServiceCard = (props: CompanyServiceType) => {
  return (
    <div className="w-full h-full relative overflow-hidden rounded-sm cursor-pointer group border border-[#262627] bg-[#262627]">
      <div className="w-full h-full z-10">
        <figure className="w-full h-full">
          {/*<img src={props.thumbnail} alt={props.designation} className="h-full aspect-video" />*/}
        </figure>
      </div>
      <div className="absolute w-full h-full top-0 left-0  z-20 flex flex-col justify-end items-center py-6">
        <div className="bg-white rounded-sm border-2 overflow-y-hidden border-[#262627] lg:w-5/6 px-3  hover:space-y-3 transition-all duration-300 h-16 group-hover:h-44 p-4 flex group-hover:items-start items-center">
          <div className="group-hover:space-y-3 w-full">
            <h3 className="text-xl font-bold text-center group-hover:text-start font-sans text-dark">
              {props.designation}
            </h3>
            <p className="text-md hidden group-hover:block font-sans font-medium">
              {props.shortDescription}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
