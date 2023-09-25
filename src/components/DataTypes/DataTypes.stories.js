import { DataTypes } from ".";

export default {
  title: "Components/DataTypes",
  component: DataTypes,
  argTypes: {
    type: {
      options: ["multi-choice", "yes-no", "number", "dropdown", "date", "para", "short-answer", "video", "file-upload"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    type: "multi-choice",
    className: {},
  },
};
