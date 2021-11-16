import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import { rootReducer } from './redux/rootReducer';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createSimpleStore } from './redux/utils';
import { userReducer } from './containers/SimpleForms/redux/user/';

// объединяем редьюсеры
const appReducer = combineReducers({rootReducer, 
    userReducer});



// создание простого стора с подпиской на него
const simpleStore = createSimpleStore();
console.log('simpleStore', simpleStore);
// выводим объект стора в объект виндоу
window.simpleStore = simpleStore;

// осуществляем подписку на изменения стора
// const listener1 = simpleStore.subscribe(state => console.log('listener-1', state));
// console.log(listener1);

// const listener2 = simpleStore.subscribe(state => console.log('listener-2', state));
// console.log(listener2);




const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;

// это мидлвар, выводит в консоль ссостояние state
const loggerMiddleware = store => next => action => {
    const result = next(action);
    // console.log("middleware", store);
    return result;
}

// применение мидлвара и редьюсера
const store = createStore(appReducer, composeEnhancers(applyMiddleware(
    loggerMiddleware,
    thunk)));
const app = (
    <Provider store={store}>
        <React.StrictMode>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </React.StrictMode>
    </Provider>
)
ReactDOM.render(
  app,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
