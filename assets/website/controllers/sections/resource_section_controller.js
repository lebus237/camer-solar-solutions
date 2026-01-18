import { Controller } from "@hotwired/stimulus";
import { createRoot } from "react-dom/client";
import { ResourceSectionComponent } from "../../react/components/features/resource-section/ResourceSectionComponent";

export default class extends Controller {
  static values = {
    content: String,
    pictures: Array,
    title: String,
  };

  connect() {
    const root = createRoot(this.element);
    root.render(
      <ResourceSectionComponent
        title={this.titleValue}
        content={this.contentValue}
        thumbnails={this.picturesValue}
      />,
    );
  }
}
