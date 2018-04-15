import React from "react";

import DayPickerInput from "react-day-picker/DayPickerInput";
import "react-day-picker/lib/style.css";
import Cart from "../Cart/Cart";
import weeknumber from "current-week-number";




class AddWeekMenu extends React.Component{
	constructor(props){
		super (props);
		this.state = {
			date: "",
			menutype: "Breakfast",
			foodname: "",
			price: "",
			itemsarray:[],
			
		};
	}

	weekMenu = props => {
		const handleSubmit = (e)=>{
			e.preventDefault();
			//localStorage.setItem("Cart-Items", JSON.stringify([]));
			//let cartItemArr =  JSON.parse(localStorage.getItem("Cart-Items"));
			let dateParsed = ((this.state.date).toString()).split(" ");
			//["Sat", "Apr", "14", "2018", "12:00:00", "GMT+0300", "(EEST)"]
			let weekNumberDate = `${dateParsed[1]} ${dateParsed[2]}, ${dateParsed[3]}`;
			const weekNumber = weeknumber(new Date(weekNumberDate));
			const formValues = {
				date: (this.state.date).toString(),
				menutype: this.state.menutype,
				foodname : this.state.foodname,
				price: this.state.price,
				weeknumber: weekNumber
			};
			this.state.itemsarray.push(formValues);
			console.log(this.state.itemsarray.length);
			this.setState({
				date: "",
				menutype: "",
				foodname: "",
				price: ""
			});
			//localStorage.setItem("Cart-Items", JSON.stringify(formValues));
			//console.log(cartItemArr.push(formValues));
			//console.log(cartItemArr);
		};
		
		return (
			<form onSubmit={handleSubmit}>
				<DayPickerInput onDayChange={day => this.setState({date: day})} className="inputField"/>
				<select name="menutype" value={this.state.menutype}  onChange={(e)=>{this.setState({menutype: e.target.value});}}>
					<option value="Breakfast">Breakfast</option>
					<option value="Lunch">Lunch</option>
				</select>
				<input type="text" name="foodname" className="inputField" onChange = {(e)=>{this.setState({foodname: e.target.value});}} />
				<input type="number" name="price" className="inputField" onChange = {(e)=>{this.setState({price: e.target.value});}} />
				<input type="submit" value="Add"/>
			</form>
		);
	};

	render(){
		return(
			<div>
				< Cart count={this.state.itemsarray.length} modalcontent={this.state.itemsarray}/>
				< this.weekMenu />
			</div>
		);
	}
}


export default AddWeekMenu;