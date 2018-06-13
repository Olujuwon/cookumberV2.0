import React from "react";








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