import React from "react";

import style from "./gift.module.scss";

export default function Gift() {
  return (
    <section className={style.section} id="gift">
      <div className={style.gift}>
        <h2>Lista de presentes</h2>
        <div className={style.gift__content}>
          <p>
            We are hosting this party of goodwill, we are more than gladly by
            your presence. Nevertheless, you are in a good mood feel free to
            explore those options
          </p>
        </div>
      </div>
    </section>
  );
}
