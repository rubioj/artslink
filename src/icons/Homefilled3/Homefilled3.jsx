/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

export const Homefilled3 = ({ className }) => {
  return (
    <svg
      className={`homefilled-3 ${className}`}
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g className="g" clipPath="url(#clip0_522_301)">
        <g className="g" filter="url(#filter0_d_522_301)">
          <path className="path" d="M10 20V14H14V20H19V12H22L12 3L2 12H5V20H10Z" fill="#173F56" />
        </g>
      </g>
      <defs className="defs">
        <filter
          className="filter"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
          height="25"
          id="filter0_d_522_301"
          width="28"
          x="-2"
          y="3"
        >
          <feFlood className="fe-flood" floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            className="fe-color-matrix"
            in="SourceAlpha"
            result="hardAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset className="fe-offset" dy="4" />
          <feGaussianBlur className="fe-gaussian-blur" stdDeviation="2" />
          <feComposite className="fe-composite" in2="hardAlpha" operator="out" />
          <feColorMatrix
            className="fe-color-matrix"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend className="fe-blend" in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_522_301" />
          <feBlend
            className="fe-blend"
            in="SourceGraphic"
            in2="effect1_dropShadow_522_301"
            mode="normal"
            result="shape"
          />
        </filter>
        <clipPath className="clip-path" id="clip0_522_301">
          <rect className="rect" fill="white" height="24" width="24" />
        </clipPath>
      </defs>
    </svg>
  );
};
