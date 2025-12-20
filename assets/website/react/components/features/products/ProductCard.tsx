import React from "react";
import { ProductType } from "../../../../types/ProductType";

export const ProductCard = (props: ProductType) => {
  return (
    <div className="rounded-sm cursor-pointer w-full h-full overflow-hidden">
      <header className="w-full h-4/5">
        <a href={`/catalog/${props.id}`} className="block w-full h-full">
          <figure className="w-full h-full relative rounded-sm overflow-hidden">
            <img src={props.thumbnail} alt={props.description} className="h-full aspect-video" />
          </figure>
        </a>
      </header>
      <footer className="text-black h-1/5 content-center">
        <div>
          <h4 className="font-normal">{props.designation}</h4>
          <p className="text-md font-medium">
            {Number(props.price).toLocaleString("fr-FR", {
              style: "currency",
              currency: "XAF",
              minimumFractionDigits: 2,
            })}
          </p>
        </div>
      </footer>
    </div>
  );
};
