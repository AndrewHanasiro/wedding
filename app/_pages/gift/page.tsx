"use client";

import React, { useEffect } from "react";
import QRCode from "qrcode";

import style from "./gift.module.scss";
import Link from "next/link";
import Image from "next/image";
import giftIcon from "../../../public/gift.png";

export default function Gift() {
  let qrCodeTExt =
    "00020126640014BR.GOV.BCB.PIX0114+55119964077610224Casamento Paula e Andrew5204000053039865802BR5919PAULA AYUMI KONISHI6009SAO PAULO622605223gU9YTgfBsoKTtf9vxcnaP6304E8F0";

  useEffect(() => {
    const canvas = document.getElementById("canvas");
    QRCode.toCanvas(canvas, qrCodeTExt).catch((err: unknown) => {
      console.error(err);
    });
  });

  return (
    <section className={style.section} id="gift">
      <div className={style.gift}>
        <h2>Presentes</h2>
        <p className={style.gift__description}>
          Sua presença neste momento tão especial é o que realmente importa! Mas
          caso queira nos presentear, temos duas opções: via PIX ou via lista de
          presente
        </p>
        <div className={style.gift__content}>
          <h3 className={style.gift__pix_title}>PIX</h3>
          <canvas id="canvas" className={style.gift__pix_image}></canvas>
          <span className={style.gift__pix_alt}>Chave PIX: (11)99640-7761</span>
          <h3 className={style.gift__list_title}>Lista de Presente</h3>
          <Image
            src={giftIcon}
            alt="gift icon"
            className={style.gift__list_image}
          />
          <Link
            href="https://noivos.casar.com/paula-e-andrew"
            target="_blank"
            className={style.gift__list_alt}
          >
            Clique aqui
          </Link>
        </div>
      </div>
    </section>
  );
}
