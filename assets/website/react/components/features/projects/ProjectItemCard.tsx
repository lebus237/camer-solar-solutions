import React from "react";
import { ArrowUpRight } from "lucide-react";

export type ProjectItemType = {
  title: string;
  slug: string;
  thumbnail: string;
  tag: string;
  counter?: number;
};

export const ProjectItemCard = (props: ProjectItemType) => {
  return (
    <div className="relative w-full xl:h-[700px]">
      <header className="relative w-full h-3/4">
        <figure className="w-full h-full relative rounded-sm overflow-hidden">
          <img src={props.thumbnail} alt={props.title} className="w-full h-full object-cover" />
        </figure>
        <div className="absolute w-full h-full top-0 left-0 z-20 bg-black/20 p-6">
          {props.counter && (
            <div className="size-10 content-center text-center bg-dark text-white text-xl ">
              {props.counter}
            </div>
          )}
        </div>
        <div className="absolute z-30 right-6 -bottom-6 h-12 flex justify-center items-center uppercase bg-primary text-white px-6">
          {props.tag}
        </div>
      </header>
      <footer className="h-1/4 pt-12 px-1 border-b border-dark">
        <h4 className="text-xl font-medium text-dark font-montserrat-sans w-5/6">{props.title}</h4>
        <p className="text-base font-medium flex gap-x-1 items-center mt-2 border w-fit p-2">
          <a href={`/projects/${props.slug}`} className="hover:underline">
            Voir plus
          </a>
            <ArrowUpRight size={18}/>
        </p>
      </footer>
    </div>
  );
};
