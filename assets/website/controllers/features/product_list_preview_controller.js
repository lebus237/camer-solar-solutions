import { Controller } from "@hotwired/stimulus";
import { createRoot } from "react-dom/client";
import { ProductPreviewComponent } from "../../react/components/features/products/ProductPreviewComponent";
import { products } from "../../assets/data/products";

export default class extends Controller {
  static values = {
    previewList: Array,
  };

  connect() {
    const root = createRoot(this.element);
    root.render(<ProductPreviewComponent previewList={products} />);
  }
}
