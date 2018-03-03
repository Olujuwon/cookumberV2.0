import React, { Component } from "react";

import "../Scss/dashboard.scss";
import {fetchData} from "../../util/api";
import OrderForm from "../Order/Order";



class DashBoard extends Component {
	constructor(props){
		super(props);
		this.state={
			menus: {},
			day: new Date(),
		};
	}
    
	componentWillMount(){
		this.fetch();
	}
    
fetch = async () => {
	this.setState({menus: await fetchData()});
}

date =()=>{
	//let monthArr = ["January", "February","March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
	const day = this.state.day.getDate();
	const month =`${this.state.day.getMonth()<10 ? `0${this.state.day.getMonth()+1}`: 
		this.state.day.getMonth()+1}`;
	const year = this.state.day.getFullYear();
	const date = `${year}-${month}-${day}`;
	return date;
}

handleClick = ()=>{
	
}

Menu = ()=>{
	const prodArray = [{"id":1,"wknumber":3,"day":"Monday","date":"2018-02-20","name":"Short-man Burger","price":1200.0},{"id":2,"wknumber":3,"day":"Tuesday","date":"2018-02-20","name":"Medium-Burger","price":1500.0},{"id":3,"wknumber":3,"day":"Wednesday","date":"2018-02-20","name":"Pizzaria","price":800.0},{"id":4,"wknumber":3,"day":"Thursday","date":"2018-02-20","name":"Thursday-Delight-Double","price":2500.0},{"id":5,"wknumber":3,"day":"Friday","date":"2018-02-20","name":"Thanks-to-the-chef-friday","price":2000.0},{"id":6,"wknumber":3,"day":"Saturday","date":"2018-02-20","name":"Saturday-Combo","price":1500.0},{"id":7,"wknumber":3,"day":"Sunday","date":"2018-02-20","name":"Sunday Fruity","price":1000.0}];
	//const weekMenus = Object.values(this.state.menus).filter(menu=>(menu.wknumber===3));
	return(
		<div>
			{prodArray.map((weekMenu, i)=> {
				return(
					<div key={i}>
						<div onClick={()=>{this.handleClick();}} className="table-head">{weekMenu.day}</div>
						<table >
							<tbody>
								<tr>
									<td>{weekMenu.name}</td>
									<td>L VEG M</td> 
									<td>{`NGN ${weekMenu.price}`}</td>
								</tr>
							</tbody>
						</table>
					</div>
				);})}
		</div>
	);
}

render(){
	return (
		<div className="dashboard">
			<div className="left">
				<this.Menu/>
			</div>
			<div className="right">
				<OrderForm title="Quick Order!" motd="we are open today for 2hrs, from 1200 - 1400" 
					menukey="L = lactose free   VL = low lactose   M = milk free   G = gluten free   A = incl. allergens   VEG = vegan"/>
			</div>
		</div>
	);
}
}

export default DashBoard;