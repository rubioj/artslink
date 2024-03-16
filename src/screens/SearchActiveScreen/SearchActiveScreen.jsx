import React from "react";
import { Link } from "react-router-dom";
import { AppBar } from "../../components/AppBar";
import { ArrowRedoWrapper } from "../../components/ArrowRedoWrapper";
import { BottomNavigationWrapper } from "../../components/BottomNavigationWrapper";
import { Homefilled4 } from "../../icons/Homefilled4";
import { Menufilled2 } from "../../icons/Menufilled2";
import { Peoplefilled } from "../../icons/Peoplefilled";
import { Searchfilled3 } from "../../icons/Searchfilled3";
import "./style.css";

export const SearchActiveScreen = () => {
  return (
    <div className="search-active-screen">
      <div className="search-active-2" data-palette-mode="light">
        <div className="overlap-4">
          <img className="links-logo-2" alt="Links logo" src="/img/links-logo-1.svg" />
          <img className="brush-brown-4" alt="Brush brown" src="/img/brush-brown-2.png" />
          <Link to="/search-active-2">
            <img className="snoqualmie-2" alt="Snoqualmie" src="/img/snoqualmie-1.png" />
          </Link>
        </div>
        <div className="button-subscribe-2">
          <div className="overlap-group-7">
            <div className="rectangle-2" />
            <div className="text-wrapper-10">Join Our Community</div>
          </div>
          <ArrowRedoWrapper className="arrow-redo-instance" />
        </div>
        <AppBar
          className="app-bar-9"
          color="primary"
          to="/menu"
          toolbarHasMinHeight={false}
          toolbarIconButtonIconIcon={<Menufilled2 className="menufilled" color="#FDAC9C" />}
          toolbarIconButtonIconSize="large"
          toolbarIconButtonSize="large"
          toolbarMinHeightClassName="app-bar-12"
          toolbarTypographyBodyClassName="app-bar-11"
          toolbarTypographyContent="Arts Link"
          toolbarTypographyVariant="h-4"
          toolbarTypographyVariantGutterClassName="app-bar-10"
        />
        <div className="nav-bar-fixed-2">
          <BottomNavigationWrapper
            className="bottom-navigation-6"
            iconOnlyFalseWrapperBottomNavigationIcon={<Peoplefilled className="icon-instance-node-4" color="#173F56" />}
            iconOnlyFalseWrapperBottomNavigationIcon1={
              <Searchfilled3 className="icon-instance-node-4" color="#173F56" />
            }
            iconOnlyFalseWrapperIconOnlyFalseClassName="bottom-navigation-7"
            override={<Homefilled4 className="icon-instance-node-4" />}
            to="/search-active-2"
            to1="/mobile-home3"
          />
        </div>
      </div>
    </div>
  );
};
