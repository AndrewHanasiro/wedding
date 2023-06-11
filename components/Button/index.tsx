"use client";

import style from "./button.module.scss";

type ButtonInput = {
  children: React.ReactNode;
  onClick(): void;
};

export default function Button({ children, onClick }: ButtonInput) {
  return (
    <button className={style.button} onClick={onClick}>
      {children}
    </button>
  );
}
