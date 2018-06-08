import React from "react";
import PropTypes from "prop-types";

import FormInput from "../Inputform";

import "./index.scss";

const propTypes = {
	heading: PropTypes.string,
};

const defaultProps = {
	heading: "Sign-In Page",
};

const SignIn = props => (
	<div>
		{props.heading}
		<FormInput textarea={true} name="textarea"/>
	</div>
);

SignIn.propTypes = propTypes;
SignIn.defaultProps = defaultProps;

export default SignIn;