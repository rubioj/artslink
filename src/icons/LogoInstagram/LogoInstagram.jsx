/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const LogoInstagram = ({ color = "#709775", className }) => {
  return (
    <svg
      className={`logo-instagram ${className}`}
      fill="none"
      height="16"
      viewBox="0 0 16 16"
      width="16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M10.9193 2.16777C11.6923 2.17008 12.4331 2.4782 12.9797 3.02484C13.5263 3.57148 13.8345 4.31222 13.8368 5.08528V10.9197C13.8345 11.6927 13.5263 12.4335 12.9797 12.9801C12.4331 13.5268 11.6923 13.8349 10.9193 13.8372H5.08486C4.3118 13.8349 3.57106 13.5268 3.02442 12.9801C2.47778 12.4335 2.16966 11.6927 2.16735 10.9197V5.08528C2.16966 4.31222 2.47778 3.57148 3.02442 3.02484C3.57106 2.4782 4.3118 2.17008 5.08486 2.16777H10.9193ZM10.9193 1.00095H5.08486C2.83843 1.00095 1.00053 2.83885 1.00053 5.08528V10.9197C1.00053 13.1661 2.83843 15.004 5.08486 15.004H10.9193C13.1657 15.004 15.0036 13.1661 15.0036 10.9197V5.08528C15.0036 2.83885 13.1657 1.00095 10.9193 1.00095Z"
        fill={color}
      />
      <path
        className="path"
        d="M11.7967 5.09027C11.6231 5.09027 11.4534 5.03879 11.3091 4.94235C11.1647 4.84591 11.0522 4.70883 10.9858 4.54845C10.9194 4.38807 10.902 4.2116 10.9359 4.04134C10.9697 3.87108 11.0533 3.71469 11.1761 3.59194C11.2988 3.4692 11.4552 3.3856 11.6255 3.35174C11.7957 3.31787 11.9722 3.33525 12.1326 3.40168C12.2929 3.46811 12.43 3.58061 12.5265 3.72495C12.6229 3.86928 12.6744 4.03898 12.6744 4.21257C12.6746 4.3279 12.6521 4.44214 12.6081 4.54874C12.5641 4.65534 12.4994 4.7522 12.4179 4.83375C12.3363 4.9153 12.2395 4.97994 12.1329 5.02396C12.0263 5.06798 11.912 5.09051 11.7967 5.09027Z"
        fill={color}
      />
      <path
        className="path"
        d="M8.00191 5.66747C8.46353 5.66747 8.91477 5.80435 9.29859 6.06081C9.6824 6.31727 9.98155 6.68178 10.1582 7.10825C10.3348 7.53473 10.3811 8.004 10.291 8.45674C10.201 8.90949 9.97867 9.32536 9.65226 9.65176C9.32585 9.97817 8.90999 10.2005 8.45724 10.2905C8.0045 10.3806 7.53523 10.3344 7.10875 10.1577C6.68228 9.98105 6.31777 9.6819 6.06131 9.29809C5.80485 8.91427 5.66797 8.46303 5.66797 8.00142C5.66863 7.38262 5.91474 6.78935 6.3523 6.3518C6.78985 5.91424 7.38312 5.66813 8.00191 5.66747ZM8.00191 4.50065C7.30953 4.50065 6.63269 4.70597 6.057 5.09064C5.4813 5.47531 5.0326 6.02205 4.76763 6.66173C4.50267 7.30141 4.43334 8.0053 4.56842 8.68438C4.7035 9.36346 5.03691 9.98724 5.5265 10.4768C6.01609 10.9664 6.63987 11.2998 7.31895 11.4349C7.99803 11.57 8.70192 11.5007 9.3416 11.2357C9.98128 10.9707 10.528 10.522 10.9127 9.94633C11.2974 9.37064 11.5027 8.6938 11.5027 8.00142C11.5027 7.07296 11.1338 6.18252 10.4773 5.526C9.82081 4.86948 8.93037 4.50065 8.00191 4.50065Z"
        fill={color}
      />
    </svg>
  );
};

LogoInstagram.propTypes = {
  color: PropTypes.string,
};
