"use client";

import style from "./Fichier.module.css";

export default function Fichier(props) {
  const handleClick = () => {
    console.log("caca");
  };

  return (
    <fieldset className={style.ferme}>
      <legend onClick={handleClick}>Fichier</legend>
    </fieldset>
  );
}
