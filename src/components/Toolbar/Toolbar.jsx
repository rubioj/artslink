/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Menufilled2 } from "../../icons/Menufilled2";
import { Starsharp25 } from "../../icons/Starsharp25";
import { IconButton } from "../IconButton";
import { Stack } from "../Stack";
import { Typography } from "../Typography";
import "./style.css";

export const Toolbar = ({
  menu = true,
  variant,
  smallScreen,
  className,
  iconButtonSize = "medium",
  iconButtonIconIcon = <Menufilled2 className="starsharp-122" color="white" />,
  iconButtonIconSize = "medium",
  typographyVariant = "body-1",
  typographyBodyClassName,
  typographyContent = "Website",
  typographyVariantGutterClassName,
  minHeightClassName,
  hasMinHeight = true,
  stack = (
    <IconButton
      className="instance-node-3"
      color="inherit-white"
      iconIcon={<Starsharp25 className="starsharp-122" color="white" />}
      iconSize="medium"
      size="medium"
      stateProp="enabled"
    />
  ),
  iconButtonColor = "inherit-white",
  to,
}) => {
  return (
    <div className={`toolbar small-screen-${smallScreen} ${className}`}>
      <div className="left-side">
        {menu && (
          <IconButton
            className="instance-node-3"
            color={iconButtonColor}
            iconIcon={iconButtonIconIcon}
            iconSize={iconButtonIconSize}
            size={iconButtonSize}
            stateProp="enabled"
            to={to}
          />
        )}

        <Typography
          bodyClassName={typographyBodyClassName}
          className={typographyVariantGutterClassName}
          content={typographyContent}
          gutterBottom={false}
          variant={typographyVariant}
        />
      </div>
      {variant === "regular" && !smallScreen && <div className={`min-height-4 ${minHeightClassName}`} />}

      {(smallScreen || variant === "dense") && (
        <Stack
          className="instance-node-3"
          direction="row"
          instances="one"
          override={
            <IconButton
              className="instance-node-3"
              color="inherit-white"
              iconIcon={<Starsharp25 className="starsharp-122" color="white" />}
              iconSize="medium"
              size="medium"
              stateProp="enabled"
            />
          }
          spacing="zero"
        />
      )}

      {hasMinHeight && (
        <>
          <>
            {variant === "regular" && !smallScreen && (
              <Stack className="instance-node-3" direction="row" instances="one" override={stack} spacing="zero" />
            )}

            {(smallScreen || variant === "dense") && <div className={`min-height-5 ${variant}`} />}
          </>
        </>
      )}
    </div>
  );
};

Toolbar.propTypes = {
  menu: PropTypes.bool,
  variant: PropTypes.oneOf(["regular", "dense"]),
  smallScreen: PropTypes.bool,
  iconButtonSize: PropTypes.string,
  iconButtonIconSize: PropTypes.string,
  typographyVariant: PropTypes.string,
  typographyContent: PropTypes.string,
  hasMinHeight: PropTypes.bool,
  iconButtonColor: PropTypes.string,
  to: PropTypes.string,
};
