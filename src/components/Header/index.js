import React from "react";
import {NavLink} from "react-router-dom";

import {connect} from "react-redux";
import {userSelector} from "../../redux/selectors";
import {logOut} from "../../redux/actions";

import logo from "../../imgs/cookumber-rect.png";

import { withStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import "./index.scss";


const styles = theme => ({
	button: {
		margin: theme.spacing.unit,
	},
	buttonColored: {
		margin: theme.spacing.unit,
	},
	input: {
		display: "none",
	},
});

class Header extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			loginState: false,
			showmenu: false
		};
	}

	handleLoginState = ()=>{
		this.setState({loginState: !this.state.loginState});
	}

	handleClick = _ =>{
		this.setState({showmenu: !this.state.showmenu});
	}

	handlelogout = _ =>{
		this.props.logout();
	}

	LoginComponent = props => {
		return(
			<div>
				<p
					onClick={this.handleClick}
				>
					{`Hello, ${this.props.user.displayName ?  this.props.user.displayName : this.props.user.email }`}
				</p>
				<span className={this.state.showmenu ? "dropdownshow" : "dropdown"}>
					<p>Profile</p>
					<p 
						onClick={this.handlelogout}
					>
						Logout
					</p>
				</span>
			</div>
		);
	}

	render(){
		console.log(this.props.user);
		const { classes } = this.props;
		return (
			<div className="headercontainer">
				<Toolbar className="toolbar">
					<NavLink to="/">
						<img 
							src={logo} 
							alt="cookumber_logo"
							className="logo"
						/>
					</NavLink>
					<div className="leftSection">
						{this.props.user.email ? "" :<NavLink to="/signin">
							<Button 
								className={classes.button}
								disabled={this.state.loginState}
							>
					Login
							</Button>
						</NavLink>}
						{this.props.user.email ? "" :<NavLink to="/signup">
							<Button 
								className={classes.buttonColored}
								variant="raised" 
								color="primary">
					Sign Up
							</Button>
						</NavLink>}
					</div>
				</Toolbar>
				<div className="isloggedin">
					{this.props.user.email ? <this.LoginComponent /> : ""}
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		user: userSelector(state)
	};
};

const mapDispatchToProps = dispatch =>{
	return{
		logout: _ => dispatch(logOut())
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Header));