"use client";

import style from "./Fichier.module.css";

export default function Fichier(props) {
  if (props.onShow) {
    return (
      <div className={style.corps}>
        <div className={style.handle}>
          <h3>{props.nomFichier}</h3>
          <div onClick={props.closeFile}>X</div>
        </div>
        <div className={style.content}>
          <img src={props.imgUrl} alt="" />
        </div>
      </div>
    );
  } else {
    return <></>;
  }
}
