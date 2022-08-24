
import style from "./style.module.css";

interface Input {
    placeholder?: string;
}

export const Input = (props: Input) => {
    return (
        <div>
            <input className={style.input} placeholder={props.placeholder} />
        </div>

    )
}


