"use client";

import React, { useEffect } from "react";
import QRCode from "qrcode";

import style from "./gift.module.scss";
import Link from "next/link";
import Image from "next/image";
import giftIcon from "../../../public/gift.png";

export default function Gift() {
  let qrCodeTExt =
    "00020126470014BR.GOV.BCB.PIX0125andrewkhanasiro@gmail.com5204000053039865802BR5921Andrew Kenji Hanasiro6009SAO PAULO61080540900062130509casamento6304DD0C";

  useEffect(() => {
    const canvas = document.getElementById("canvas");
    QRCode.toCanvas(canvas, qrCodeTExt).catch((err: unknown) => {
      console.error(err);
    });
  });

  return (
    <section className={style.section} id="gift">
      <div className={style.gift}>
        <h2>Lista de presentes</h2>
        <div className={style.gift__content}>
          <div className={style.gift__item}>
            <canvas id="canvas" className={style.gift__image}></canvas>
            <span className={style.gift__alt}>QRcode PIX</span>
          </div>
          <div className={style.gift__item}>
            <Link
              href="https://noivos.casar.com/paula-e-andrew"
              target="_blank"
            >
              <Image
                src={giftIcon}
                alt="gift icon"
                className={style.gift__image}
              />
            </Link>
            <Link
              href="https://noivos.casar.com/paula-e-andrew"
              target="_blank"
              className={style.gift__alt}
            >
              Lista de presente
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
