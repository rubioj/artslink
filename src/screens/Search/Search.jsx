import React from "react";
import { Link } from "react-router-dom";
import { AppBar } from "../../components/AppBar";
import { BottomNavigationWrapper } from "../../components/BottomNavigationWrapper";
import { ConcreteComponentNode } from "../../components/ConcreteComponentNode";
import { CustomFormsEmail } from "../../components/CustomFormsEmail";
import { Slider } from "../../components/Slider";
import { Homefilled5 } from "../../icons/Homefilled5";
import { Logo2 } from "../../icons/Logo2";
import { Menufilled2 } from "../../icons/Menufilled2";
import { Peoplefilled } from "../../icons/Peoplefilled";
import { Searchfilled3 } from "../../icons/Searchfilled3";
import "./style.css";

export const Search = () => {
  return (
    <div className="search">
      <div className="div-4" data-palette-mode="light">
        <div className="overlap-6">
          <img className="blue-brush-3" alt="Blue brush" src="/img/blue-brush-1-1.png" />
          <img className="brush-brown-6" alt="Brush brown" src="/img/brush-brown-2.png" />
          <p className="we-are-a-passionate">
            We are a passionate community of artists and art enthusiasts, united in our mission to explore and celebrate
            the transformative power of art. From healing to connecting with nature, our creations echo the deep ties
            between art, the natural world, and human connections. Whether you&#39;re an artist seeking a tribe or an
            art lover searching for a unique piece, you&#39;ve found your haven.
          </p>
          <p className="text-wrapper-13">Find the art work to put a smile in your life</p>
          <CustomFormsEmail
            className="custom-forms-email-password-instance"
            formcontrollabelFormLabelDivClassName="custom-forms-email-2"
          />
        </div>
        <div className="overlap-7">
          <img className="brush-brown-7" alt="Brush brown" src="/img/brush-brown-2.png" />
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
          <img className="rooster-color" alt="Rooster color" src="/img/ny-city-girl.png" />
          <Link to="/search-active-3">
            <img className="hpim" alt="Hpim" src="/img/couple.png" />
          </Link>
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
          <Link to="/search-active-2">
            <img className="snoqualmie-3" alt="Snoqualmie" src="/img/snoqualmie-1.png" />
          </Link>
          <Link to="/search-active-1">
            <img className="snoqualmie-4" alt="Snoqualmie" src="/img/snoqualmie-2.png" />
          </Link>
          <Logo2 className="logo-2-instance" />
        </div>
        <div className="button-subscribe-4">
          <div className="overlap-8">
            <div className="rectangle-4" />
            <div className="arrow-redo-2">
              <ConcreteComponentNode style="fill" />
            </div>
            <div className="text-wrapper-14">Join Our Community</div>
          </div>
        </div>
        <AppBar
          className="app-bar-13"
          color="primary"
          to="/menu"
          toolbarHasMinHeight={false}
          toolbarIconButtonIconIcon={<Menufilled2 className="menufilled-2-instance" color="#FDAC9C" />}
          toolbarIconButtonIconSize="large"
          toolbarIconButtonSize="large"
          toolbarMinHeightClassName="app-bar-16"
          toolbarTypographyBodyClassName="app-bar-15"
          toolbarTypographyContent="Arts Link"
          toolbarTypographyVariant="h-4"
          toolbarTypographyVariantGutterClassName="app-bar-14"
        />
        <div className="nav-bar-fixed-3">
          <BottomNavigationWrapper
            className="bottom-navigation-8"
            iconOnlyFalseWrapperBottomNavigationIcon={<Peoplefilled className="icon-instance-node-5" color="#173F56" />}
            iconOnlyFalseWrapperBottomNavigationIcon1={
              <Searchfilled3 className="icon-instance-node-5" color="#173F56" />
            }
            iconOnlyFalseWrapperIconOnlyFalseClassName="bottom-navigation-9"
            override={<Homefilled5 className="icon-instance-node-5" />}
            to="/search"
            to1="/mobile-home3"
          />
        </div>
      </div>
    </div>
  );
};
