import { createStore, applyMiddleware, compose } from 'redux';
import { rootReducer } from "./rootReducer";
import { createLogger } from 'redux-logger';
import { redirect } from '../middlewares/redirect';
import thunkMiddleware from 'redux-thunk';

export default function configureStore() {
    const store = compose(
        applyMiddleware(thunkMiddleware),
        applyMiddleware(createLogger()),
        applyMiddleware(redirect)
    )(createStore)(rootReducer);
    if (module.hot) {
        module.hot.accept("./rootReducer", () => {
            const nextRootReducer = require("./rootReducer").rootReducer;
            store.replaceReducer(nextRootReducer);
        });
    }
    return store;
}