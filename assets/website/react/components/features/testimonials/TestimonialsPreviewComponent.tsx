import React from "react";
import { ProductType } from "../../../../types/ProductType";
import { CarouselComponent } from "../../widgets/CarouselComponent";
import { TestimonialCard } from "./TestimonialCard";
import { TestimonialType } from "../../../../types/TestimonialType";

export const TestimonialsPreviewComponent = (props: { previewList: TestimonialType[] }) => {
  return (
    <CarouselComponent<TestimonialType>
      items={props.previewList.map((item, index) => ({ ...item, key: `testimonial-${index + 1}` }))}
      config={{
        type: "slide",
        gap: "16px",
        autoplay: true,
        perPage: 2,
        height: "225px",
        perMove: 1,
        wheel: true,
        interval: 5000,
        rewind: true,
      }}
      renderItem={(item) => (
        <div className="p-1 h-full">
          <TestimonialCard {...item} />
        </div>
      )}
    />
  );
};
