import React from "react";
import {Link} from "react-router-dom";

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

const Header = (props)=>{
	const { classes } = props;
	return (
		<Toolbar className="toolbar">
			<Link to="/order">
				<img 
					src={logo} 
					alt="cookumber_logo"
					className="logo"
				/>
			</Link>
			<div className="leftSection">
				<Link to="/signin">
					<Button 
						className={classes.button}>
					Login
					</Button>
				</Link>
				<Link to="/signup">
					<Button 
						className={classes.button}
						variant="raised" 
						color="secondary">
					Sign Up
					</Button>
				</Link>
			</div>
		</Toolbar>
	);

};



export default withStyles(styles)(Header);