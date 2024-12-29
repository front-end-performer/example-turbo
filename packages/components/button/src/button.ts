import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";

// Define the `args` interface for TypeScript
export interface AcrobatButtonArgs {
  primary?: boolean;
  backgroundColor?: string;
  size?: "small" | "medium" | "large";
  label?: string;
  onClick?: () => void;
}

@customElement("acrobat-button")
export class AcrobatButton extends LitElement {
  // Use @property decorator correctly and avoid setting default values outside the decorator
  @property({ type: Boolean }) accessor primary = false; // Property with default value
  @property({ type: String }) accessor backgroundColor = ""; // Property with default value
  @property({ type: String }) accessor size = "medium"; // Property with default value
  @property({ type: String }) accessor label = "Acrobat button"; // Property with default value
  @property({ type: Function }) accessor onClick: () => void = () => {}; // Optional function

  static styles = css`
    .storybook-button {
      display: inline-block;
      cursor: pointer;
      border: 0;
      border-radius: 3em;
      font-weight: 700;
      line-height: 1;
      font-family: "Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
    }
    .storybook-button--primary {
      background-color: #1ea7fd;
      color: white;
    }
    .storybook-button--secondary {
      box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset;
      background-color: transparent;
      color: #333;
    }
    .storybook-button--small {
      padding: 10px 16px;
      font-size: 12px;
    }
    .storybook-button--medium {
      padding: 11px 20px;
      font-size: 14px;
    }
    .storybook-button--large {
      padding: 12px 24px;
      font-size: 16px;
    }
  `;

  render() {
    const mode = this.primary
      ? "storybook-button--primary"
      : "storybook-button--secondary";
    return html`
      <button
        class="storybook-button storybook-button--${this.size} ${mode}"
        style="background-color: ${this.backgroundColor};"
        @click=${this.onClick}
      >
        ${this.label}
      </button>
    `;
  }
}
