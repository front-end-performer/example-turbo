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
    /* Base styles for the Windows 98 button */
    .win98-button {
      display: inline-block;
      // padding: 8px 16px;
      padding-left: calc(12px * 1);
      padding-right: calc(12px * 1);
      font-family: "Tahoma", sans-serif;
      font-size: calc(14px * 1);
      letter-spacing: 0em;
      color: black;
      height: calc(32px * 1);
      // background-color: #e0e0e0; /* Light gray */
      // border: 1px solid #d3d3d3; /* Outer light gray border */
      // border-right-color: #808080; /* Darker right border */
      // border-bottom-color: #808080; /* Darker bottom border */
      // box-shadow:
      //   inset 1px 1px #fff,
      //   inset -1px -1px #a5a5a5; /* Inner highlights */
      cursor: pointer;
      outline: none;
      transition: all 0.1s ease-in-out;
    }

    /* Hover effect */
    .win98-button:hover {
      background-color: #d0d0d0; /* Slightly darker gray */
    }

    /* Active (pressed) effect */
    // .win98-button:active {
    //   border-top-color: #808080; /* Dark top border */
    //   border-left-color: #808080; /* Dark left border */
    //   border-right-color: #d3d3d3; /* Light right border */
    //   border-bottom-color: #d3d3d3; /* Light bottom border */
    //   box-shadow:
    //     inset 1px 1px #a5a5a5,
    //     inset -1px -1px #fff; /* Reverse inner highlights */
    //   background-color: #c0c0c0; /* Darker gray */
    // }

    .win98-button--primary {
      color: white;
      background-color: #3e63dd; /* Light blue */
      background-image: linear-gradient(to bottom, #0000 50%, #00002d17),
        linear-gradient(to bottom, #0000 50%, #3e63dd 80%);
      border: 1px solid rgb(255, 255, 255); /* Outer light blue border */
      border-right-color: #fff; /* Darker right border */
      border-bottom-color: #fff; /* Darker bottom border */
      border-inline-start-color: #fff; /* Darker bottom border */
      box-shadow:
        inset 0 0 0 1px #00002d17,
        inset 0 -2px 1px #0000330f,
        inset 0 0 0 1px #3e63dd,
        inset 0 4px 2px -2px #ffffffb3,
        inset 0 2px 1px -1px #ffffffb3;
      // box-shadow:
      //   inset 1px 1px #fff,
      //   inset -1px -1px rgb (31, 161, 241); /* Inner highlights */
      cursor: pointer;
      outline: none;
      transition: all 0.1s ease-in-out;
      border-radius: max(calc(4px * 1 * 1), 0px);
    }

    /* Hover effect */
    .win98-button--primary:hover {
      background-color: rgb(67, 104, 224); /* Slightly darker gray */
    }

    /* Active (pressed) effect */
    .win98-button--primary:active {
      background-color: #3e63dd; /* Darker gray */
      background-image: linear-gradient(#0000000d, #0000)
      padding-top: 2px;
      height: calc(32px * 1);
      box-shadow:
        inset 0 4px 2px -2px #00002d17,
        inset 0 1px 1px #00062e32,
        inset 0 0 0 1px #0009321f,
        inset 0 0 0 1px #3e63dd,
        inset 0 3px 2px #0000330f,
        inset 0 0 0 1px #ffffff80,
        inset 0 -2px 1px #ffffff4d;
    }
  `;

  render() {
    const mode = this.primary
      ? "win98-button--primary"
      : "win98-button--secondary";

    return html`
      <button
        class="win98-button win98-button--${this.size} ${mode}"
        type="default"
        @click=${this.onClick}
      >
        ${this.label}
      </button>
    `;
  }
}

// .storybook-button {
//   display: inline-block;
//   cursor: pointer;
//   border: 0;
//   border-radius: 3em;
//   font-weight: 700;
//   line-height: 1;
// font-family: "Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
// }
// .storybook-button--primary {
//   background-color: #1ea7fd;
//   color: white;
// }
// .storybook-button--secondary {
//   box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset;
//   background-color: transparent;
//   color: #333;
// }
// .storybook-button--small {
//   padding: 10px 16px;
//   font-size: 12px;
// }
// .storybook-button--medium {
//   padding: 11px 20px;
//   font-size: 14px;
// }
// .storybook-button--large {
//   padding: 12px 24px;
//   font-size: 16px;
// }
