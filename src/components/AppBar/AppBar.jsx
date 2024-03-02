/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Menufilled9 } from "../../icons/Menufilled9";
import { Starsharp25 } from "../../icons/Starsharp25";
import { IconButton } from "../IconButton";
import { Toolbar } from "../Toolbar";
import "./style.css";

export const AppBar = ({
  color,
  className,
  paperClassName,
  toolbarTypographyBodyClassName,
  toolbarHasMinHeight,
  toolbarTypographyContent = "Website",
  toolbarSmallScreen = false,
  toolbarIconButtonIconIcon = <Menufilled9 className="menu-filled" color="white" />,
  toolbarIconButtonIconSize = "medium",
  toolbarTypographyVariant = "body-1",
  to,
}) => {
  return (
    <div className={`app-bar ${className}`}>
      <div className={`paper color-25-${color} ${paperClassName}`}>
        <Toolbar
          className="toolbar-instance"
          hasMinHeight={toolbarHasMinHeight}
          iconButtonColor={["default", "inherit-white", "transparent"].includes(color) ? "inherit" : undefined}
          iconButtonIconIcon={toolbarIconButtonIconIcon}
          iconButtonIconSize={toolbarIconButtonIconSize}
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
          variant="regular"
        />
      </div>
    </div>
  );
};

AppBar.propTypes = {
  color: PropTypes.oneOf(["default", "secondary", "primary", "inherit-white", "transparent"]),
  toolbarHasMinHeight: PropTypes.bool,
  toolbarTypographyContent: PropTypes.string,
  toolbarSmallScreen: PropTypes.bool,
  toolbarIconButtonIconSize: PropTypes.string,
  toolbarTypographyVariant: PropTypes.string,
  to: PropTypes.string,
};
