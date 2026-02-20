import { useState } from 'react';

function StepCounter({ initialValue = 0, step = 1}) {
    const [count, setCount] = useState(initialValue);
    const [history, setHistory] = useState([initialValue]);
    const [operationCount, setOperationCount] = useState(0);

    const handleIncrement =  () => {
        const newCount = count + step;
        setCount(newCount);
        setHistory([...history, newCount]);
        setOperationCount(operationCount + 1);

    };
    const handleDecrement = () => {
        const newCount = count - step;
        setCount(newCount);
        setHistory([...history, newCount]);
        setOperationCount(operationCount + 1);
    };
    const handleReset = () => {
        setCount(initialValue);
        setHistory([initialValue]);
        setOperationCount(0);
    };
    return (
        <div className="step-counter">
            <h2>Current Count: {count}</h2>

            <div className="stats">
                <p><strong>Total Operations:</strong> {operationCount}</p>
                <p><strong>Last 5 Values:</strong> {history.slice(-5).join(', ')}</p>
            </div>
            <div className="buttonGroup">
                <button onClick = {handleIncrement}>
                    Increment (+{step})
                </button>
                <button onClick = {handleDecrement}>
                    Decrement (-{step})
                </button>
                <button onClick = {handleReset}>
                    Reset
                </button>
            </div>
        </div>
    )
}

export default StepCounter;