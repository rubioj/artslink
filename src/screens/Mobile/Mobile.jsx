import React from "react";
import { AppBar } from "../../components/AppBar";
import { BottomNavigationWrapper } from "../../components/BottomNavigationWrapper";
import { CustomFormsEmail } from "../../components/CustomFormsEmail";
import { Homefilled3 } from "../../icons/Homefilled3";
import { Logo1 } from "../../icons/Logo1";
import { Menufilled2 } from "../../icons/Menufilled2";
import { Peoplefilled } from "../../icons/Peoplefilled";
import { Searchfilled } from "../../icons/Searchfilled";
import "./style.css";

export const Mobile = () => {
  return (
    <div className="mobile">
      <div className="mobile-home" data-palette-mode="light">
        <div className="overlap-group-4">
          <CustomFormsEmail
            className="custom-forms-email-password-instance"
            formcontrollabelFormLabelDivClassName="custom-forms-email-2"
          />
          <img className="blue-brush-2" alt="Blue brush" src="/img/blue-brush-1-2.png" />
          <img className="brush-brown-3" alt="Brush brown" src="/img/brush-brown-2.png" />
          <p className="here-every-piece">
            Here, every piece tells a story, every artist shares a vision, and every member finds a place. Join us in
            weaving a collective tapestry of creativity, where art isn&#39;t just seen—it&#39;s experienced, shared, and
            celebrated. Welcome to ArtLinks, where your journey through art begins
          </p>
          <p className="text-wrapper-7">Juan Rubio, San Sebastian Couple, digital photograph</p>
          <img className="couple" alt="Couple" src="/img/hpim1656-1.png" />
          <p className="text-wrapper-8">Find the art work you always wanted</p>
        </div>
        <div className="overlap-5">
          <img className="brush-brown-4" alt="Brush brown" src="/img/brush-brown-1.png" />
          <p className="main-tagline">We are your connection to art</p>
          <Logo1 className="logo" />
        </div>
        <p className="text-wrapper-9">
          Arts Link is your gateway to a vibrant world where art meets community. Our platform is dedicated to bridging
          the gap between talented artists and passionate art lovers, creating a dynamic space for discovery,
          inspiration, and connection.
        </p>
        <img className="NY-city-girl" alt="Ny city girl" src="/img/rooster-color-1.png" />
        <p className="text-wrapper-10">Juan Rubio, NY City Girl, digital photograph</p>
        <AppBar
          className="app-bar-5"
          color="primary"
          to="/menu"
          toolbarHasMinHeight={false}
          toolbarIconButtonIconIcon={<Menufilled2 className="menufilled-9" color="#FDAC9C" />}
          toolbarIconButtonIconSize="large"
          toolbarIconButtonSize="large"
          toolbarMinHeightClassName="app-bar-7"
          toolbarTypographyBodyClassName="app-bar-8"
          toolbarTypographyContent="Arts Link"
          toolbarTypographyVariant="h-4"
          toolbarTypographyVariantGutterClassName="app-bar-6"
        />
        <div className="nav-bar-fixed">
          <BottomNavigationWrapper
            className="bottom-navigation-4"
            iconOnlyFalseWrapperBottomNavigationIcon={<Searchfilled className="icon-instance-node-3" color="#173F56" />}
            iconOnlyFalseWrapperBottomNavigationIcon1={
              <Peoplefilled className="icon-instance-node-3" color="#173F56" />
            }
            iconOnlyFalseWrapperIconOnlyFalseClassName="bottom-navigation-5"
            override={<Homefilled3 className="icon-instance-node-3" />}
            to1="/search"
          />
        </div>
      </div>
    </div>
  );
};
