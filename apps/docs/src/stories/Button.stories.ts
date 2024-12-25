import { html, TemplateResult } from "lit";
import { Meta, StoryFn, StoryObj } from "@storybook/web-components";
import type { AcrobatButtonArgs } from "@acrobat-ui/button/button";
import "@acrobat-ui/button/button";
import { fn } from "@storybook/test";

const meta: Meta<AcrobatButtonArgs> = {
  title: "Example/AcrobatButton",
  tags: ["autodocs"],
  component: "acrobat-button",
  argTypes: {
    primary: { control: "boolean" },
    backgroundColor: { control: "color" },
    size: {
      control: "select",
      options: ["small", "medium", "large"],
    },
    label: { control: "text" },
    onClick: { action: "onClick" },
  },
  args: { onClick: fn() },
};

export default meta;
type Story = StoryObj<AcrobatButtonArgs>;

const Template: StoryFn<AcrobatButtonArgs> = (
  args: AcrobatButtonArgs
): TemplateResult => html`
  <acrobat-button
    .primary=${args.primary}
    .backgroundColor=${args.backgroundColor}
    .size=${args.size}
    .label=${args.label}
    .onClick=${args.onClick}
  ></acrobat-button>
`;

export const Primary: Story = {
  render: Template,
  args: {
    primary: true,
    backgroundColor: "#1ea7fd",
    size: "medium",
    label: "Primary Button",
  },
};

export const Secondary: Story = {
  render: Template,
  args: {
    primary: false,
    backgroundColor: "transparent",
    size: "medium",
    label: "Secondary Button",
  },
};
export const Large: Story = {
  render: Template,
  args: {
    primary: true,
    size: "large",
    label: "Large Button",
  },
};
export const Small: Story = {
  render: Template,
  args: {
    primary: true,
    size: "small",
    label: "Small Button",
  },
};