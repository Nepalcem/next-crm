import React from "react";
import styles from "./active-label.module.css";

export interface ActiveLabelsProps {
    children: React.ReactNode;
}

export default function ActiveLabel({ children }: ActiveLabelsProps) {
    return <span className={styles.label}>{children}</span>
}