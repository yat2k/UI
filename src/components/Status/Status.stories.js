import { Status } from ".";

export default {
  title: "Components/Status",
  component: Status,
  argTypes: {
    status: {
      options: ["status-3", "disqualify", "active"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    status: "status-3",
    className: {},
  },
};
