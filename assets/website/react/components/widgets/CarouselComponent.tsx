import React from "react";
import { Options as CarouselConfigType } from "@splidejs/splide";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import { useViewPort } from "../../hooks/use-view-port";

interface CarouselComponentProps<T> {
  items: Array<T & { key: any }>;
  renderItem: (item: T) => React.ReactNode;
  onItemClick?: (item: T) => void;
  config?: CarouselConfigType;
}

export function CarouselComponent<T>(props: CarouselComponentProps<T>) {
  const viewPort = useViewPort();

  return (
    <div
      className="w-full relative"
      style={{ height: props.config?.height ?? (viewPort?.isDesktop ? "320px" : "200px") }}
    >
      <Splide options={props.config} hasTrack={false} className="w-full h-full">
        <div className="relative">
          <SplideTrack>
            {props.items.map((item) => (
              <SplideSlide key={item.key}>{props.renderItem(item)}</SplideSlide>
            ))}
          </SplideTrack>
          <div className="splide__arrows">
            <button className="splide__arrow splide__arrow--prev"></button>
            <button className="splide__arrow splide__arrow--next"></button>
          </div>
        </div>
      </Splide>
    </div>
  );
}
