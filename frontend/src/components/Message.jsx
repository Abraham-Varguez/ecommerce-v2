import React from "react";
import { Alert } from "react-bootstrap";
//This will be an UI error screen for any errors  variant prop will change the  color text based on what you want to call the cariant
const Message = ({ variant, children }) => {
  return <Alert variant={variant}>{children}</Alert>;
};

//Changes text to blue on default variant
Message.defaultProps = { variant: "info" };

export default Message;
