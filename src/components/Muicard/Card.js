import React from "react";
import logo from "../../imgs/slider/edward.jpg";
import like from "../../imgs/like.svg";
import fav from "../../imgs/fav.svg";
import Button from "@material-ui/core/Button";
import Badge from "@material-ui/core/Badge";
import { withStyles } from "@material-ui/core/styles";

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
});


class OrderCard extends React.Component{
	constructor(props){
		super(props);
		this.state={

		};
	}

	handleMouseover = ()=>{
		console.log("Mouseover");
	}

	handleOrder = ()=>{
		alert("Are you Sure you want This meal?");
	}

	render(){
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
					<div>
						<Badge 
							className={classes.margin} 
							badgeContent={4} 
							color="secondary"
						>
							<img 
								src={fav} 
								alt="fav" 
								className="fav"/>
						</Badge>
						<Badge 
							className={classes.margin} 
							badgeContent={7} 
							color="secondary"
						>
							<img 
								src={like} 
								alt="like" 
								className="like"/>
						</Badge>
					</div>
					<div>
						<Button 
							className="muibutton"
							size="small"
							variant="raised" 
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

export default withStyles(styles)(OrderCard);