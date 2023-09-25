import { QualifiedBar } from ".";

export default {
  title: "Components/QualifiedBar",
  component: QualifiedBar,
  argTypes: {
    type: {
      options: ["qualified", "disqualified", "default"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    type: "qualified",
    className: {},
  },
};
