import React from "react";
import style from "./rsvp.module.scss";
import Form from "@/components/Form";

export default function RSVP() {
  return (
    <div className={style.rsvp}>
      <h1>Répondez S&#8217;il Vous Plaît</h1>
      <Form />
    </div>
  );
}
