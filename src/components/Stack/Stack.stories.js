import { Stack } from ".";

export default {
  title: "Components/Stack",
  component: Stack,
  argTypes: {
    instances: {
      options: ["two", "three", "four", "one", "five"],
      control: { type: "select" },
    },
    direction: {
      options: ["row", "column"],
      control: { type: "select" },
    },
    spacing: {
      options: ["seven", "zero", "five-1", "two", "three", "four", "one", "eight", "six"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    instances: "two",
    direction: "row",
    spacing: "seven",
    className: {},
  },
};
