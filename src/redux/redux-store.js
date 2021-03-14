const { createStore, combineReducers, applyMiddleware,compose } = require("redux");
// eslint-disable-next-line import/first
import authReducer from "./authReducer";
// eslint-disable-next-line import/first
import dialogsReducer from "./dialogsReducer";
// eslint-disable-next-line import/first
import profileReducer from "./profileReducer";
// eslint-disable-next-line import/first
import usersReducer from "./usersReducer";
// eslint-disable-next-line import/first
import thunkMiddleware from 'redux-thunk';
// eslint-disable-next-line import/first
import { reducer as formReducer } from 'redux-form';
// eslint-disable-next-line import/first
import appReducer from "./appReducer"

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer
});

// Подключение Redux DevTools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, /* preloadedState, */ composeEnhancers(applyMiddleware(thunkMiddleware)));



// let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;


export default store;