"use client";

import style from "./input_submit.module.scss";

type SubmitInput = {
  value: string;
};

export default function Submit({ value }: SubmitInput) {
  return <input type="submit" className={style.input_submit} value={value} />;
}
