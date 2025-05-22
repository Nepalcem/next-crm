import React from "react";
import styles from "./not-active-label.module.css";

export interface NotActiveLabelsProps {
  children: React.ReactNode;
}

export default function NotActiveLabel({ children }: NotActiveLabelsProps) {
  return <span className={styles.label}>{children}</span>;
}
