import style from "./home.module.scss";

export default function Home() {
  return (
    <div className={style.home}>
      <div className={style.home__img}>
        <span className={style.home__title}>
          Wedding
          <br />
          Paula & <br />
          Andrew
        </span>
      </div>
    </div>
  );
}
