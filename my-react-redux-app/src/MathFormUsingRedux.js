import {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {addActions, subActions} from './store';

export function MathFormUsingRedux() {
    const dispatch = useDispatch();
    const addResult = useSelector(state => {
        return state.addition.sum;
    });
    const subtractionResult = useSelector(state => {
        return state.subtraction.difference;
    });

    const [number1, setNumber1] = useState(0);
    const [number2, setNumber2] = useState(0);

    const addButtonClicked = () => {
        dispatch(addActions.add({
            num1: number1,
            num2: number2
        }))
    }

    const subtractButtonClicked = () => {
        dispatch(subActions.subtract({
            num1: number1,
            num2: number2
        }))
    }
    return (<div>
        <input type="number" placeholder="number 1" onChange={(e) => setNumber1(parseInt(e.currentTarget.value))}></input> <br/>
        <input type="number" placeholder="number 2" onChange={(e) => setNumber2(parseInt(e.currentTarget.value))}></input> <br/>
        <button onClick={() => addButtonClicked()}>Add</button>
        <h2>{addResult}</h2>
        <button onClick={() => subtractButtonClicked()}>Subtract</button>
        <h2>{subtractionResult}</h2>
        
    </div>);
};