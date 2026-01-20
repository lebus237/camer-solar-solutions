import React from "react";
import { ProductType } from "@/types/ProductType";
import { ProductCard } from "./ProductCard";
import { CarouselComponent } from "@/react/components/widgets/CarouselComponent";

export const ProductPreviewComponent = (props: { previewList: ProductType[] }) => {
  return (
    <CarouselComponent<ProductType>
      items={props.previewList.map((item) => ({ ...item, key: item.id }))}
      config={{
        type: "slide",
        gap: "1.5rem",
        autoplay: true,
        perPage: 5,
        height: "340px",
        perMove: 1,
        wheel: false,
        interval: 3000,
        rewind: true,
      }}
      renderItem={(item, index) => (
        <ProductCard {...item} color={index % 2 === 0 ? "dark" : "primary"} />
      )}
    />
  );
};
