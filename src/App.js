import React, { Component } from "react";
import { BrowserRouter, Route , Switch, Redirect} from "react-router-dom";

import "./App.scss";
import MainLayout from "./components/Mainlayout/index";

class App extends Component {
	render() {
		return (
			<BrowserRouter>
				<Switch>
					<Route path="/ck" component={MainLayout}/>
					<Redirect from="/" to = "ck/home" exact />
					<Route render={()=><h1>cookmber 404 Page</h1>}/>
				</Switch>
			</BrowserRouter>
		);
	}

}

export default App;
