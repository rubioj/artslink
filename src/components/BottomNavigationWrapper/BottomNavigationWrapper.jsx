/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Homefilled } from "../../icons/Homefilled";
import { Peoplefilled } from "../../icons/Peoplefilled";
import { Searchfilled } from "../../icons/Searchfilled";
import { IconOnlyFalseWrapper } from "../IconOnlyFalseWrapper";
import "./style.css";

export const BottomNavigationWrapper = ({
  className,
  iconOnlyFalseWrapperBottomNavigationIcon = <Searchfilled className="icon-instance-node-2" color="#173F56" />,
  override = <Homefilled className="icon-instance-node-2" />,
  iconOnlyFalseWrapperBottomNavigationIcon1 = <Peoplefilled className="icon-instance-node-2" color="#173F56" />,
  to,
  to1,
}) => {
  return (
    <div className={`bottom-navigation-wrapper ${className}`}>
      <IconOnlyFalseWrapper
        bottomNavigationActiveFalseLabelClassName="design-component-instance-node"
        bottomNavigationActiveTrueLabelClassName="design-component-instance-node"
        bottomNavigationActiveTrueLabelClassNameOverride="design-component-instance-node"
        bottomNavigationIcon={override}
        bottomNavigationIcon1={iconOnlyFalseWrapperBottomNavigationIcon1}
        bottomNavigationLabelContent="home"
        bottomNavigationLabelContent1="browse"
        bottomNavigationLabelContent2="join"
        className="bottom-navigation-instance"
        iconOnly={false}
        items="three"
        override={iconOnlyFalseWrapperBottomNavigationIcon}
        to={to}
        to1={to1}
      />
    </div>
  );
};

BottomNavigationWrapper.propTypes = {
  to: PropTypes.string,
  to1: PropTypes.string,
};
