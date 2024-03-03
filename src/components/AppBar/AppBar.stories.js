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
    toolbarIconButtonSize: "medium",
    toolbarTypographyContent: "Website",
    toolbarMinHeightClassName: {},
    toolbarHasMinHeight: true,
    toolbarTypographyVariant: "body-1",
    toolbarTypographyBodyClassName: {},
    toolbarIconButtonIconSize: "medium",
    toolbarTypographyVariantGutterClassName: {},
  },
};
