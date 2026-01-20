import React from "react";
import { CollectionBrowserWidget } from "../../widgets/collection/CollectionBrowserWidget";
import { ProductType } from "@/types/ProductType";
import { ProductCard2 } from "./ProductCard2";

export const ProductBrowserComponent = (props: { path?: string }) => {
  return (
    <CollectionBrowserWidget<ProductType>
      collection={function (params?: any): Promise<any> {
        throw new Error("Function not implemented.");
      }}
      renderItem={(product: ProductType, index?: number) => (
        <ProductCard2 {...product} index={index} />
      )}
    />
  );
};
