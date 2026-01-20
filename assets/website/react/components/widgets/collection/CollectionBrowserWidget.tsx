import React, { useEffect } from "react";
import useSWR from "swr";
import { products } from "@/assets/data/products";

export type CollectionBrowserWidgetProps<T> = {
  collection: (params?: any) => Promise<any>;
  renderItem: (item: T, index?: number) => React.ReactNode;
};

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export function CollectionBrowserWidget<T>(props: CollectionBrowserWidgetProps<T>) {
  const { data } = useSWR(
    "/api/collections",
    () => fetcher("https://node-api-olive.vercel.app/api/publication/collection"),
    { suspense: true },
  );

  return (
    <div className="grid grid-cols-4 gap-4">
      <aside className="xl:col-span-1">
        <h3 className="text-2xl font-medium relative h-10">
          Categories
          <div className="h-1 w-10 absolute left-0 bottom-0 bg-dark"></div>
        </h3>
      </aside>
      <aside className="xl:col-span-3">
        <header className="grid grid-cols-4 gap-4 h-10">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </header>
        <main className="border-t border-gray-200 grid xl:grid-cols-4 xl:gap-9 pt-6">
          {products.map((item: any, index: number) => (
            <div className="">{props.renderItem(item, index)}</div>
          ))}
        </main>
      </aside>
    </div>
  );
}
