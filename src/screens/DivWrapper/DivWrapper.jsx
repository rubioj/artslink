import React from "react";
import { AppBar } from "../../components/AppBar";
import { ArrowRedoWrapper } from "../../components/ArrowRedoWrapper";
import { BottomNavigationWrapper } from "../../components/BottomNavigationWrapper";
import { Slider } from "../../components/Slider";
import { Logo2 } from "../../icons/Logo2";
import { Menufilled2 } from "../../icons/Menufilled2";
import { Peoplefilled } from "../../icons/Peoplefilled";
import { Searchfilled3 } from "../../icons/Searchfilled3";
import "./style.css";

export const DivWrapper = () => {
  return (
    <div className="div-wrapper">
      <div className="search-active-3" data-palette-mode="light">
        <div className="overlap-9">
          <img className="brush-brown-8" alt="Brush brown" src="/img/brush-brown-2.png" />
          <Slider
            className="slider-5"
            color="secondary"
            orientation="horizontal"
            overlapGroupClassName="slider-6"
            size="small"
            sliderRailSizeSmallColorClassName="slider-7"
            state="enabled"
            values={false}
            variant="continuous"
          />
          <Slider
            className="slider-8"
            color="secondary"
            orientation="horizontal"
            overlapGroupClassName="slider-6"
            size="small"
            sliderRailSizeSmallColorClassName="slider-7"
            state="enabled"
            values={false}
            variant="continuous"
          />
          <img className="hpim-2" alt="Hpim" src="/img/couple.png" />
          <Logo2 className="logo-3" />
        </div>
        <div className="button-subscribe-5">
          <div className="overlap-10">
            <div className="rectangle-5" />
            <div className="text-wrapper-15">Join Our Community</div>
          </div>
          <ArrowRedoWrapper className="arrow-redo-3" />
        </div>
        <AppBar
          className="app-bar-17"
          color="primary"
          to="/menu"
          toolbarHasMinHeight={false}
          toolbarIconButtonIconIcon={<Menufilled2 className="menufilled-9-instance" color="#FDAC9C" />}
          toolbarIconButtonIconSize="large"
          toolbarIconButtonSize="large"
          toolbarMinHeightClassName="app-bar-20"
          toolbarTypographyBodyClassName="app-bar-19"
          toolbarTypographyContent="Arts Link"
          toolbarTypographyVariant="h-4"
          toolbarTypographyVariantGutterClassName="app-bar-18"
        />
        <div className="nav-bar-fixed-4">
          <BottomNavigationWrapper
            className="bottom-navigation-10"
            iconOnlyFalseWrapperBottomNavigationIcon={<Peoplefilled className="icon-instance-node-6" color="#173F56" />}
            iconOnlyFalseWrapperBottomNavigationIcon1={
              <Searchfilled3 className="icon-instance-node-6" color="#173F56" />
            }
            iconOnlyFalseWrapperIconOnlyFalseClassName="bottom-navigation-11"
            to="/search-active-3"
            to1="/mobile-home3"
          />
        </div>
      </div>
    </div>
  );
};
