import React from "react";
import ReactDOM from "react-dom";
import registerServiceWorker from "./registerServiceWorker";

import {createStore, combineReducers} from "redux";
import {Provider} from "react-redux";
import allReducers from "./redux/reducers";
import throttle from "lodash/throttle";
import {reducer as formReducer} from "redux-form";

import "./index.scss";
import App from "./App";

const rootReducer = combineReducers({
	reducer: allReducers,
	form: formReducer
});

const store = createStore(rootReducer, JSON.parse(localStorage.getItem("state")) || undefined,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe(throttle(()=>{
	localStorage.setItem("state", JSON.stringify(store.getState()));
}, 5000));

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById("root"));
registerServiceWorker();
