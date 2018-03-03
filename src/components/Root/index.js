import React from "react";
import {createStore, combineReducers} from "redux";
import {Provider} from "react-redux";
import allReducers from "../../redux/reducers";
import App from "../App/App";
import throttle from "lodash/throttle";
import {reducer as formReducer} from "redux-form";

import "../../index.scss";

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


const Root=()=>(
	<Provider store={store}>
		<App />
	</Provider>
);

export default Root;