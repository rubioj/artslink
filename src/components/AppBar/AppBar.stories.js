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
    toolbarMinHeightClassName: {},
    toolbarTypographyContent: "Website",
    toolbarTypographyVariant: "body-1",
    toolbarHasMinHeight: true,
    toolbarTypographyBodyClassName: {},
  },
};
