import React from "react";
import { AppBar } from "../../components/AppBar";
import { ArrowRedoWrapper } from "../../components/ArrowRedoWrapper";
import { BottomNavigationWrapper } from "../../components/BottomNavigationWrapper";
import { Homefilled2 } from "../../icons/Homefilled2";
import { Menufilled2 } from "../../icons/Menufilled2";
import { Peoplefilled } from "../../icons/Peoplefilled";
import { Searchfilled3 } from "../../icons/Searchfilled3";
import "./style.css";

export const SearchActive = () => {
  return (
    <div className="search-active">
      <div className="div-2" data-palette-mode="light">
        <div className="overlap-2">
          <img className="links-logo" alt="Links logo" src="/img/links-logo.svg" />
          <img className="brush-brown" alt="Brush brown" src="/img/brush-brown-2.png" />
          <img className="snoqualmie" alt="Snoqualmie" src="/img/snoqualmie-2.png" />
        </div>
        <div className="button-subscribe">
          <div className="overlap-group-5">
            <div className="rectangle" />
            <div className="text-wrapper-6">Join Our Community</div>
          </div>
          <ArrowRedoWrapper className="arrow-redo" />
        </div>
        <AppBar
          className="app-bar-instance"
          color="primary"
          to="/menu"
          toolbarHasMinHeight={false}
          toolbarIconButtonIconIcon={<Menufilled2 className="menufilled-2" color="#FDAC9C" />}
          toolbarIconButtonIconSize="large"
          toolbarIconButtonSize="large"
          toolbarMinHeightClassName="app-bar-2"
          toolbarTypographyBodyClassName="app-bar-3"
          toolbarTypographyContent="Arts Link"
          toolbarTypographyVariant="h-4"
          toolbarTypographyVariantGutterClassName="app-bar-4"
        />
        <div className="nav-bar-fixed">
          <BottomNavigationWrapper
            className="bottom-navigation-2"
            iconOnlyFalseWrapperBottomNavigationIcon={<Homefilled2 className="icon-instance-node-2" />}
            iconOnlyFalseWrapperBottomNavigationIcon1={
              <Searchfilled3 className="icon-instance-node-2" color="#173F56" />
            }
            iconOnlyFalseWrapperIconOnlyFalseClassName="bottom-navigation-3"
            override={<Peoplefilled className="icon-instance-node-2" color="#173F56" />}
            to="/mobile-home3"
            to1="/search-active-1"
          />
        </div>
      </div>
    </div>
  );
};
