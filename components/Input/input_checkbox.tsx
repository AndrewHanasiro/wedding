"use client";

import { Dispatch, SetStateAction } from "react";
import style from "./input_checkbox.module.scss";

type CheckboxInput = {
  label: string;
  value: boolean;
  setValue: Dispatch<SetStateAction<boolean>>;
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
