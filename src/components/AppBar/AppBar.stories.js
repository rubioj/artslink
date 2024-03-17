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
    toolbarMinHeightClassName: {},
    toolbarHasMinHeight: true,
    toolbarTypographyContent: "Website",
    toolbarTypographyBodyClassName: {},
    toolbarTypographyVariant: "body-1",
    toolbarTypographyVariantGutterClassName: {},
    toolbarIconButtonSize: "medium",
  },
};
