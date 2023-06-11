"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

import Map from "@/components/Map";
import Button from "@/components/Button";
import GIcon from "@/public/icon-google.svg";

import style from "./information.module.scss";

export default function Information() {
  const search = "Espaço+Jabutica";

  function calendar() {
    fetch("https://www.googleapis.com/calendar/v3/calendars/calendarId");
  }

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
          <Map search={search} />
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
        <section>
          <h2>Schedule</h2>
          <p>
            <a
              target="_blank"
              href="https://calendar.google.com/calendar/event?action=TEMPLATE&amp;tmeid=MGwxcnZjMGFsc3RndmZtYW9vbnVzODdyOTQgYW5kcmV3a2hhbmFzaXJvQG0&amp;tmsrc=andrewkhanasiro%40gmail.com"
            >
              <Image
                src="https://www.google.com/calendar/images/ext/gc_button1_pt-BR.gif"
                alt="Google Calendar"
                width={100}
                height={25}
              />
            </a>
          </p>
        </section>
      </div>
    </div>
  );
}
