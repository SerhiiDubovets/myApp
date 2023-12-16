import React from "react";
import styles from "./Container.module.css";

export const Container = ({ children, className }) => {
  console.log(className);

  const style = `${className || ""} ${styles.container} `;

  return <div className={style}>{children}</div>;
};
