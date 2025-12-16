import { Controller } from "@hotwired/stimulus";
import { createRoot } from "react-dom/client";
import { HeroSectionComponent } from "../react/src/components/widgets";

export default class extends Controller {
  static values = {
    picturesList: String,
    enableCarousel: Boolean,
    title: String,
    description: String,
  };
  connect() {
    const root = createRoot(this.element);
    root.render(
      <HeroSectionComponent
        title={this.titleValue}
        description={this.descriptionValue}
        picturesList={this.picturesListValue}
        enableCarousel={this.enableCarouselValue}
      />,
    );
  }
}
