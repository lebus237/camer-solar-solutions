import React from "react";

export type HeroSectionComponentProps = {
  picturesList: string[];
  enableCarousel?: boolean;
  title?: string;
  description?: string;
};

export const HeroSectionComponent = (props: HeroSectionComponentProps) => {
  return <section className="w-full h-48 bg-black/30">HERO SECTION</section>;
};
