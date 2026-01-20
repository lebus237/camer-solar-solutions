import { Controller } from "@hotwired/stimulus";
import { createRoot } from "react-dom/client";
import { ProductBrowserComponent } from "@/react/components/features/products/ProductBrowserComponent";

export default class extends Controller {
  static values = {
    path: String,
  };

  connect() {
    const root = createRoot(this.element);
    root.render(<ProductBrowserComponent path={this.pathValue} />);
  }
}
