import { AppBar } from ".";

export default {
  title: "Components/AppBar",
  component: AppBar,
  argTypes: {
    color: {
      options: ["default", "secondary", "primary", "inherit-white", "transparent"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    color: "default",
    className: {},
    toolbarIconButtonIconSize: "medium",
    toolbarIconButtonSize: "medium",
    toolbarTypographyVariantGutterClassName: {},
    toolbarTypographyVariant: "body-1",
    toolbarTypographyBodyClassName: {},
    toolbarHasMinHeight: true,
    toolbarMinHeightClassName: {},
    toolbarTypographyContent: "Website",
  },
};
