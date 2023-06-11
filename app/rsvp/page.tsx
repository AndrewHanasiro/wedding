"use client";

import React, { FormEvent, useState } from "react";
import style from "./rsvp.module.scss";
import { getDatabase, ref, set } from "firebase/database";
import { app } from "@/app/_config/firebase";
import Text from "@/components/Input/input_text";
import Submit from "@/components/Input/input_submit";
import Checkbox from "@/components/Input/input_checkbox";
import Form from "@/components/Form";

export default function RSVP() {
  let [name, setName] = useState("");
  let [child, setChild] = useState(false);

  function submit(e: FormEvent<HTMLFormElement>): void {
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
    <div className={style.rsvp}>
      <h1>Répondez S&#8217;il Vous Plaît</h1>
      <Form submit={submit}>
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
      </Form>
    </div>
  );
}
