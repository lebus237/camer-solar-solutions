import { Controller } from "@hotwired/stimulus";
import { createRoot } from "react-dom/client";
import { ProductPreviewComponent } from "../../react/components/features/products/ProductPreviewComponent";
import { products } from "../../assets/data/products";
import { ProductBrowserComponent } from "../../react/components/features/products/ProductBrowserComponent";

export default class extends Controller {
  static values = {};

  connect() {
    const root = createRoot(this.element);
    root.render(<ProductBrowserComponent />);
  }
}
