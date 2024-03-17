import { Toolbar } from ".";

export default {
  title: "Components/Toolbar",
  component: Toolbar,
  argTypes: {
    variant: {
      options: ["regular", "dense"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    menu: true,
    variant: "regular",
    smallScreen: true,
    className: {},
    iconButtonSize: "medium",
    iconButtonIconSize: "medium",
    typographyVariant: "body-1",
    typographyContent: "Website",
    typographyBodyClassName: {},
    typographyVariantGutterClassName: {},
    minHeightClassName: {},
    hasMinHeight: true,
    iconButtonColor: "inherit-white",
  },
};
