import React from "react";
import ReactDOM from "react-dom";
import registerServiceWorker from "./registerServiceWorker";

import {createStore, combineReducers} from "redux";
import {Provider} from "react-redux";
import allReducers from "./redux/reducers";
import throttle from "lodash/throttle";
import {reducer as formReducer} from "redux-form";
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";

import "./index.scss";
import App from "./App";
import MainLayout from "./components/Mainlayout/index";

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

ReactDOM.render(
	<Provider store={store}>
		<App >
			<BrowserRouter>
				<Switch>
					<Route path="/order" component={MainLayout}/>
					<Redirect from="/" to = "/order" exact />
					<Route render={()=><h1>404 Page</h1>}/>
				</Switch>
			</BrowserRouter>
		</App>
	</Provider>, document.getElementById("root"));
registerServiceWorker();
