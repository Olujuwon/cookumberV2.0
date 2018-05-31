import React, { Component } from "react";

import Header from "./components/Header/index";
import Footer from "./components/Footer/index";

import "./App.scss";

class App extends Component {
	render() {
		return (
			<main>
				<Header />
				{this.props.children}
				<Footer/>
			</main>
		);
	}

}

export default App;
