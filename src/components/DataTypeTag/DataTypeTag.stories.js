import { DataTypeTag } from ".";

export default {
  title: "Components/DataTypeTag",
  component: DataTypeTag,
  argTypes: {
    type: {
      options: [
        "default",
        "variant-5",
        "variant-2",
        "variant-3",
        "number",
        "variant-9",
        "variant-4",
        "date",
        "file-upload",
      ],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    type: "default",
  },
};
