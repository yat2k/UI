import { CandidateTag } from ".";

export default {
  title: "Components/CandidateTag",
  component: CandidateTag,
  argTypes: {
    property1: {
      options: ["without-close", "default"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    property1: "without-close",
    className: {},
    close: "https://c.animaapp.com/NcdoIzsj/img/close-6.svg",
    text: "#top_candidate",
  },
};
