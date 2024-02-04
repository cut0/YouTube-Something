import { Component, JSX } from "solid-js";
import styles from "./Container.module.css";

type Props = {
  children: JSX.Element;
};

export const Container: Component<Props> = ({ children }) => {
  return <main class={styles.main}>{children}</main>;
};
