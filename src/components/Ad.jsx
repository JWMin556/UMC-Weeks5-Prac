import React from "react";
import umcImg from "../img/umcimg.svg";

export default function Ad({ showAd }) {
  if (!showAd) {
    return null;
  }

  // 스타일 추가
  const adStyle = {
    maxWidth: "100%",
    height: "auto"
  };

  return (
    <div className="ad-container">
      <img src={umcImg} alt="Ad Banner" style={adStyle} />
    </div>
  );
}
