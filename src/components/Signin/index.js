import React from "react";
import PropTypes from "prop-types";

import {connect} from "react-redux";
import {createUser} from "../../redux/actions";
import {signIn} from "../../util/apiutil";
import { withRouter } from "react-router";

import isEmail from "validator/lib/isEmail";
import isAlphanumeric from "validator/lib/isAlphanumeric";

import {FormInput} from "../Inputform";
import Button from "@material-ui/core/Button";

import "./index.scss";

const validate = (state) =>{
	return {
		username: isEmail(state.username),
		password: isAlphanumeric(state.password)
	};
};

const propTypes = {
	heading: PropTypes.string,
};

const defaultProps = {
	heading: "Sign-In",
};

class SignIn extends React.Component{
	state = {
		username: "",
		password: "",
		usernameisvalid: false,
		passwordisvalid: false,
		user:{},
	};

	handleClick = async ()=>{
		this.setState({user: await signIn(this.state.username, this.state.password)});
		this.setState({
			username: "",
			password: "",
		});
		if(this.state.user.error){
			alert(this.state.user.error.message);
			return;
		} else{
			this.props.createuser(this.state.user);
			this.props.history.push("/order");
		}
	};

	handleBlur = (value)=>{
		const errors = validate(this.state);
		if (errors.username){
			console.log("username",errors.username);
			return;
		}
		
	}

	render(){
		const username ="username";
		return(
			<div className="signincontainer">
				<form className="signinform">
					<h2 >{this.props.heading}</h2>
					<div className="username">
						<FormInput 
							label="Username"
							name="username"
							type="email"
							placeholder="Enter Your Username"
							value = {this.state.username}
							onChange = {(event)=>this.setState({username: event.target.value})}
							onBlur = {()=>this.handleBlur(username)}
							isValidinput ={this.state.usernameisvalid}
						/>
					</div>
					<div className="password">
						<FormInput 
							label="Password"
							name="password"
							type="password"
							placeholder="Enter Your Password"
							value = {this.state.password}
							onChange = {(event)=>this.setState({password: event.target.value})}
							onBlur = {()=>this.handleBlur()}
							isValidinput = {this.state.passwordisvalid}
						/>
					</div>
					<div className="button">
						<Button
							variant="raised" 
							color="primary"
							size="large"
							onClick ={this.handleClick}
						>
					Login
						</Button>
					</div>
				</form>
			</div>
		);
	}
}

SignIn.propTypes = propTypes;
SignIn.defaultProps = defaultProps;

const mapDispatchToProps = (dispatch)=>{
	return{
		createuser: (payload)=>dispatch(createUser(payload))
	};
};

export default withRouter(connect(null, mapDispatchToProps)(SignIn));