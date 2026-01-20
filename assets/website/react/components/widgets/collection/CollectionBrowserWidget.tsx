import React from "react";

export type CollectionBrowserWidgetProps = {
  collection: (params?: any) => Promise<any>;
  renderItem: (item: any) => React.ReactNode;
};

export function CollectionBrowserWidget(props: CollectionBrowserWidgetProps) {
  return (
    <div>
      <header></header>
      <main className="border-t border-gray-200"></main>
    </div>
  );
}
