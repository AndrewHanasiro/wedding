"use client";
import React from "react";
import Image from "next/image";

import Map from "@/components/Map";

import style from "./information.module.scss";

export default function Information() {
  const search = "Espaço+Jabutica";

  return (
    <section className={style.section} id="information">
      <div className={style.information}>
        <div className={style.information__content}>
          <h1>Mini-wedding</h1>
          <p className={style.information__text}>
            Sábado, 25 de Novembro 2023
            <br />
            Horário: 12H
          </p>
          <p className={style.information__text}>
            Rua Harmonia, 896
            <br />
            Vila Madalena - São Paulo
          </p>
          <p className={style.information__text}>Traje: social esporte</p>
          <Map search={search} />

          <h4>Agende no seu calendário</h4>

          <p className={style.information__calendar}>
            <a
              target="_blank"
              href="https://calendar.google.com/calendar/event?action=TEMPLATE&amp;tmeid=MGwxcnZjMGFsc3RndmZtYW9vbnVzODdyOTQgMTdmZjYzYzNkYmEyOWU3ZDQ2Yjg1NDEyODE4YjdkMWQ3NTg2ZDA5NWM1ZTcwYWRmOTIyNmM3ZDc3Njg2YTczZkBn&amp;tmsrc=17ff63c3dba29e7d46b85412818b7d1d7586d095c5e70adf9226c7d77686a73f%40group.calendar.google.com"
            >
              <Image
                src="https://www.google.com/calendar/images/ext/gc_button1_pt-BR.gif"
                alt="Google Calendar"
                width={100}
                height={25}
              />
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
