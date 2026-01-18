import { Controller } from "@hotwired/stimulus";
import { createRoot } from "react-dom/client";
import { CompanyServicePreviewComponent } from "../../react/components/features/services/CompanyServicePreviewComponent";
import { services } from "../../assets/data/services";

export default class extends Controller {
  static values = {
    previewList: Array,
    path: String,
  };

  connect() {
    const root = createRoot(this.element);
    root.render(<CompanyServicePreviewComponent previewList={services} path={this.pathValue} />);
  }
}
