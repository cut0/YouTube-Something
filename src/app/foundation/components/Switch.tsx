import type { Component, JSX } from "solid-js";
import styles from "./Switch.module.css";

type Props = {
  checked: boolean;
  label?: string;
  onChange?: JSX.EventHandler<HTMLInputElement, Event>;
};

export const Switch: Component<Props> = (props) => {
  const handleChange: JSX.EventHandler<HTMLInputElement, Event> = (event) => {
    props.onChange?.(event);
  };

  return (
    <div class={styles.wrapper}>
      <label class={styles.switch}>
        <input
          type="checkbox"
          onChange={handleChange}
          checked={props.checked}
        />
        <span class={styles.slider} />
      </label>
      <span class={styles.label}>{props.label}</span>
    </div>
  );
};
