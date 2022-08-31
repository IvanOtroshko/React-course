import { IPost } from "../../Types/post";
import style from "./style.module.css";


export const ItemOfPost = (props: IPost) => {
  return (
    <div className={style.container}>
      <img className={style.image} src={props.image} alt={props.title} />
      <h2 className={style.title}>{props.title}</h2>
      <p className={style.text}>{props.text}</p>
      <h5 className={style.date}>{props.date}</h5>
    </div>
  );
};