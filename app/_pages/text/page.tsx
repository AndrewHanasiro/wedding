"use client";
import React from "react";
import Image from "next/image";

import style from "./text.module.scss";
import wePic from "../../../public/we2.jpg";

export default function Text() {
  return (
    <div className={style.text} id="text">
      <section className={style.text__text}>
        <p>Queridos amigos e familiares,</p>
        <p>
          Estamos muitos felizes em convidá-los para esse momento tão especial.
          Será um evento intimista, mais reservado e cheio de amor.
        </p>
        <p>Haverá uma breve cerimônia seguida de um almoço, no mesmo local.</p>
        <p>Contamos com a sua presença!</p>
        <p>Com carinho,</p>
        <p>Paula e Andrew</p>
      </section>
      <div className={style.text__photo}>
        <Image src={wePic} alt="WE" className={style.text__photo__img} />
      </div>
    </div>
  );
}
