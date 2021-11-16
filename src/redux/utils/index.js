// простая реализация стора


export const createSimpleStore = () => {
// переменные для стора и функций для прослушивания изменений стора
    const state = {};
    let listeners = [];

    // метод для получения стора
    const getState = () => state;

    // метод для внесения изменений в стор
    // также вызывает подписанные функции с новым значение стора
    const dispatch = (newState) => {
        const state = newState;
        listeners.forEach(listener => {
            listener(state)
        });
    }

    // метод для подписки и отписки на изменение событий в сторе
    const subscribe = (listener) => {
        listeners.push(listener);
        return function unsubscribe() {
            const index = listeners.indexOf(listeners);
            listeners.splice(index, 1);
        }
    }


    return {
        getState,
        dispatch,
        subscribe
    }
}