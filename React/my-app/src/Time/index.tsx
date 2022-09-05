import { useEffect, useState } from "react";

export const Time = () => {
    const clock = (): string => {
        let date = new Date();
        let hours = date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
        let minutes = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
        let seconds = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
        return `${hours}:${minutes}:${seconds}`;
    };

    let [count, setCount] = useState("");

    useEffect(() => {
        setInterval(() => {
            setCount(clock);
        }, 1000);
    }, []);

    return (
        <div>
            <h1>{count}</h1>
        </div>
    );
};