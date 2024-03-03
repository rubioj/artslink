import React from "react";
import { AppBar } from "../../components/AppBar";
import { BottomNavigationWrapper } from "../../components/BottomNavigationWrapper";
import { ConcreteComponentNode } from "../../components/ConcreteComponentNode";
import { CustomFormsEmail } from "../../components/CustomFormsEmail";
import { Slider } from "../../components/Slider";
import { Homefilled2 } from "../../icons/Homefilled2";
import { Menufilled2 } from "../../icons/Menufilled2";
import { Peoplefilled } from "../../icons/Peoplefilled";
import { Searchfilled } from "../../icons/Searchfilled";
import "./style.css";

export const Search = () => {
  return (
    <div className="search">
      <div className="div-2" data-palette-mode="light">
        <div className="overlap-2">
          <img className="links-logo" alt="Links logo" src="/img/links-logo.svg" />
          <img className="brush-brown" alt="Brush brown" src="/img/brush-brown-2.png" />
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
          <img className="rooster-color" alt="Rooster color" src="/img/rooster-color-1.png" />
          <img className="hpim" alt="Hpim" src="/img/hpim1656-1.png" />
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
          <img className="snoqualmie" alt="Snoqualmie" src="/img/snoqualmie-1.png" />
        </div>
        <div className="overlap-3">
          <img className="blue-brush" alt="Blue brush" src="/img/blue-brush-1-2.png" />
          <img className="brush-brown-2" alt="Brush brown" src="/img/brush-brown-2.png" />
          <p className="we-are-a-passionate">
            We are a passionate community of artists and art enthusiasts, united in our mission to explore and celebrate
            the transformative power of art. From healing to connecting with nature, our creations echo the deep ties
            between art, the natural world, and human connections. Whether you&#39;re an artist seeking a tribe or an
            art lover searching for a unique piece, you&#39;ve found your haven.
          </p>
          <p className="p">Find the art work to put a smile in your life</p>
          <CustomFormsEmail
            className="custom-forms-email-password"
            formcontrollabelFormLabelDivClassName="custom-forms-email-instance"
          />
        </div>
        <div className="button-subscribe">
          <div className="overlap-4">
            <div className="rectangle" />
            <div className="arrow-redo">
              <ConcreteComponentNode style="fill" />
            </div>
            <div className="text-wrapper-6">Join Our Community</div>
          </div>
        </div>
        <img className="snoqualmie-2" alt="Snoqualmie" src="/img/snoqualmie-2.png" />
        <AppBar
          className="app-bar-instance"
          color="primary"
          to="/menu"
          toolbarHasMinHeight={false}
          toolbarIconButtonIconIcon={<Menufilled2 className="menufilled-2" color="#FDAC9C" />}
          toolbarIconButtonIconSize="large"
          toolbarIconButtonSize="large"
          toolbarMinHeightClassName="app-bar-3"
          toolbarTypographyBodyClassName="app-bar-4"
          toolbarTypographyContent="Arts Link"
          toolbarTypographyVariant="h-4"
          toolbarTypographyVariantGutterClassName="app-bar-2"
        />
        <BottomNavigationWrapper
          className="bottom-navigation-2"
          iconOnlyFalseWrapperBottomNavigationIcon={<Searchfilled className="icon-instance-node-2" color="#173F56" />}
          iconOnlyFalseWrapperBottomNavigationIcon1={<Peoplefilled className="icon-instance-node-2" color="#173F56" />}
          iconOnlyFalseWrapperIconOnlyFalseClassName="bottom-navigation-3"
          override={<Homefilled2 className="icon-instance-node-2" />}
          to="/mobile-home3"
        />
      </div>
    </div>
  );
};
