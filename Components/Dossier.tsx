"use client";

import { useState } from "react";
import Fichier from "@/Components/Fichier";

import style from "./Dossier.module.css";
import Image from "next/image";

export default function Dossier(props) {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  if (open) {
    return (
      <>
        <legend onClick={handleClick}>
          <div className={style.dossier}>
            <Image
              src="/IMG/Dossier/open.png"
              alt="Dossier ouvert"
              width={100}
              height={100}
            />
            <p>{props.nomFichier}</p>
          </div>
        </legend>
        {props.children}
      </>
    );
  } else {
    return (
      <legend onClick={handleClick}>
        <div className={style.dossier}>
          <Image
            src="/IMG/Dossier/closed.png"
            alt="Dossier fermé"
            width={100}
            height={100}
          />
          <p>{props.nomFichier}</p>
        </div>
      </legend>
    );
  }
}
