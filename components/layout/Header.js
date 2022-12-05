import Image from "next/image";
import React from "react";
import logo from "../../images/logo.gif";
import school from "../../images/school_logo.png";

const Header = () => {
  return (
    <div className="l-header shadow d-flex align-items-center">
      <div className="l-header__head d-flex justify-content-start align-items-center">
        <div className="l-header__logo ms-2 ms-sm-4">
          <Image src={logo} alt={"SI-league-logo"}></Image>
        </div>
        <div className="l-header__school">
          <Image src={school} alt={"school-logo"}></Image>
        </div>
      </div>
      <div className="l-header__content ms-2">
        <span>愛知総合工科高校</span>
        <span>課題研究</span>
      </div>
    </div>
  );
};

export default Header;
