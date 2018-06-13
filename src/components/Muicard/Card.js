import React from "react";
import { withStyles } from "@material-ui/core/styles";

import PropTypes from "prop-types";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import imgplaceholder from "../../imgs/picture.svg";

import "./card.scss";


const styles = theme => ({
	tablecell:{
		color: "#6B7A88",
		fontWeight:"500",
	}
});

const defaultProps = {
	image: imgplaceholder,
	cardTitle: "Our Lunch Menu",
	menuItems: [{name: "Eba & Gbegiri", price:"1500"}, {name: "Jollof Rice and Chicken", price:"3000"} ]
};

const propTypes = {
	image: PropTypes.node,
	cardTitle: PropTypes.string,
	menuItems: PropTypes.array,
};

class OrderCard extends React.Component{
	constructor(props){
		super(props);
		this.state={
			
		};
	}

	handleClick = (name, price) => {
		alert(name, price);
	}

	render(){
		const { classes } = this.props;
		return(
			<div className="container">
				<div className="imageContainer">
					<img 
						src={this.props.image} 
						alt="card" 
						className="cardImg"
					/>
					<p className="foodName">{this.props.cardTitle}</p>
				</div>
				<div className="list">
					<Paper className={classes.root}>
						<Table className={classes.table}>
							<TableBody>
								{this.props.menuItems.map((menuitem, index)=>{return(
									<TableRow 
										hover
										onClick={event => this.handleClick(menuitem.name, menuitem.price)}
										key={index}
									>
										<TableCell 
											component="th" 
											scope="row"
											className={this.props.classes.tablecell}
										>
											{menuitem.name}
										</TableCell>
										<TableCell 
											numeric
											className={this.props.classes.tablecell}
										>{`NGN ${menuitem.price}`}</TableCell>
									</TableRow>
								);})}
							</TableBody>
						</Table>
					</Paper>
				</div>
			</div>
		);
	}
}

OrderCard.defaultProps = defaultProps;
OrderCard.propTypes = propTypes;

export default withStyles(styles)(OrderCard);