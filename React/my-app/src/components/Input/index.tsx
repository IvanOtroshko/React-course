
import { ChangeEventHandler } from "react";
import style from "./style.module.css";


type InputColorType = "login";
interface Input {
  type: InputColorType;
  value: string;
  placeholder?: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
}


const getInputStyle = (type: InputColorType) => {
  if (type === "login") {
    return style.login;
  }

};
export const Input = (props: Input) => {
  return (
    <input
      className={`${style.input} ${getInputStyle(props.type)}`}
      value={props.value}
      placeholder={props.placeholder}
      onChange={props.onChange}
    ></input>
  );
};


