import React from "react";
import { ConcreteComponentNode } from "../../components/ConcreteComponentNode";
import { MenuItem } from "../../components/MenuItem";
import { Logo2 } from "../../icons/Logo2";
import "./style.css";

export const Menu = () => {
  return (
    <div className="menu">
      <div className="div-3" data-palette-mode="light">
        <div className="overlap-5">
          <img className="blue-brush-2" alt="Blue brush" src="/img/blue-brush-1-1.png" />
          <img className="brush-brown-5" alt="Brush brown" src="/img/brush-brown-2.png" />
          <p className="text-wrapper-11">Find the art work to put a smile in your life</p>
          <div className="creativity-meets"> Creativity Meets Community</div>
          <MenuItem
            className="menu-item-instance"
            dense={false}
            disGutters={false}
            smallScreen
            stateProp="enabled"
            to="/mobile-home3"
            value="Home"
            valueClassName="menu-item-2"
          />
          <MenuItem
            className="menu-item-3"
            dense={false}
            disGutters={false}
            smallScreen={false}
            stateProp="enabled"
            to="/search"
            value="Browse"
            valueClassName="menu-item-2"
          />
          <MenuItem
            className="menu-item-4"
            dense={false}
            disGutters={false}
            smallScreen={false}
            stateProp="enabled"
            value="Artists"
            valueClassName="menu-item-2"
          />
          <MenuItem
            className="menu-item-5"
            dense={false}
            disGutters={false}
            smallScreen={false}
            stateProp="enabled"
            value="Events"
            valueClassName="menu-item-2"
          />
        </div>
        <div className="button-subscribe-3">
          <div className="overlap-group-8">
            <div className="rectangle-3" />
            <div className="arrow-redo-instance-wrapper">
              <ConcreteComponentNode style="fill" />
            </div>
            <div className="text-wrapper-12">Join Our Community</div>
          </div>
        </div>
        <Logo2 className="logo-2" />
      </div>
    </div>
  );
};
