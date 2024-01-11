import { useState } from "react";
import style from "./Lock.module.css";

export default function Lock(props) {
  const [userCode, setUserCode] = useState("");

  const handleClick = () => {
    console.log(userCode);
  };

  return (
    <div className={style.corps}>
      <div className={style.handle}>
        <h3>{props.nomLock}</h3>
        <div onClick={props.closeFile}>X</div>
      </div>
      <div className={style.content}>
        <p>Pour ouvrir le dossier il vous faut un code !</p>
        <input type="text" onChange={(e) => setUserCode(e.target.value)} />
        <button onClick={handleClick}>Valider</button>
      </div>
    </div>
  );
}
