/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Menufilled2 } from "../../icons/Menufilled2";
import { Starsharp25 } from "../../icons/Starsharp25";
import { IconButton } from "../IconButton";
import { Toolbar } from "../Toolbar";
import "./style.css";

export const AppBar = ({
  color,
  className,
  toolbarIconButtonSize = "medium",
  toolbarTypographyBodyClassName,
  toolbarHasMinHeight,
  toolbarTypographyVariant = "body-1",
  toolbarIconButtonIconIcon = <Menufilled2 className="menu-filled" color="white" />,
  toolbarTypographyVariantGutterClassName,
  toolbarMinHeightClassName,
  toolbarIconButtonIconSize = "medium",
  toolbarTypographyContent = "Website",
  paperClassName,
  toolbarSmallScreen = false,
  toolbarHasDiv,
  to,
}) => {
  return (
    <div className={`app-bar ${className}`}>
      <div className={`paper color-25-${color} ${paperClassName}`}>
        <Toolbar
          className="toolbar-instance"
          hasDiv={toolbarHasDiv}
          hasMinHeight={toolbarHasMinHeight}
          iconButtonColor={["default", "inherit-white", "transparent"].includes(color) ? "inherit" : undefined}
          iconButtonIconIcon={toolbarIconButtonIconIcon}
          iconButtonIconSize={toolbarIconButtonIconSize}
          iconButtonSize={toolbarIconButtonSize}
          minHeightClassName={toolbarMinHeightClassName}
          smallScreen={toolbarSmallScreen}
          stack={
            <IconButton
              className="icon-button-instance"
              color={
                ["primary", "secondary"].includes(color)
                  ? "inherit-white"
                  : ["default", "inherit-white", "transparent"].includes(color)
                  ? "inherit"
                  : undefined
              }
              iconIcon={
                <Starsharp25
                  className="menu-filled"
                  color={
                    ["primary", "secondary"].includes(color)
                      ? "white"
                      : ["default", "inherit-white", "transparent"].includes(color)
                      ? "black"
                      : undefined
                  }
                  opacity={["default", "inherit-white", "transparent"].includes(color) ? "0.87" : undefined}
                />
              }
              iconSize="medium"
              size="medium"
              stateProp="enabled"
            />
          }
          to={to}
          typographyBodyClassName={toolbarTypographyBodyClassName}
          typographyContent={toolbarTypographyContent}
          typographyVariant={toolbarTypographyVariant}
          typographyVariantGutterClassName={toolbarTypographyVariantGutterClassName}
          variant="regular"
        />
      </div>
    </div>
  );
};

AppBar.propTypes = {
  color: PropTypes.oneOf(["default", "secondary", "primary", "inherit-white", "transparent"]),
  toolbarIconButtonSize: PropTypes.string,
  toolbarHasMinHeight: PropTypes.bool,
  toolbarTypographyVariant: PropTypes.string,
  toolbarIconButtonIconSize: PropTypes.string,
  toolbarTypographyContent: PropTypes.string,
  toolbarSmallScreen: PropTypes.bool,
  toolbarHasDiv: PropTypes.bool,
  to: PropTypes.string,
};
