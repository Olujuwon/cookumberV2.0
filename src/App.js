import React from "react";
import PropTypes from "prop-types";

import Header from "./components/Header/index";
import Footer from "./components/Footer/index";

import "./App.scss";

const propTypes = {
	children: PropTypes.node,
};

const defaultProps = {
	children: "Hello World",
};


const App = props => (
	<div>
		<Header />
		{props.children}
		<Footer />
	</div>
);

App.propTypes = propTypes;
App.defaultProps = defaultProps;

export default App;
