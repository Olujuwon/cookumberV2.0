import React from "react";
import PropTypes from "prop-types";
import {Router} from "react-router";
import createBrowserHistory from "history/createBrowserHistory";

import Header from "./components/Header/index";
import Footer from "./components/Footer/index";

import "./App.scss";

const propTypes = {
	children: PropTypes.node,
};

const defaultProps = {
	children: "Hello World",
};

const history = createBrowserHistory();

const App = props => (
	<Router history= {history}>
		<div>
			<Header />
			{props.children}
			<Footer />
		</div>
	</Router>
);

App.propTypes = propTypes;
App.defaultProps = defaultProps;

export default App;
