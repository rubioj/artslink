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
    toolbarTypographyBodyClassName: {},
    toolbarHasMinHeight: true,
    toolbarTypographyVariant: "body-1",
    toolbarTypographyVariantGutterClassName: {},
    toolbarMinHeightClassName: {},
    toolbarIconButtonIconSize: "medium",
    toolbarTypographyContent: "Website",
    paperClassName: {},
    toolbarSmallScreen: false,
    toolbarHasDiv: true,
  },
};
