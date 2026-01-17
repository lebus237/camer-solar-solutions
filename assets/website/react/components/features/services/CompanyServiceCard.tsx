import React from "react";
import { CompanyServiceType } from "../../../../types/CompanyServiceType";

export const CompanyServiceCard = (props: CompanyServiceType & { rootPath: string }) => {
  return (
    <div className="w-full h-full relative overflow-hidden rounded-xl cursor-pointer group border border-yellow-500 ">
      <div className="w-full h-full z-10 pt-6">
        <figure className="w-3/5 aspect-square mx-auto">
          <img src={props.thumbnail} alt={props.designation} className="h-full aspect-video" />
        </figure>
      </div>
      <div className="absolute w-full h-full top-0 left-0  z-20 flex flex-col justify-end items-center py-6">
        <div className="bg-white  overflow-y-hidden  lg:w-5/6 px-3   h-16 p-4 flex  items-center rounded-sm">
          <div className="w-full">
            <h3 className="text-lg font-medium text-center  font-montserrat-sans text-dark">
              <a href={`${props.rootPath}#${props.tag}`}>{props.designation}</a>
            </h3>
            {/*<p className="text-md hidden group-hover:block font-sans font-medium">*/}
            {/*  {props.shortDescription}*/}
            {/*</p>*/}
          </div>
        </div>
      </div>
    </div>
  );
};
