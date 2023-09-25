import { Checkbox } from ".";

export default {
  title: "Components/Checkbox",
  component: Checkbox,
  argTypes: {
    status: {
      options: ["inactive", "active"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    label: true,
    status: "inactive",
    className: {},
  },
};
