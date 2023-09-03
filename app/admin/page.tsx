"use client";

import { getDatabase, ref, get } from "firebase/database";
import { useEffect, useState } from "react";
import { app } from "@/app/_config/firebase";
import { Guest } from "../_interfaces/guest";

import style from "./admin.module.scss";

export default function Admin() {
  const [guestList, setGuestList] = useState<string[]>([]);

  useEffect(() => {
    async function fetchList() {
      const db = getDatabase(app);
      const snapshot = await get(ref(db, "guest/"));
      if (snapshot.exists()) {
        const list: Array<Guest> = Object.values(snapshot.val());
        setGuestList(list.map((g) => g.name));
      } else {
        console.log(Array.isArray(snapshot.val()));
        throw new Error("Something went wrong on colletion");
      }
    }
    fetchList();
  }, []);

  return (
    <div className={style.table}>
      <ol>
        {guestList.map((g) => (
          <li key={g} className={style.line_guest}>
            {g.toLocaleLowerCase()}
          </li>
        ))}
      </ol>
    </div>
  );
}
