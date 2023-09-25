import { Tags } from ".";

export default {
  title: "Components/Tags",
  component: Tags,
  argTypes: {
    property1: {
      options: ["disabled", "active", "default"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    property1: "disabled",
    className: {},
    text: "New York",
  },
};
