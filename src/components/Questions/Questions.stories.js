import { Questions } from ".";

export default {
  title: "Components/Questions",
  component: Questions,
  argTypes: {
    type: {
      options: ["m-choice", "default"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    type: "m-choice",
    className: {},
    dataTypesType: "video",
    dataTypeTagType: "variant-5",
    lineClassName: {},
    line: "https://c.animaapp.com/NcdoIzsj/img/line-33-14.svg",
    dataTypeValuesValue: "short-answer",
  },
};
