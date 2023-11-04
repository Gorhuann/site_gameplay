"use client";

import { useState } from "react";

import style from "./Fichier.module.css";
import Image from "next/image";

export default function Fichier(props) {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
    console.log("caca");
  };

  if (open) {
    return (
      <fieldset className={style.open}>
        <legend onClick={handleClick}>
          <Image
            src="/IMG/Fichier/open.png"
            alt="Fichie ouvert"
            width={100}
            height={100}
          />
        </legend>
      </fieldset>
    );
  } else {
    return (
      <fieldset className={style.ferme}>
        <legend onClick={handleClick}>
          <Image
            src="/IMG/Fichier/closed.png"
            alt="Fichie fermé"
            width={100}
            height={100}
          />
        </legend>
      </fieldset>
    );
  }
}
