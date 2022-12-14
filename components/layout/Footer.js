import React from "react";

export const Footer = () => {
  return (
    <div className="l-footer d-flex justify-content-around flex-column align-items-center py-4">
      <div className="mt-3 text-white">愛知総合工科高等学校 電子情報科</div>
      <div className="l-footer__group">浅井組</div>
      <div className="l-footer__member d-flex justify-content-center flex-colomn flex-md-row text-white mt-3">
        <div className="d-flex flex-column px-3">
          <span className="py-2">安藤 嵩人</span>
          <span className="py-2">飯田 遼介</span>
          <span className="py-2">岩 大雅</span>
          <span className="py-2">河内 涼馬</span>
        </div>
        <div className="d-flex flex-column px-3">
          <span className="py-2">武田 遼平</span>
          <span className="py-2">谷口 航輝</span>
          <span className="py-2">早川 愛佳</span>
          <span className="py-2">森下 結衣</span>
        </div>
      </div>
    </div>
  );
};
