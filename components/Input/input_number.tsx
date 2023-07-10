"use client";

import { Dispatch, SetStateAction } from "react";

import style from "./input_number.module.scss";

type NumberInput = {
  value: number;
  setValue: Dispatch<SetStateAction<string>>;
  label?: string;
};

export default function Number({ value, setValue, label }: NumberInput) {
  return (
    <label className={style.input_number}>
      <span>{label}</span>
      <input
        type="number"
        required
        value={value}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setValue(e.target.value)
        }
      />
    </label>
  );
}
