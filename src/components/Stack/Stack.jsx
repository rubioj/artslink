/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { LibraryInstance } from "../LibraryInstance";
import "./style.css";

export const Stack = ({
  instances,
  direction,
  spacing,
  className,
  override = <LibraryInstance className="instance" />,
}) => {
  return (
    <div className={`stack spacing-0-${spacing} ${direction} instances-${instances} ${className}`}>
      {["five", "four", "three", "two"].includes(instances) && (
        <LibraryInstance className={`${direction === "column" ? "class-43" : "class-44"}`} />
      )}

      {["five", "four", "three", "two"].includes(instances) && (
        <LibraryInstance
          className={`${
            instances === "two" && direction === "row"
              ? "class-45"
              : direction === "column" && instances === "two"
              ? "class-46"
              : direction === "column" && ["five", "four", "three"].includes(instances)
              ? "class-47"
              : "class-48"
          }`}
        />
      )}

      {instances === "one" && <>{override}</>}

      {["five", "four", "three"].includes(instances) && (
        <LibraryInstance
          className={`${
            direction === "column" && ["five", "four"].includes(instances)
              ? "class-47"
              : instances === "three" && direction === "row"
              ? "class-45"
              : instances === "three" && direction === "column"
              ? "class-46"
              : "class-48"
          }`}
        />
      )}

      {["five", "four"].includes(instances) && (
        <LibraryInstance
          className={`${
            instances === "four" && direction === "column"
              ? "class-46"
              : direction === "row" && instances === "five"
              ? "class-48"
              : direction === "column" && instances === "five"
              ? "class-47"
              : "class-45"
          }`}
        />
      )}

      {instances === "five" && <LibraryInstance className={`${direction === "column" ? "class-46" : "class-45"}`} />}
    </div>
  );
};

Stack.propTypes = {
  instances: PropTypes.oneOf(["two", "three", "four", "one", "five"]),
  direction: PropTypes.oneOf(["row", "column"]),
  spacing: PropTypes.oneOf(["seven", "zero", "five-1", "two", "three", "four", "one", "eight", "six"]),
};
