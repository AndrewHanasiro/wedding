"use client";

import React, { FormEvent, useState } from "react";
import { getDatabase, ref, set } from "firebase/database";

import { app } from "@/app/_config/firebase";
import Checkbox from "@/components/Input/input_checkbox";
import Submit from "@/components/Input/input_submit";
import Text from "@/components/Input/input_text";
import Form from "@/components/Form";

import style from "./rsvp.module.scss";

export default function RSVP() {
  let [name, setName] = useState("");
  let [child, setChild] = useState(false);
  let [isVisible, setIsVisible] = useState(false);
  let [hasError, setHasError] = useState(false);

  function submit(e: FormEvent<HTMLFormElement>): void {
    e.preventDefault();
    const db = getDatabase(app);
    try {
      set(ref(db, "guest/" + name), {
        name,
        children: child,
      });
      setName("");
      setChild(false);
    } catch (error) {
      console.error(error);
      setHasError(true);
    } finally {
      setIsVisible(true);
    }
  }

  return (
    <section className={style.section} id="rsvp">
      <div className={style.rsvp}>
        <h2>Confirme sua prensença</h2>
        <Form submit={submit}>
          <Text placeholder="Nome completo" setValue={setName} value={name} />
          <Checkbox
            label="Possuo menos de 12 anos"
            setValue={setChild}
            value={child}
          />
          <Submit value="Confirmar" />
        </Form>
        {isVisible &&
          (hasError ? (
            <div className={style.feedback__error}>
              Algo de errado aconteceu, fale com o noivo
            </div>
          ) : (
            <div className={style.feedback__success}>
              Sua presença foi confirmada. Obrigado
            </div>
          ))}
      </div>
    </section>
  );
}
