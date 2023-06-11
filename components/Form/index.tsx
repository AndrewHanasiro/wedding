"use client";

import Text from "@/components/Input/input_text";
import Submit from "@/components/Input/input_submit";
import Checkbox from "@/components/Input/input_checkbox";
import { FormEvent, useState } from "react";
import { getDatabase, ref, set } from "firebase/database";
import style from "./form.module.scss";
import { app } from "@/app/_config/firebase";

export default function RSVP() {
  let [name, setName] = useState("");
  let [child, setChild] = useState(false);

  function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const db = getDatabase(app);
    try {
      set(ref(db, "guest/" + name), {
        name,
        children: child,
      });
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <form className={style.form} onSubmit={(e) => submit(e)}>
      <Text
        placeholder="Fullname, no nicknames"
        setValue={setName}
        value={name}
      />
      <Checkbox
        label="Less than 12 years old"
        setValue={setChild}
        value={child}
      />
      <Submit value="Confirm" />
    </form>
  );
}
