import React from "react";
import { Slide } from "react-awesome-reveal";
import { CompanyServiceType } from "../../../../types/CompanyServiceType";
import { CompanyServiceCard } from "./CompanyServiceCard";

export function CompanyServicePreviewComponent(props: { previewList: CompanyServiceType[] }) {
  return (
    <div className="w-full flex justify-center xl:gap-x-9">
      {props.previewList.map((service, index) => (
        <div className="w-1/4 h-[500px] overflow-hidden">
          <Slide direction={index % 2 == 0 ? "up" : "down"} triggerOnce className="w-full h-full">
            <CompanyServiceCard {...service} />
          </Slide>
        </div>
      ))}
    </div>
  );
}
