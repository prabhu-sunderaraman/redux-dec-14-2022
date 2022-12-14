import {useState} from 'react';

export function MathFormUsingPlainReact() {
    const [number1, setNumber1] = useState(0);
    const [number2, setNumber2] = useState(0);
    const [message, setMessage] = useState("");

    const addButtonClicked = () => {
        let result = number1 + number2;
        setMessage(`Sum is ${result}`);
    }
    return (<div>
        <input type="number" placeholder="number 1" onChange={(e) => setNumber1(parseInt(e.currentTarget.value))}></input> <br/>
        <input type="number" placeholder="number 2" onChange={(e) => setNumber2(parseInt(e.currentTarget.value))}></input> <br/>
        <button onClick={() => addButtonClicked()}>Add</button>
        <h2>{message}</h2>
    </div>);
};