import { Controller } from "@hotwired/stimulus";
import { createRoot } from "react-dom/client";
import { ResourceSectionComponent } from "../../react/components/features/resource-section/ResourceSectionComponent";
import { ProjectPreviewComponent } from "../../react/components/features/projects/ProjectPreviewComponent";
import { projects } from "../../assets/data/projects";

export default class extends Controller {
  static values = {
    content: String,
    pictures: Array,
    title: String,
  };

  connect() {
    const root = createRoot(this.element);
    root.render(<ProjectPreviewComponent previewList={[...projects, ...projects]} />);
  }
}
