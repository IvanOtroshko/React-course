
import { ChangeEventHandler } from "react";
import style from "./style.module.css";

interface Input {
    value: string;
    placeholder?: string;
    onChange: ChangeEventHandler<HTMLInputElement>;
}

export const Input = (props: Input) => {
    return (
      <input
        className={style.input}
        value={props.value}
        placeholder={props.placeholder}
        onChange={props.onChange}
      ></input>
    );
  };


