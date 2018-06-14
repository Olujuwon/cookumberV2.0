import React from "react";

import OrderCard from "../Muicard";
import Info from "../Info";
import Title from "../Title";
import {getData} from "../../util/apiutil";

import breakfast from "../../imgs/breakfast.jpg";
import lunch from "../../imgs/lunch.jpg";
import headerIcon from "../../imgs/lifeline.svg";

import "./index.scss";

const fetchData =  async ()=> await getData("http://dev-cookumber.pantheonsite.io/wp-json/acf/v3/menu");

class MainLayout extends React.Component{
	constructor(props){
		super(props);
		this.state={
			menudataArray:[],
		};
	}

	componentWillMount(){
		this.getDatatoState();
	}

	getDatatoState = async ()=> this.setState({menudataArray: await fetchData()});

	render(){
		const dataObject = {...this.state.menudataArray[0]}.acf;
		const lunchArray = {...dataObject}.lunch;
		const breakfastArray = {...dataObject}.lunch;
		return(
			<div className="maincontainer">
				<div className="uppersection">
					<Title icon={headerIcon} title="Checkout our delicious meals for the day"/>
					<div className="containerDiv">
						<OrderCard 
							image={breakfast}
							cardTitle="Our Delicious Breakfast Options"
							menuItems ={breakfastArray}
						/>
						<OrderCard 
							image={lunch}
							cardTitle="Our Delicious Lunch Options"
							menuItems ={lunchArray}
						/>
					</div>
				</div>
				<Info />
			</div>
		);
	}
}


export default MainLayout;