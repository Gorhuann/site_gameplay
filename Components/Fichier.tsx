"use client";

import { useState } from "react";

import style from "./Fichier.module.css";
import Image from "next/image";

export default function Fichier(props) {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  if (open) {
    return (
      <fieldset className={style.open}>
        <legend onClick={handleClick}>
          <div>
            <Image
              src="/IMG/Fichier/open.png"
              alt="Fichie ouvert"
              width={100}
              height={100}
            />
            <p>{props.nomFichier}</p>
          </div>
        </legend>
        {props.children}
      </fieldset>
    );
  } else {
    return (
      <fieldset className={style.ferme}>
        <legend onClick={handleClick}>
          <div>
            <Image
              src="/IMG/Fichier/closed.png"
              alt="Fichie fermé"
              width={100}
              height={100}
            />
            <p>{props.nomFichier}</p>
          </div>
        </legend>
      </fieldset>
    );
  }
}
