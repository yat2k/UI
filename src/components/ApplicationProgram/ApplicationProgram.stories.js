import { ApplicationProgram } from ".";

export default {
  title: "Components/ApplicationProgram",
  component: ApplicationProgram,
  argTypes: {
    type: {
      options: ["active", "default"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    type: "active",
    className: {},
    text: "AS",
    text1: "Aaliyah Sanderson",
    textClassName: {},
    divClassName: {},
    text2: "Bachelor in Marketing",
  },
};
