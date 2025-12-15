import { Controller } from "@hotwired/stimulus";
import React from "react";
import { createRoot } from "react-dom/client";
import Hello from "../react/src/views/HelloView";

/*
 * This is an example Stimulus controller!
 *
 * Any element with a data-controller="hello" attribute will cause
 * this controller to be executed. The name "hello" comes from the filename:
 * hello_controller.js -> "hello"
 *
 * Delete this file or adapt it for your use!
 */
export default class extends Controller {
  static values = { fullName: String };
  connect() {
    const root = createRoot(this.element);
    root.render(<Hello fullName={this.fullNameValue} />);
  }
}
