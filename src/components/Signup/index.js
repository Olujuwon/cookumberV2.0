import React from "react";
import PropTypes from "prop-types";

import {signUp, postData} from "../../util/apiutil";

import {FormInput} from "../Inputform";
import Button from "@material-ui/core/Button";

import "./index.scss";

const propTypes = {
	heading: PropTypes.string,
};

const defaultProps = {
	heading: "Sign Up ",
};

class SignUp extends React.Component{
	state = {
		firstname:"",
		lastname:"",
		phone:"",
		address:"",
		email: "",
		password: ""
	};

	handleClick = async ()=>{
		const title = "users";
		const userDetails = {
			firstname: this.state.firstname,
			lastname: this.state.lastname,
			phone: this.state.phone,
			address:this.state.address,
			email: this.state.email,
		};
		console.log("Signup", await signUp(this.state.email, this.state.password));
		console.log("Database", await postData(userDetails, title));
	};

	render(){
		return(
			<div className="signupcontainer">
				<form className="signupform">
					<h2 >{this.props.heading}</h2>
					<div className="rows">
						<div className="firstname">
							<FormInput 
								label="Firstname"
								name="firstname"
								type="text"
								placeholder="Enter Your Firstname"
								value = {this.state.firstname}
								onChange = {(event)=>this.setState({firstname: event.target.value})}
							/>
						</div>
						<div className="lastname">
							<FormInput 
								label="Lastname"
								name="lastname"
								type="text"
								placeholder="Enter Your Lastname"
								value = {this.state.lastname}
								onChange = {(event)=>this.setState({lastname: event.target.value})}
							/>
						</div>
					</div>
					<div className="rows">
						<div className="email">
							<FormInput 
								label="Email"
								name="email"
								type="email"
								placeholder="Enter Your Email"
								value = {this.state.email}
								onChange = {(event)=>this.setState({email: event.target.value})}
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
							/>
						</div>
					</div>
					<div className="rows">
						<div className="phone">
							<FormInput 
								label="Telephone"
								name="phone"
								type="number"
								placeholder="Enter Your Telephone"
								value = {this.state.phone}
								onChange = {(event)=>this.setState({phone: event.target.value})}
							/>
						</div>
						<div className="address">
							<FormInput 
								label="Address"
								name="address"
								type="text"
								placeholder="Enter Your Address"
								value = {this.state.address}
								onChange = {(event)=>this.setState({address: event.target.value})}
							/>
						</div>
					</div>
					<div className="button">
						<Button
							variant="raised" 
							color="primary"
							size="large"
							onClick ={this.handleClick}
						>
					Signup
						</Button>
					</div>
				</form>
			</div>
		);
	}
}

SignUp.propTypes = propTypes;
SignUp.defaultProps = defaultProps;

export default SignUp;