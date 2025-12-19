import React from "react";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import { Options } from "@splidejs/splide";
import {useViewPort} from "../../../hooks/use-view-port";
import Button from "../../core/button/Button";

export type HeroSectionComponentProps = {
  picturesList: string[];
  enableCarousel?: boolean;
  title?: string;
  description?: string;
};

export const HeroSectionComponent = (props: HeroSectionComponentProps) => {
  const viewPort = useViewPort()

    const options: Options = {
    type: "fade",
    gap: "0px",
    autoplay: true,
    pauseOnHover: false,
    resetProgress: false,
    height: viewPort?.isDesktop ? "700px" : '500px',
    interval: 5000,
  };

  return (
    <div className="w-full md:h-[500px] xl:h-[700px] relative">
      <Splide options={options} hasTrack={false} className="w-full h-full">
        <div className="relative">
          <SplideTrack>
            {props.picturesList.map((picture) => (
              <SplideSlide>
                <figure className="relative w-full h-full">
                  <img src={picture} alt="Picture" className="h-full lg:aspect-[15/3] xl:aspect-[16/4]" />
                </figure>
              </SplideSlide>
            ))}
          </SplideTrack>
          <div className="splide__arrows">
            <button className="splide__arrow splide__arrow--prev"></button>
            <button className="splide__arrow splide__arrow--next"></button>
          </div>
        </div>
      </Splide>
        <div className="absolute top-0 left-0 w-full h-full bg-black/60">
            <div className='relative container h-full mx-auto'>
                <div className='absolute bottom-1/4 xxl:bottom-1/5 xl:bottom-1/4 lg:w-3/5 xxl:w-2/5 space-y-6'>
                    <div className='space-y-6'>
                        <h1 className="text-white lg:text-6xl font-bold">{props.title}</h1>
                        <p className="text-white text-xl font-light">{props.description}</p>
                    </div>
                    <div className='flex gap-x-3'>
                        <a href='/catalogue' className=''>
                            <Button label='Voir catalog ue' type='default' variant='solid'/>
                        </a>
                        <a href='/contacts' className='cursor-pointer'>
                            <Button label='Contactez-nous' type='default' variant='outline'/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};
