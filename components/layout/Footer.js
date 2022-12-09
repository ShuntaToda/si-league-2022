import React from "react";

export const Footer = () => {
  return (
    <div className="l-footer d-flex justify-content-around flex-column align-items-center py-4">
      <div className="mt-3 text-white">愛知総合工科高等学校 電子情報科</div>
      <div className="l-footer__group">浅井組</div>
      <div className="l-footer__member d-flex justify-content-center flex-colomn flex-md-row text-white mt-3">
        <div className="d-flex flex-column px-3">
          <span className="py-2">山﨑 晴翔</span>
          <span className="py-2">山﨑 晴翔</span>
          <span className="py-2">山﨑 晴翔</span>
          <span className="py-2">山﨑 晴翔</span>
          <span className="py-2">山﨑</span>
        </div>
        <div className="d-flex flex-column px-3">
          <span className="py-2">権田 楓太朗</span>
          <span className="py-2">権田 楓太朗</span>
          <span className="py-2">権田 楓太朗</span>
          <span className="py-2">権田 楓太朗</span>
          <span className="py-2">権田 楓太朗</span>
        </div>
      </div>
    </div>
  );
};
