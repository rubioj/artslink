/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Favoritefilled22 } from "../../icons/Favoritefilled22";
import { Favoritefilled7 } from "../../icons/Favoritefilled7";
import { BottomNavigation } from "../BottomNavigation";
import "./style.css";

export const IconOnlyFalseWrapper = ({
  iconOnly,
  items,
  className,
  bottomNavigationActiveTrueLabelClassName,
  bottomNavigationLabelContent = "Label",
  bottomNavigationIcon = <Favoritefilled7 className="favorite-filled-3" color="black" opacity="0.6" />,
  bottomNavigationActiveTrueLabelClassNameOverride,
  bottomNavigationLabelContent1 = "Label",
  override = <Favoritefilled22 className="favorite-filled-3" color="black" opacity="0.6" />,
  bottomNavigationActiveFalseLabelClassName,
  bottomNavigationLabelContent2 = "Label",
  bottomNavigationIcon1 = <Favoritefilled7 className="favorite-filled-3" color="black" opacity="0.38" />,
  to,
  to1,
}) => {
  return (
    <div className={`icon-only-false-wrapper ${className}`}>
      {items === "three" && (
        <>
          <BottomNavigation
            active={iconOnly ? true : undefined}
            className={bottomNavigationActiveTrueLabelClassName}
            icon={bottomNavigationIcon}
            label={iconOnly ? false : true}
            labelContent={bottomNavigationLabelContent}
            override={iconOnly ? <Favoritefilled7 className="favorite-filled-2" color="#173F56" /> : undefined}
            state="enabled"
            to={to}
          />
          <BottomNavigation
            active={false}
            className={bottomNavigationActiveTrueLabelClassNameOverride}
            icon={override}
            label={iconOnly ? false : true}
            labelContent={bottomNavigationLabelContent1}
            override={
              iconOnly ? <Favoritefilled22 className="favorite-filled-2" color="black" opacity="0.6" /> : undefined
            }
            state="enabled"
            to={to1}
          />
          <BottomNavigation
            active={false}
            className={bottomNavigationActiveFalseLabelClassName}
            icon={bottomNavigationIcon1}
            label={iconOnly ? false : true}
            labelContent={bottomNavigationLabelContent2}
            override={
              iconOnly ? <Favoritefilled7 className="favorite-filled-2" color="black" opacity="0.38" /> : undefined
            }
            state="disabled"
          />
        </>
      )}

      {items === "four" && (
        <>
          <BottomNavigation
            active
            className="bottom-navigation-action"
            icon={!iconOnly ? <Favoritefilled7 className="favorite-filled-3" color="#173F56" /> : undefined}
            label={iconOnly ? false : true}
            labelContent={!iconOnly ? "Label" : undefined}
            override={iconOnly ? <Favoritefilled7 className="favorite-filled-2" color="#173F56" /> : undefined}
            state="enabled"
          />
          <BottomNavigation
            active={false}
            className="bottom-navigation-action"
            icon={!iconOnly ? <Favoritefilled7 className="favorite-filled-3" color="black" opacity="0.6" /> : undefined}
            label={iconOnly ? false : true}
            labelContent={!iconOnly ? "Label" : undefined}
            override={
              iconOnly ? <Favoritefilled7 className="favorite-filled-2" color="black" opacity="0.6" /> : undefined
            }
            state="enabled"
          />
          <BottomNavigation
            active={false}
            className="bottom-navigation-action"
            icon={
              !iconOnly ? <Favoritefilled7 className="favorite-filled-3" color="black" opacity="0.38" /> : undefined
            }
            label={iconOnly ? false : true}
            labelContent={!iconOnly ? "Label" : undefined}
            override={
              iconOnly ? <Favoritefilled7 className="favorite-filled-2" color="black" opacity="0.38" /> : undefined
            }
            state="disabled"
          />
          <BottomNavigation
            active={false}
            className="bottom-navigation-action"
            icon={!iconOnly ? <Favoritefilled7 className="favorite-filled-3" color="black" opacity="0.6" /> : undefined}
            label={iconOnly ? false : true}
            labelContent={!iconOnly ? "Label" : undefined}
            override={
              iconOnly ? <Favoritefilled7 className="favorite-filled-2" color="black" opacity="0.6" /> : undefined
            }
            state="enabled"
          />
        </>
      )}
    </div>
  );
};

IconOnlyFalseWrapper.propTypes = {
  iconOnly: PropTypes.bool,
  items: PropTypes.oneOf(["three", "four"]),
  bottomNavigationLabelContent: PropTypes.string,
  bottomNavigationLabelContent1: PropTypes.string,
  bottomNavigationLabelContent2: PropTypes.string,
  to: PropTypes.string,
  to1: PropTypes.string,
};
