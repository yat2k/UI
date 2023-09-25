import { SideNav } from ".";

export default {
  title: "Components/SideNav",
  component: SideNav,
  argTypes: {
    type: {
      options: ["expanded", "default"],
      control: { type: "select" },
    },
    user: {
      options: ["provider", "candidate", "employer", "program-application", "provider-1080"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    type: "expanded",
    user: "provider",
    className: {},
  },
};
