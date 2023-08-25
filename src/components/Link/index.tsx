"use client";
import styles from "./Link.module.css";

const Link = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLAnchorElement>) => {
  return <a {...props} className={`${styles["link"]} ${className ?? ""}`} />;
};

export default Link;
