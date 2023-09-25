import { Tabs } from ".";

export default {
  title: "Components/Tabs",
  component: Tabs,
  argTypes: {
    status: {
      options: ["default-w-number", "default-WO-number", "active"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    status: "default-w-number",
    className: {},
    text: "Tab Name",
    lineClassName: {},
    line: "https://c.animaapp.com/NcdoIzsj/img/line-29-2.svg",
    divClassName: {},
    text1: "Tab N",
  },
};
