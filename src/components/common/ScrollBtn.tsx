'use client';

import React, { useEffect, useState } from "react";
import "@/assets/ScrollBtn.scss";


export const ScrollBtn = () => {
  const [showScrollBtn, setShowScrollBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollBtn(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleScrollBottom = () => {
    window.scrollTo({ top: document.documentElement.scrollHeight, behavior: "smooth" });
  };

  return (
    <div className="inquiryWrap">
      <div className="btnBox">
        {showScrollBtn && (
          <div className="active">
            <button onClick={handleScrollTop}>topBtn</button>
            <button onClick={handleScrollBottom}>bottomBtn</button>
          </div>
        )}
      </div>
    </div>
  );
};


export default ScrollBtn;
