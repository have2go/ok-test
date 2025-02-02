import React, { useState } from "react";
import "./App.stylus";
import Counter from "./components/Counter/Counter";
import Button from "./components/Button/Button";

const App: React.FC = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [counterValue, setCounterValue] = useState(1);

    const handleClickLoading = () => {
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
        }, 3000);
    };

    const handleClickCount = () => {
        setCounterValue(prev => prev + 1);
    };

    return (
        <section className="app">
            <div className="app__container">
                <label>Счётчик</label>
                <Counter size={24} quantity={4} />
            </div>
            <div className="app__container">
                <label>Имитация загрузки по клику</label>
                <Button
                    size={56}
                    variant="secondary"
                    text="Кликни на меня"
                    state={isLoading ? "loading" : "enabled"}
                    onClick={handleClickLoading}
                />
            </div>
            <div className="app__container">
                <label>Счётчик кликов внутри кнопки</label>
                <Button size={36} text="Считаю клики" counter counterValue={counterValue} onClick={handleClickCount} />
            </div>
            <div className="app__container">
                <label>Подробнее в Stroybook (кликай)</label>
                <a href="https://have2go.github.io/ok-test/" target="_blank">
                    <Button size={56} text="Storyboooooooooooooooooooooooook" />
                </a>
            </div>
        </section>
    );
};

export default App;
