import React from "react";

import DayPickerInput from "react-day-picker/DayPickerInput";
import "react-day-picker/lib/style.css";
import Cart from "../Cart/Cart";




class AddWeekMenu extends React.Component{
	constructor(props){
		super (props);
		this.state = {
			date: "",
			menutype: "",
			foodname: "",
			price: ""

		};
	}

	weekMenu = props => {
		const handleSubmit = (e)=>{
			e.preventDefault();
			const weekNumber = (new Date())
			const formValues = {
				date: (this.state.date).toString(),
				menutype: this.state.menutype,
				foodname : this.state.foodname,
				price: this.state.price,
				weeknumber: weekNumber
			};
			console.log(formValues);
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
				< Cart />
				< this.weekMenu />
			</div>
		);
	}
}


export default AddWeekMenu;