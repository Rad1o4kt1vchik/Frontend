import StepCounter from "./StepCounter";

function CounterApp () {
    return (
        <div className = "counter-app">
            <h1>Step Counter</h1>
            <p className = "subtitle">
                Демонстрация работы props и state в React.
            </p>

            <div className = "counter-section">
                <h3>Counter 1 (Step = 1)</h3>
                <p className="Description">
                    Начальное значение: 0, Шаг: 1
                </p>
                <StepCounter initialValue={0} step={1} />
            </div>

            <div className="counter-section">
                <h3>Counter 2 (Step = 5)</h3>
                <p className="Description">
                    Начальное значение: 10, Шаг: 5
                <StepCounter initialValue={10} step={5} />              
                </p>
            </div>
        </div>
    );
}

export default CounterApp;
