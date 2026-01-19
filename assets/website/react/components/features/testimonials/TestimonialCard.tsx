import React from "react";
import { cn } from "../../../../lib/styles/classnames";
import { TestimonialType } from "../../../../types/TestimonialType";

export const TestimonialCard = (props: TestimonialType) => {
  return (
    <div className=" cursor-pointer w-full h-full overflow-hidden p-6 shadow-[0px_0px_5px_0px_rgba(0,0,0,0.1),0px_0px_1px_0px_rgba(0,0,0,0.1)]">
      <header className="w-full">
        <figure className="relative rounded-full w-16 h-16 overflow-hidden">
          <img src="https://picsum.photos/200/300" />
        </figure>
        <div>{props.author}</div>
      </header>
    </div>
  );
};
