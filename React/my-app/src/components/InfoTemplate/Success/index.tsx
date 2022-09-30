import { Button } from "../../Button";
import styles from "./slyle.module.css";


export const Success = () => {
    return (
        <div>
            <h1>Success</h1>
            <div >
                <div>
                    <p>Email confirmed. </p>
                </div>
                <p>Your registration is now completed </p>
            </div>
            <Button text={"Login"} onClick={() => { }} ></Button>
        </div>

    );
};

