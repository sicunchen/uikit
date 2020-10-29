import React from "react";
import cx from "clsx";
import styles from "./styles.css";

const Button = ({ children, className, type, ...rest }) => {
  const classes = cx(
    styles.Button,
    {
      [styles.ButtonSecondary]: type === "secondary"
    },
    { [styles.ButtonDisabled]: type === "disabled" },
    { [styles.ButtonWarning]: type === "warning" },
    className
  );
  return (
    <button {...rest} className={classes}>
      {children}
    </button>
  );
};

export { Button };
