import Image from "next/image";
import style from "./Shortcut.module.css";

export default function Shortcut(props: any) {
  return (
    <div className={style.closed} onClick={props.openFile}>
      <Image
        src="/IMG/shortcut.png"
        alt="Dossier ouvert"
        width={110}
        height={100}
      />
      <p>{props.nomFichier}</p>
    </div>
  );
}
