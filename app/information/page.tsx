import React from "react";
import Link from "next/link";

import style from "./information.module.scss";

export default function Information() {
  const apiKey = process.env.GOOGLE_MAPS_API_KEY;
  const search = "Espaço+Jabutica";
  const mapSrc = `https://www.google.com/maps/embed/v1/place?key=${apiKey}&q=${search}`;
  return (
    <div className={style.information}>
      <h1>5W (four)</h1>
      <div className={style.information__content}>
        <section>
          <h2>What</h2>
          <p>
            Our wedding will happen after 17 years together, we hope you can
            attend this event.
          </p>
        </section>
        <section>
          <h2>Where</h2>
          <p>Rua Harmonia, 896 - Sumarezinho, São Paulo - SP, 05435-001</p>
          <iframe
            className={style.information__map}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            src={mapSrc}
          ></iframe>
        </section>
        <section>
          <h2>When</h2>
          <p>
            Saturday November 25 2023 12:00:00 GMT-0300 (Brasilia Standard Time)
          </p>
        </section>
        <section>
          <h2>Why</h2>
          <p>
            Well... that isn&apos;t a hard question, but let&apos;s start with:
            we love, trust and fulfill each other. It didn&apos;t happen before
            because we were resolving our lives.
          </p>
        </section>
        <section>
          <h2>Who</h2>
          <p>
            Gotta be joking right...? In case you don&apos;t know see{" "}
            <Link href="/about_us">this</Link>
          </p>
        </section>
      </div>
    </div>
  );
}
