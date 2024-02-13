"use client";

import { useState } from "react";

import style from "./Dossier.module.css";
import Image from "next/image";

export default function Dossier(props: any) {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  if (open && !props.locked) {
    return (
      <fieldset className={style.open}>
        <legend onClick={handleClick}>
          <div>
            <Image
              src="/IMG/Dossier/open.png"
              alt="Dossier ouvert"
              width={80}
              height={80}
            />
            <p>{props.nomFichier}</p>
          </div>
        </legend>
        {props.children}
      </fieldset>
    );
  } else if (open === false || props.locked) {
    return (
      <fieldset className={style.ferme}>
        <legend onClick={handleClick}>
          <div onClick={props.openFile}>
            <Image
              src="/IMG/Dossier/closed.png"
              alt="Dossier fermé"
              width={80}
              height={80}
            />
            <p>{props.nomFichier}</p>
          </div>
        </legend>
      </fieldset>
    );
  } else {
    return (
      <fieldset className={style.ferme}>
        <legend onClick={handleClick}>
          <div>
            <Image
              src="/IMG/Dossier/closed.png"
              alt="Dossier fermé"
              width={80}
              height={80}
            />
            <p>{props.nomFichier}</p>
          </div>
        </legend>
      </fieldset>
    );
  }
}
