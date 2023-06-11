"use client";

import { Dispatch, SetStateAction } from "react";
import style from "./input_text.module.scss";

type TextInput = {
  placeholder: string;
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
};

export default function Text({ placeholder, value, setValue }: TextInput) {
  return (
    <input
      type="text"
      placeholder={placeholder}
      required
      value={value}
      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
        setValue(e.target.value)
      }
      className={style.input_text}
    />
  );
}
