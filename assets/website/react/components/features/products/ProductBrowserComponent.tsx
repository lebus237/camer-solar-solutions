import React from "react";
import { CollectionBrowserWidget } from "../../widgets/collection/CollectionBrowserWidget";

export const ProductBrowserComponent = () => {
  return (
    <CollectionBrowserWidget
      collection={function (params?: any): Promise<any> {
        throw new Error("Function not implemented.");
      }}
      renderItem={function (item: any): React.ReactNode {
        throw new Error("Function not implemented.");
      }}
    />
  );
};
