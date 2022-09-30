
import { Button } from "../../Button";
import styles from "./style.module.css";


export const Confirmation = () => {
    return (
        <>
        <div className={styles.containerSuccess}>
            <h1 >Registration Confirmation</h1>
            <div>
                <p>Please activate your account with</p>
                <p> the activation link in the email <a href="#">test@gmail.com</a> </p>
                <p>Please, check your email</p>
            </div>          
        </div>
        <Button text={"Login"} onClick={() => { }} ></Button>
        </>
    );
};

