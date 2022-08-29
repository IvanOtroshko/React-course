import { useState } from "react";
import { Button } from "../Button"

export const Clicker = () => {
    let [clickCount, setClickCount] = useState(0);

    const onClickPlus = () => {
        setClickCount(clickCount + 1);
    };
    const onClickMinus = () => {
        setClickCount(clickCount - 1);
    };

    return (
        <div>
            {clickCount >= 10 && (
                <div>
                    <h2>Хватит кликать!!!</h2>
                    <Button onClick={onClickMinus} text={"-"} />
                </div>
            )}
            {clickCount <= 0 && (
                <div>
                    <h2>Начните счет</h2>
                    <Button text={"+"} onClick={onClickPlus}
                    />
                </div>
            )}
            {clickCount > 0 && clickCount < 10 && (
                <div>
                    <h2>{clickCount}</h2>
                    <Button text={"+"} onClick={onClickPlus} />
                    <Button text={"-"} onClick={onClickMinus} />
                </div>
            )}
        </div>
    );
};
