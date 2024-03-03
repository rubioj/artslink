/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import { Button } from "../Button";
import { Formcontrollabel } from "../Formcontrollabel";
import { SpacingVertical } from "../SpacingVertical";
import { TextField } from "../TextField";
import "./style.css";

export const CustomFormsEmail = ({ className, formcontrollabelFormLabelDivClassName }) => {
  return (
    <div className={`custom-forms-email ${className}`}>
      <TextField
        className="text-field-instance"
        hasValue
        label="Email address"
        size="medium"
        stateProp="enabled"
        value="john@gmail.com"
        variant="outlined"
      />
      <SpacingVertical className="design-component-instance-node" spacing="two" visibility={false} />
      <TextField
        className="text-field-instance"
        hasValue
        label="Password"
        size="medium"
        stateProp="enabled"
        value="**********"
        variant="outlined"
      />
      <SpacingVertical className="design-component-instance-node" spacing="two" visibility={false} />
      <Formcontrollabel
        className="design-component-instance-node"
        disabled={false}
        formLabelDivClassName={formcontrollabelFormLabelDivClassName}
        formLabelValue="I accept the Terms and Conditions"
        labelPlacement="end"
      />
      <SpacingVertical className="design-component-instance-node" spacing="two" visibility={false} />
      <Button
        className="button-instance"
        color="primary"
        label="SIGN IN"
        size="large"
        stateProp="enabled"
        variant="contained"
      />
    </div>
  );
};
