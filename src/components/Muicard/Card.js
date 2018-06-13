import React from "react";
import logo from "../../imgs/slider/edward.jpg";
import like from "../../imgs/like.svg";
import fav from "../../imgs/fav.svg";
import Button from "@material-ui/core/Button";
import Badge from "@material-ui/core/Badge";
import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

import "./card.scss";

const TextOverlay = props => {
	return(
		<div className="overlay">
			<p className="heading">Lorem ipsum dolor sit amet</p>
			<p className="date">Thursday, 31 May 2018</p>
			<p className="text">
                Sed dignissim lacinia nunc. 
                Curabitur tortor. Pellentesque 
                nibh. Aenean quam. In 
                scelerisque sem at dolor. 
                Maecenas mattis. Sed convallis 
                tristique sem. Proin ut ligula vel 
                nunc egestas porttitor. 
			</p>
		</div>
	);
};

const styles = theme => ({
	margin: {
		margin: theme.spacing.unit * 1,
	},
	padding: {
		padding: `0 ${theme.spacing.unit / 2}px`,
	},
	badge:{
		"background-color": "rgba(242, 122, 53, 0.678)",
		width:"19px",
		height:"19px",
		color:"green",
	}
});


class Order extends React.Component{
	constructor(props){
		super(props);
		this.state={
			fav: null,
			like: null
		};
	}

	handleMouseover = ()=>{
		console.log("Mouseover");
	}

	handleOrder = ()=>{
		alert("Are you Sure you want This meal?");
	}

	handleFavIconClick = ()=>{
		console.log("Favorites");
		this.setState({fav: this.state.fav + 1});
	}

	render(){
		console.log("Badge", this.props);
		const { classes } = this.props;
		return(
			
			<div className="container">
				<div className="imageContainer">
					<img 
						src={logo} 
						alt="card" 
						onMouseOver={this.handleMouseover}
						className="cardImg"
					/>
					<p className="foodName">Food's Name Food's Name  Food's Name  </p>
				</div>
				<div className="icons">
					<div className="areaRight">
						<Badge 
							classes={{badge: classes.badge}}
							badgeContent={this.state.fav} 
							color="secondary"
						>
							<img 
								src={fav} 
								alt="fav" 
								className="fav"
								onClick={()=>this.handleFavIconClick()}
							/>
						</Badge>
						<Badge 
							classes={{badge: classes.badge}} 
							badgeContent={this.state.like} 
							color="primary"
						>
							<img 
								src={like} 
								alt="like" 
								className="like"/>
						</Badge>
					</div>
					<div className="areaLeft">
						<Button 
							className="muibutton"
							size="medium"
							variant="outlined" 
							color="primary"
							onClick={this.handleOrder}>
						Order
						</Button>
					</div>
				</div>
			</div>
		);
	}
}

class OrderCard extends React.Component{
	constructor(props){
		super(props);
		this.state={
			
		};
	}

	render(){
		console.log("Badge", this.props);
		const { classes } = this.props;
		return(
			<div className="container">
				<div className="imageContainer">
					<img 
						src={logo} 
						alt="card" 
						onMouseOver={this.handleMouseover}
						className="cardImg"
					/>
					<p className="foodName">Food's Name Food's Name  Food's Name  </p>
				</div>
				<div className="list">
					<Paper className={classes.root}>
						<Table className={classes.table}>
							<TableHead>
								<TableRow>
									<TableCell>Food</TableCell>
									<TableCell numeric>Price</TableCell>
								</TableRow>
							</TableHead>
							<TableBody>
								<TableRow>
									<TableCell component="th" scope="row">
												Pounded Yam & Egusi
									</TableCell>
									<TableCell numeric>NGN 5000</TableCell>
								</TableRow>
								<TableRow>
									<TableCell component="th" scope="row">
												Pounded Yam & Egusi
									</TableCell>
									<TableCell numeric>NGN 5000</TableCell>
								</TableRow>
								<TableRow>
									<TableCell component="th" scope="row">
												Pounded Yam & Egusi
									</TableCell>
									<TableCell numeric>NGN 5000</TableCell>
								</TableRow>
								<TableRow>
									<TableCell component="th" scope="row">
												Pounded Yam & Egusi
									</TableCell>
									<TableCell numeric>NGN 5000</TableCell>
								</TableRow>
							</TableBody>
						</Table>
					</Paper>
				</div>
			</div>
		);
	}
}

export default withStyles(styles)(OrderCard);