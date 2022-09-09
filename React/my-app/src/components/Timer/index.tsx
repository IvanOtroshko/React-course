import { useEffect, useState } from "react";
import { Button } from "../Button";

export const Timer = () => {
    let [seconds, setSeconds] = useState(0);
    let timer: any;
    const start = () => {
        setSeconds((seconds += 1));
    };
    useEffect(() => {
        if (seconds > 0) {
            timer = setInterval(() => {
                setSeconds(seconds + 1);
            }, 1000);
        }
        return () => clearInterval(timer);
    });
    const stop = () => {
        clearInterval(timer);
    };
    const reset = () => {
        setSeconds(0);
    };

    return (
        <div>
            <h1>Timer</h1>
            <h1>{seconds}</h1>
            <div>
                <Button text={"Start"} onClick={start} />
                <Button text={"Stop"} onClick={stop} />
                <Button text={"Reset"} onClick={reset} />
            </div>
        </div>
    );
};


