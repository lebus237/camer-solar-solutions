import { Controller } from "@hotwired/stimulus";
import { createRoot } from "react-dom/client";
import { HeroSectionComponent } from "../../react/components/widgets";

export default class extends Controller {
  static values = {
    pictures: Array,
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
        picturesList={this.picturesValue}
        enableCarousel={this.enableCarouselValue}
      />,
    );
  }
}
