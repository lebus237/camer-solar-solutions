import React from "react";

export type HeroSectionComponentProps = {
  picturesList: string[];
  enableCarousel?: boolean;
  title?: string;
  description?: string;
};

export const HeroSectionComponent = (props: HeroSectionComponentProps) => {
  console.log(props.picturesList);
  return (
    <section className="w-full h-48 bg-black">
      <h2 className="text-center text-3xl font-bold">{props.title}</h2>
      <p className="text-center text-xl">{props.description}</p>
        <div className='flex justify-center gap-4'>
            {props.picturesList.map((picture) => (
                <figure className="rounded-full">
                    <img src={picture} alt="picture" className="rounded-full"/>
                </figure>
            ))}
        </div>
    </section>
  );
};
