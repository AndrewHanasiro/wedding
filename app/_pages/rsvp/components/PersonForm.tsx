"use client";

import React, { useState } from "react";

import Checkbox from "@/components/Input/input_checkbox";
import Text from "@/components/Input/input_text";

import style from "./PersonForm.module.scss";

export type Answer = {
  name: string;
  children: boolean;
};

type PersonFormInput = {
  index: number;
  answer: Answer;
  setAnswer: React.Dispatch<React.SetStateAction<Answer[]>>;
};

export default function PersonForm({
  index,
  answer,
  setAnswer,
}: PersonFormInput) {
  function changeName(name: string) {
    setAnswer((before) =>
      before.map((v, i) => {
        if (i == index) {
          return {
            name: name,
            children: v.children,
          } as Answer;
        } else {
          return v;
        }
      })
    );
  }

  function changeChildren(children: boolean) {
    setAnswer((before) =>
      before.map((v, i) => {
        if (i == index) {
          return {
            name: v.name,
            children: children,
          } as Answer;
        } else {
          return v;
        }
      })
    );
  }

  return (
    <div className={style.person_form}>
      <Text
        placeholder="Nome completo"
        setValue={changeName}
        value={answer.name}
      />
      <Checkbox
        label="Possuo menos de 12 anos"
        setValue={changeChildren}
        value={answer.children}
      />
    </div>
  );
}
