import React from "react";
import {NavLink} from "react-router-dom";

import logo from "../../imgs/cookumber-rect.png";

import { withStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import "./header.scss";


const styles = theme => ({
	button: {
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
			loginState: false
		};
	}

	handleLoginState = ()=>{
		this.setState({loginState: !this.state.loginState});
	}

	render(){
		const { classes } = this.props;
		return (
			<Toolbar className="toolbar">
				<NavLink to="/">
					<img 
						src={logo} 
						alt="cookumber_logo"
						className="logo"
					/>
				</NavLink>
				<div className="leftSection">
					<NavLink to="/signin">
						<Button 
							className={classes.button}
							disabled={this.state.loginState}
						>
					Login
						</Button>
					</NavLink>
					<NavLink to="/signup">
						<Button 
							className={classes.button}
							variant="raised" 
							color="secondary">
					Sign Up
						</Button>
					</NavLink>
				</div>
			</Toolbar>
		
		);
	}
}



export default withStyles(styles)(Header);