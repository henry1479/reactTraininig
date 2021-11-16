import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { add, sub, addNum } from "../../redux/actions/actions";

export const Counter = (props) => {
    const dispatch = useDispatch();
    const [value, setValue] = useState(0);

    const counter = useSelector(state=>state.rootReducer.counter)
    // диспатчим actionCreator для каждого метода
    const addCounter = () => {
        dispatch(add())
    }
    const subCounter = () => {
        dispatch(sub())
    }

    const addNumCounter = (number)=> {
        dispatch(addNum(number))
    }

    const getNumber = (event) => {
        // console.log(event.target.value)
        setValue(event.target.value);
    }

    return (
        <>
            <h2>Counter {counter} </h2>
            <button onClick={addCounter}>+</button>
            <button onClick={subCounter}>-</button>
            <input
                type="number"
                name="number"
                value={value}
                onChange={getNumber}
            />
            <button onClick={()=>addNumCounter(value)}>Add Num</button>
        </>
    )
}