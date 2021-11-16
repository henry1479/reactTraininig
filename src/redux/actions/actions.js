import { ADD } from "./actionsType";
import { SUB } from "./actionsType";
import { ADD_NUM } from "./actionsType";

export const add = () => ({
    type: ADD
});

export const sub = () => ({
    type: SUB
})


// export const addNum = (number) => ({
//     type: ADD_NUM,
//     payload: number
// })

// экшенкриэйтор диспатчит асинхронный экшен с задержкой 3 секунды
// работает мидлвар из thunk

export const addNum = number => dispatch => {
    setTimeout(()=>{dispatch({
        type: ADD_NUM,
        payload: number
    })}, 3000);
} 