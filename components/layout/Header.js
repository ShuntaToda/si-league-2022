import Image from "next/image";
import React from "react";
import logo from "../../images/logo.gif";
import school from "../../images/sougoukouka.png";
const Header = () => {
  return (
    <div className="l-header shadow d-flex justify-content-around align-items-center">
      <div className="l-header__logo">
        <Image src={logo} alt={"SI-league-logo"}></Image>
      </div>
      <div className="l-header__school">
        <Image src={school} alt={"school-logo"}></Image>
      </div>
    </div>
  );
};

export default Header;
