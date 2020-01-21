import { createStore, applyMiddleware, compose } from "redux";
import thunk from 'redux-thunk';
import mainReducers from './main.reducers';

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const store = () => {
    return createStore(mainReducers, composeEnhancers(applyMiddleware(thunk)));
};

export default store;