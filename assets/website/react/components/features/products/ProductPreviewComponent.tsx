import React from "react";
import { ProductType } from "../../../../types/ProductType";
import { CarouselComponent } from "../../widgets/CarouselComponent";
import { ProductCard } from "./ProductCard";

export const ProductPreviewComponent = (props: { previewList: ProductType[] }) => {
  return (
    <CarouselComponent<ProductType>
      items={props.previewList.map((item) => ({ ...item, key: item.id }))}
      config={{
        type: "slide",
        gap: "1rem",
        autoplay: true,
        perPage: 5,
        height: "320px",
        perMove: 1,
        wheel: true,
        interval: 3000,
        rewind: true,
      }}
      renderItem={(item) => <ProductCard {...item} />}
    />
  );
};
