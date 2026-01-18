import { ArrowLeft, ArrowRight, CalendarDays, MapPin, Phone } from "lucide-react";
import React from "react";

export type IconType = "arrow-right" | "arrow-left" | "calendar-days" | "phone" | "map-pin";

export function BaseIcon({ type, ...props }: { type: IconType; size?: number }) {
  const size = props.size ?? 24;

  switch (type) {
    case "arrow-right":
      return <ArrowRight size={size} />;
    case "arrow-left":
      return <ArrowLeft size={size} />;
    case "calendar-days":
      return <CalendarDays size={size} />;
    case "phone":
      return <Phone size={size} />;
    case "map-pin":
      return <MapPin size={size} />;
    default:
      return <div>OKAYYYYYY</div>;
  }
}
