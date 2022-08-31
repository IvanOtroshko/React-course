import style from "./style.module.css";

interface IProps {
  title: string;
  symbol: string;
  keywords: string;
  
}

export const EmojiRow = (props: IProps) => {
  return (
    <div className={style.emItem}>
      <div className={style.emSymbol}>{props.symbol}</div>
      <h3>{props.title}</h3>
      <p className={style.keywords}>{props.keywords}</p>
    </div>
  );
};