import React from "react";
import { ProductType } from "@/types/ProductType";
import { cn } from "@/lib/utils";

export const ProductCard2 = (props: ProductType & { index?: number }) => {
  return (
    <div className=" cursor-pointer w-full h-full overflow-hidden">
      <header className="w-full">
        <a href={`/catalog/${props.id}`} className="block w-full h-full">
          <figure className="w-full relative overflow-hidden rounded-sm">
            <img src={props.thumbnail} alt={props.description} className="w-full aspect-square" />
            <div className="absolute w-full h-full bg-black/5 z-20 top-0 left-0 hover:bg-white/25"></div>
          </figure>
        </a>
      </header>
      <footer className="space-y-2 pt-3 text-center">
        <h4 className="font-semibold leading-[120%] text-lg   text-dark  font-mono">
          {props.designation}
        </h4>
        <div className={cn("w-1/3 h-1 mx-auto bg-gray-300")}></div>
        <span className="text-lg font-bold font-sans leading-[120%] ">
          {Number(props.price).toLocaleString("fr-FR", {
            style: "currency",
            currency: "XAF",
            minimumFractionDigits: 2,
          })}
        </span>
      </footer>
    </div>
  );
};
