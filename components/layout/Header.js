import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "../../images/logo.gif";
import school from "../../images/school_logo.png";

const Header = () => {
  return (
    <div className="l-header shadow d-flex align-items-center">
      <div className="l-header__head d-flex justify-content-start align-items-center">
        <Link href={"https://sileague.aichi.jp/"}>
          <div className="l-header__logo ms-2 ms-sm-4">
            <Image src={logo} alt={"SI-league-logo"}></Image>
          </div>
        </Link>
        <Link href={"https://aichi-te.aichi-c.ed.jp/"}>
          <div className="l-header__school">
            <Image src={school} alt={"school-logo"}></Image>
          </div>
        </Link>
      </div>
      <div className="l-header__content ms-2 fw-bold">
        <Link href={"/"} className="text-dark text-decoration-none">
          <span className="text-dark">愛知総合工科高校</span>
          <span>課題研究</span>
        </Link>
      </div>
    </div>
  );
};

export default Header;
