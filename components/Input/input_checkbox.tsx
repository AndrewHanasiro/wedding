"use client";

import style from "./input_checkbox.module.scss";

type CheckboxInput = {
  label: string;
  value: boolean;
  setValue: (bool: boolean) => void;
};

export default function Checkbox({ label, value, setValue }: CheckboxInput) {
  return (
    <label htmlFor={`checkbox-${label}`} className={style.input_checkbox_label}>
      <input
        type="checkbox"
        id={`checkbox-${label}`}
        className={style.input_checkbox}
        checked={value}
        onChange={(e) => setValue(e.target.checked)}
      />
      {label}
    </label>
  );
}
