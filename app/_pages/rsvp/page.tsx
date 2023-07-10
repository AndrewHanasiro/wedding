"use client";

import React, { FormEvent, useState } from "react";
import { getDatabase, ref, set } from "firebase/database";

import { app } from "@/app/_config/firebase";
import Submit from "@/components/Input/input_submit";
import InputNumber from "@/components/Input/input_number";
import Form from "@/components/Form";

import style from "./rsvp.module.scss";
import PersonForm, { Answer } from "./components/PersonForm";

export default function RSVP() {
  let [numberOfPeople, setNumberOfPeople] = useState(0);
  let [answer, setAnswer] = useState<Array<Answer>>([]);
  let [isVisible, setIsVisible] = useState(false);
  let [hasError, setHasError] = useState(false);

  function changeNumber(num: number) {
    setNumberOfPeople(num);
    if (numberOfPeople >= num) {
      setAnswer((before) => before.splice(0, num));
    } else {
      const newAnswer: Array<Answer> = Array(num - numberOfPeople).fill({
        name: "",
        children: "",
      });
      setAnswer((before) => [...before, ...newAnswer]);
    }
  }

  async function submit(e: FormEvent<HTMLFormElement>): Promise<void> {
    e.preventDefault();
    const db = getDatabase(app);
    try {
      debugger;
      const promiseList = answer.map((a) => {
        return set(ref(db, "guest/" + a.name), {
          name: a.name,
          children: a.children,
        });
      });
      await Promise.all(promiseList);
      setAnswer([]);
      setNumberOfPeople(0);
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
          <InputNumber
            value={numberOfPeople}
            setValue={(e) => changeNumber(Number(e))}
            label="Quantidade de pessoas:"
          />
          {answer.map((a, idx) => (
            <PersonForm
              key={idx}
              index={idx}
              answer={a}
              setAnswer={setAnswer}
            />
          ))}
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
