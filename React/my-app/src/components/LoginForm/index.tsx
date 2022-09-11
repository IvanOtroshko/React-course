import { ChangeEventHandler, useState } from "react";
import { Button } from "../Button";
import { Input } from "../Input";
import style from "./style.module.css";

export const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmail: ChangeEventHandler<HTMLInputElement> = (event) => {
    setEmail(event.target.value);
  };

  const handlePassword: ChangeEventHandler<HTMLInputElement> = (event) => {
    setPassword(event.target.value);
  };

  const submit = () => {
    alert(email + " " + password);
  };

  return (
    // <div>
    //   <Input value={email} onChange={handleEmail} type={"login"} />
    //   <Input value={password} onChange={handlePassword} type={"login"} />
    //   <Button onClick={submit} text={"Login"} />
    // </div>
    <div className={style.container}>
    <div>
      <h3>Email</h3>
      <Input type="login" value={email} onChange={handleEmail} />
    </div>
    <div>
      <h3>Password</h3>
      <Input type="login" value={password} onChange={handlePassword} />
    </div>
    <div>
      <Button onClick={submit} text={"Login"} />
    </div>
    <p>Forgot your password?<a href="#">Reset password</a></p>
</div >
  );
};