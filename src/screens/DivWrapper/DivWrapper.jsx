import React from "react";
import { AppBar } from "../../components/AppBar";
import { ArrowRedoWrapper } from "../../components/ArrowRedoWrapper";
import { BottomNavigationWrapper } from "../../components/BottomNavigationWrapper";
import { Slider } from "../../components/Slider";
import { Homefilled6 } from "../../icons/Homefilled6";
import { Logo1 } from "../../icons/Logo1";
import { Menufilled2 } from "../../icons/Menufilled2";
import { Peoplefilled } from "../../icons/Peoplefilled";
import { Searchfilled3 } from "../../icons/Searchfilled3";
import "./style.css";

export const DivWrapper = () => {
  return (
    <div className="div-wrapper">
      <div className="search-active-3" data-palette-mode="light">
        <div className="overlap-6">
          <img className="brush-brown-6" alt="Brush brown" src="/img/brush-brown-2.png" />
          <Slider
            className="slider-instance"
            color="secondary"
            orientation="horizontal"
            overlapGroupClassName="slider-2"
            size="small"
            sliderRailSizeSmallColorClassName="slider-3"
            state="enabled"
            values={false}
            variant="continuous"
          />
          <Slider
            className="slider-4"
            color="secondary"
            orientation="horizontal"
            overlapGroupClassName="slider-2"
            size="small"
            sliderRailSizeSmallColorClassName="slider-3"
            state="enabled"
            values={false}
            variant="continuous"
          />
          <img className="hpim" alt="Hpim" src="/img/couple.png" />
          <Logo1 className="logo-1-instance" />
        </div>
        <div className="button-subscribe-4">
          <div className="overlap-7">
            <div className="rectangle-4" />
            <div className="text-wrapper-13">Join Our Community</div>
          </div>
          <ArrowRedoWrapper className="arrow-redo-2" />
        </div>
        <AppBar
          className="app-bar-13"
          color="primary"
          to="/menu"
          toolbarHasMinHeight={false}
          toolbarIconButtonIconIcon={<Menufilled2 className="menufilled-2-instance" color="#FDAC9C" />}
          toolbarIconButtonIconSize="large"
          toolbarIconButtonSize="large"
          toolbarMinHeightClassName="app-bar-14"
          toolbarTypographyBodyClassName="app-bar-15"
          toolbarTypographyContent="Arts Link"
          toolbarTypographyVariant="h-4"
          toolbarTypographyVariantGutterClassName="app-bar-16"
        />
        <div className="nav-bar-fixed-3">
          <BottomNavigationWrapper
            className="bottom-navigation-8"
            iconOnlyFalseWrapperBottomNavigationIcon={<Homefilled6 className="icon-instance-node-5" />}
            iconOnlyFalseWrapperBottomNavigationIcon1={
              <Searchfilled3 className="icon-instance-node-5" color="#173F56" />
            }
            iconOnlyFalseWrapperIconOnlyFalseClassName="bottom-navigation-9"
            override={<Peoplefilled className="icon-instance-node-5" color="#173F56" />}
            to="/mobile-home3"
            to1="/search-active-3"
          />
        </div>
      </div>
    </div>
  );
};
