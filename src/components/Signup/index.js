import React from "react";
import PropTypes from "prop-types";

import "./index.scss";

const propTypes = {
	heading: PropTypes.string,
};

const defaultProps = {
	heading: "Sign-Up Page",
};

const SignUp = props => (
	<div>
		{props.heading}
	</div>
);

SignUp.propTypes = propTypes;
SignUp.defaultProps = defaultProps;

export default SignUp;