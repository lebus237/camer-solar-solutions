import { Controller } from "@hotwired/stimulus";
import { createRoot } from "react-dom/client";
import { TestimonialsPreviewComponent } from "../../react/components/features/testimonials/TestimonialsPreviewComponent";
import { testimonials } from "../../assets/data/testimonials";

export default class extends Controller {
  static values = {
    previewList: Array,
  };

  connect() {
    const root = createRoot(this.element);
    root.render(<TestimonialsPreviewComponent previewList={testimonials} />);
  }
}
