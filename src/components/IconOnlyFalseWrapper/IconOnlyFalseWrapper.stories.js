import { IconOnlyFalseWrapper } from ".";

export default {
  title: "Components/IconOnlyFalseWrapper",
  component: IconOnlyFalseWrapper,
  argTypes: {
    items: {
      options: ["three", "four"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    iconOnly: true,
    items: "three",
    className: {},
    bottomNavigationActiveTrueLabelClassName: {},
    bottomNavigationLabelContent: "Label",
    bottomNavigationActiveTrueLabelClassNameOverride: {},
    bottomNavigationLabelContent1: "Label",
    bottomNavigationActiveFalseLabelClassName: {},
    bottomNavigationLabelContent2: "Label",
  },
};
