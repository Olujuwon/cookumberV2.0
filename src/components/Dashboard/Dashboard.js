import React, { Component } from "react";

import "../Scss/dashboard.scss";
import {fetchData} from "../../util/api";
import OrderForm from "../Order/Order";
import Menu from "../Menu/menu";



class DashBoard extends Component {
	constructor(props){
		super(props);
		this.state={
			menus: {},
			day: new Date(),
			menutoggle: true,
		};
	}
    
	componentWillMount(){
		this.fetch();
	}
    
fetch = async () => {
	this.setState({menus: await fetchData()});
}

date =()=>{
	//let monthArr = ["January", "February","March", "April", "May", "June", "July", "August", 
	//"September", "October", "November", "December"];
	const day = this.state.day.getDate();
	const month =`${this.state.day.getMonth()<10 ? `0${this.state.day.getMonth()+1}`: 
		this.state.day.getMonth()+1}`;
	const year = this.state.day.getFullYear();
	const date = `${year}-${month}-${day}`;
	return date;
}


render(){
	console.log(this.state.menus);
	return (
		<div className="dashboard">
			<div className="left">
				<Menu/>
			</div>
			<div className="right">
				<OrderForm title="Quick Order!" motd="we are open today for 2hrs, from 1200 - 1400" 
					menukey="L = lactose free   VL = low lactose   M = milk free   G = gluten free   
					A = incl. allergens   VEG = vegan"/>
			</div>
		</div>
	);
}
}

export default DashBoard;