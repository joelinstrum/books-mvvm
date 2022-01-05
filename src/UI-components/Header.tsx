import React from "react";
import Logo from "./Logo";
import Menu from "./Menu";

const Header = () => {
  return (
    <div>
      <div className="header">
        <div>
          <Logo />
        </div>
        <div>
          <div className="header__text">Books &amp; Authors</div>
          <div className="header__subtext">An MVVM Example</div>
        </div>
      </div>
      <Menu />
    </div>
  );
};

export default Header;
