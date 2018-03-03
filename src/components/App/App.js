import React, { Component } from "react";
import { BrowserRouter, Route , Switch, Redirect} from "react-router-dom";

import MainLayout from "../Mainlayout/index";
//import AboutPage from "../About/index";

import "../../App.scss";



class App extends Component {
	render() {
		return (
			<BrowserRouter>
				<Switch>
					<Route path="/home" component={MainLayout}/>
					<Route path="/about" component={MainLayout}/>
					<Route path="/services" component={MainLayout}/>
					<Route path="/contact" component={MainLayout}/>
					<Route path="/users" component={MainLayout}/>
					<Redirect from="/" to = "/home" exact />
					<Route render={()=><h1>404 Page</h1>}/>

				</Switch>
			</BrowserRouter>
		);
	}
}

export default App;
