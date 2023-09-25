import { DataTypeValues } from ".";

export default {
  title: "Components/DataTypeValues",
  component: DataTypeValues,
  argTypes: {
    value: {
      options: [
        "yes-no",
        "number",
        "dropdown",
        "multichoice",
        "date",
        "short-answer",
        "video",
        "file-upload",
        "paragrapgh",
        "value-10",
      ],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    value: "yes-no",
    className: {},
  },
};
