import style from "./button.module.scss";

type ButtonInput = {
  children: React.ReactNode;
};

export default function Button({ children }: ButtonInput) {
  return <button className={style.button}>{children}</button>;
}
