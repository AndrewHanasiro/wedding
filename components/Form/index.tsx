import { FormEvent } from "react";

import style from "./form.module.scss";

type FormInput = {
  children: React.ReactNode;
  submit(e: FormEvent<HTMLFormElement>): void;
};

export default function Form({ children, submit }: FormInput) {
  return (
    <form className={style.form} onSubmit={(e) => submit(e)}>
      {children}
    </form>
  );
}
