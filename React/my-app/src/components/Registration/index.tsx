import { ChangeEventHandler, useEffect, useState } from "react"
import { Button } from "../Button";
import { Input } from "../Input";
import { UserCard } from "../User";
import style from "./style.module.css";


export const Login = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setconfirmPassword] = useState("");


    const handleName: ChangeEventHandler<HTMLInputElement> = (event) => {
        setName(event?.target.value);
    };
    const handleEmail: ChangeEventHandler<HTMLInputElement> = (event) => {
        setEmail(event?.target.value);
    };

    const handlePassword: ChangeEventHandler<HTMLInputElement> = (event) => {
        setPassword(event?.target.value);
    };

    const handleConfirm: ChangeEventHandler<HTMLInputElement> = (event) => {
        setconfirmPassword(event?.target.value);
    };

    const submit = () => {
        alert(name + " " + email + " " + password + " " + confirmPassword);
    }

    return (
        <div className={style.container}>
            <div>
              <h3>User name</h3>
              <Input type="login" value={name} onChange={handleName} />
            </div>
            <div>
              <h3>Email</h3>
              <Input type="login" value={email} onChange={handleEmail} />
            </div>
            <div>
              <h3>Password</h3>
              <Input type="login" value={password} onChange={handlePassword} />
            </div>
            <div>
              <h3>Confirm Password</h3>
              <Input type="login" value={confirmPassword} onChange={handleConfirm} />
            </div>
            <div>
              <Button onClick={submit} text={"Login"} />
            </div>
            <p>If you have account, you can <a href="#">login</a></p>
        </div >
    );
}
