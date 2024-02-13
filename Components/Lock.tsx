import { useState } from "react";
import style from "./Lock.module.css";

export default function Lock(props: any) {
  const [userCode, setUserCode] = useState("");

  let input: string;

  const handleClick = () => {
    setUserCode(input);
    if (input === props.code) props.unlocked();
  };

  if (props.onShow && userCode === props.code) {
    return (
      <div className={style.corps}>
        <div className={style.handle}>
          <h3>{props.nomLock}</h3>
          <div onClick={props.closeFile}>X</div>
        </div>
        <div className={style.content}>
          <h4>Le dossier est ouvert !</h4>
        </div>
      </div>
    );
  } else if (props.onShow && userCode !== "") {
    return (
      <div className={style.corps}>
        <div className={style.handle}>
          <h3>{props.nomLock}</h3>
          <div onClick={props.closeFile}>X</div>
        </div>
        <div className={style.content}>
          <p>Pour ouvrir le dossier il vous faut un code !</p>
          <input type="text" onChange={(e) => (input = e.target.value)} />
          <b>Le code est incorrect !</b>
          <button onClick={handleClick}>Valider</button>
        </div>
      </div>
    );
  } else if (props.onShow) {
    return (
      <div className={style.corps}>
        <div className={style.handle}>
          <h3>{props.nomLock}</h3>
          <div onClick={props.closeFile}>X</div>
        </div>
        <div className={style.content}>
          <p>Pour ouvrir le dossier il vous faut un code !</p>
          <input type="text" onChange={(e) => (input = e.target.value)} />
          <button onClick={handleClick}>Valider</button>
        </div>
      </div>
    );
  }
}
