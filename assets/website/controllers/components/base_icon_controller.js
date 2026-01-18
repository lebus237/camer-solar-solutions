import { Controller } from "@hotwired/stimulus";
import { createRoot } from "react-dom/client";
import { BaseIcon } from "../../react/components/core/icons/BaseIcon";

export default class extends Controller {
  static values = {
    type: String,
    size: Number,
  };

  connect() {
    const root = createRoot(this.element);
    root.render(<BaseIcon type={this.typeValue} size={this.sizeValue} />);
  }
}
