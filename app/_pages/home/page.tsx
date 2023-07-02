import style from "./home.module.scss";

export default function Home() {
  return (
    <section className={style.section} id="home">
      <div className={style.home}>
        <div className={style.home__img}>
          <span className={style.home__title}>
            <p className={style.home__names}>
              Paula <br />
              & <br />
              Andrew
            </p>
            <p className={style.home__date}>25.11.2023</p>
          </span>
        </div>
      </div>
    </section>
  );
}
