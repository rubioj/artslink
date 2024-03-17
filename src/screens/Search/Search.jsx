import React from "react";
import { Link } from "react-router-dom";
import { AppBar } from "../../components/AppBar";
import { BottomNavigationWrapper } from "../../components/BottomNavigationWrapper";
import { ConcreteComponentNode } from "../../components/ConcreteComponentNode";
import { CustomFormsEmail } from "../../components/CustomFormsEmail";
import { Slider } from "../../components/Slider";
import { Homefilled5 } from "../../icons/Homefilled5";
import { Logo1 } from "../../icons/Logo1";
import { Menufilled2 } from "../../icons/Menufilled2";
import { Peoplefilled } from "../../icons/Peoplefilled";
import { Searchfilled3 } from "../../icons/Searchfilled3";
import "./style.css";

export const Search = () => {
  return (
    <div className="search">
      <div className="div-4" data-palette-mode="light">
        <div className="overlap-8">
          <img className="blue-brush-3" alt="Blue brush" src="/img/blue-brush-1-1.png" />
          <img className="brush-brown-7" alt="Brush brown" src="/img/brush-brown-2.png" />
          <p className="we-are-a-passionate">
            We are a passionate community of artists and art enthusiasts, united in our mission to explore and celebrate
            the transformative power of art. From healing to connecting with nature, our creations echo the deep ties
            between art, the natural world, and human connections. Whether you&#39;re an artist seeking a tribe or an
            art lover searching for a unique piece, you&#39;ve found your haven.
          </p>
          <p className="text-wrapper-14">Find the art work to put a smile in your life</p>
          <CustomFormsEmail
            className="custom-forms-email-password-instance"
            formcontrollabelFormLabelDivClassName="custom-forms-email-2"
          />
        </div>
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
          <img className="rooster-color" alt="Rooster color" src="/img/ny-city-girl.png" />
          <Link to="/search-active-3">
            <img className="hpim-2" alt="Hpim" src="/img/couple.png" />
          </Link>
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
          <Link to="/search-active-2">
            <img className="snoqualmie-3" alt="Snoqualmie" src="/img/snoqualmie-1.png" />
          </Link>
          <Link to="/search-active-1">
            <img className="snoqualmie-4" alt="Snoqualmie" src="/img/snoqualmie-2.png" />
          </Link>
          <Logo1 className="logo-2" />
        </div>
        <div className="button-subscribe-5">
          <div className="overlap-10">
            <div className="rectangle-5" />
            <div className="arrow-redo-3">
              <ConcreteComponentNode style="fill" />
            </div>
            <div className="text-wrapper-15">Join Our Community</div>
          </div>
        </div>
        <AppBar
          className="app-bar-17"
          color="primary"
          to="/menu"
          toolbarHasMinHeight={false}
          toolbarIconButtonIconIcon={<Menufilled2 className="menufilled-9-instance" color="#FDAC9C" />}
          toolbarIconButtonIconSize="large"
          toolbarIconButtonSize="large"
          toolbarMinHeightClassName="app-bar-18"
          toolbarTypographyBodyClassName="app-bar-19"
          toolbarTypographyContent="Arts Link"
          toolbarTypographyVariant="h-4"
          toolbarTypographyVariantGutterClassName="app-bar-20"
        />
        <div className="nav-bar-fixed-4">
          <BottomNavigationWrapper
            className="bottom-navigation-10"
            iconOnlyFalseWrapperBottomNavigationIcon={<Homefilled5 className="icon-instance-node-6" />}
            iconOnlyFalseWrapperBottomNavigationIcon1={
              <Searchfilled3 className="icon-instance-node-6" color="#173F56" />
            }
            iconOnlyFalseWrapperIconOnlyFalseClassName="bottom-navigation-11"
            override={<Peoplefilled className="icon-instance-node-6" color="#173F56" />}
            to="/mobile-home3"
            to1="/search"
          />
        </div>
      </div>
    </div>
  );
};
