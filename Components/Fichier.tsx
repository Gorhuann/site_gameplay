"use client";

import Draggable from "react-draggable";
import style from "./Fichier.module.css";

export default function Fichier(props) {
  return (
    <Draggable handle={"." + style.handle} defaultPosition={{ x: 0, y: 0 }}>
      <div className={style.corps}>
        <div className={style.handle}>
          <h3>Title</h3>
          <div>X</div>
        </div>
        <div className={style.content}>
          This readme is really dragging on...
        </div>
      </div>
    </Draggable>
  );
}
