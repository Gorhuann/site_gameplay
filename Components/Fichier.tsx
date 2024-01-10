"use client";

import Draggable from "react-draggable";
import style from "./Fichier.module.css";

export default function Fichier(props) {
  return (
    <Draggable bounds="section" handle={"." + style.handle}>
      <div className={style.corps}>
        <div className={style.handle}>
          <h3>Title</h3>
          <div>X</div>
        </div>
        <div className={style.content}>{props.children}</div>
      </div>
    </Draggable>
  );
}
