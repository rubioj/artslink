/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Homefilled } from "../../icons/Homefilled";
import { Peoplefilled } from "../../icons/Peoplefilled";
import { Searchfilled3 } from "../../icons/Searchfilled3";
import { IconOnlyFalseWrapper } from "../IconOnlyFalseWrapper";
import "./style.css";

export const BottomNavigationWrapper = ({
  className,
  iconOnlyFalseWrapperBottomNavigationIcon = <Peoplefilled className="icon-instance-node" color="#173F56" />,
  override = <Homefilled className="icon-instance-node" />,
  iconOnlyFalseWrapperIconOnlyFalseClassName,
  iconOnlyFalseWrapperBottomNavigationIcon1 = <Searchfilled3 className="icon-instance-node" color="#173F56" />,
  to,
  to1,
}) => {
  return (
    <div className={`bottom-navigation-wrapper ${className}`}>
      <IconOnlyFalseWrapper
        bottomNavigationActiveFalseLabelClassName="bottom-navigation-instance"
        bottomNavigationActiveTrueLabelClassName="bottom-navigation-instance"
        bottomNavigationActiveTrueLabelClassNameOverride="bottom-navigation-instance"
        bottomNavigationIcon={override}
        bottomNavigationIcon1={iconOnlyFalseWrapperBottomNavigationIcon}
        bottomNavigationLabelContent="home"
        bottomNavigationLabelContent1="browse"
        bottomNavigationLabelContent2="join"
        className={iconOnlyFalseWrapperIconOnlyFalseClassName}
        iconOnly={false}
        items="three"
        override={iconOnlyFalseWrapperBottomNavigationIcon1}
        to={to1}
        to1={to}
      />
    </div>
  );
};

BottomNavigationWrapper.propTypes = {
  to: PropTypes.string,
  to1: PropTypes.string,
};
