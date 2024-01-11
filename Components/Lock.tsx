import style from "./Lock.module.css";

export default function Lock(props) {
  return (
    <div className={style.corps}>
      <div className={style.handle}>
        <h3>Title</h3>
        <div onClick={props.closeFile}>X</div>
      </div>
      <div className={style.content}>This readme is really dragging on...</div>
    </div>
  );
}
