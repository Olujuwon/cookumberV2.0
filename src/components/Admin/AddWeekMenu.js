import React from "react";

import DayPickerInput from "react-day-picker/DayPickerInput";
import "react-day-picker/lib/style.css";
import Cart from "../Cart/Cart";
import weeknumber from "current-week-number";
import "../Scss/addweekmenu.scss";
import cart from "../../imgs/database.svg";




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
		const handleAdd = (e)=>{
			e.preventDefault();
			let dateParsed = ((this.state.date).toString()).split(" ");
			//["Sat", "Apr", "14", "2018", "12:00:00", "GMT+0300", "(EEST)"] -- dateParsed value
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
				menutype: "Breakfast",
				foodname: "",
				price: ""
			});
		};
		
		return (
			<form onSubmit={handleAdd} className="mainForm">
				<h3>{this.props.title}</h3>
				<p>{this.props.motd}</p>
				<div>
					<label htmlFor="date" className="label">Date :</label>
					<DayPickerInput onDayChange={day => this.setState({date: day})} 
						className="inputField" name="date"/>
				</div>
				<div>
					<label htmlFor="menutype" className="label">Type of Menu :</label>
					<select name="menutype" value={this.state.menutype}  onChange={(e)=>
					{this.setState({menutype: e.target.value});}} className="optionSelect">
						<option value="Breakfast">Breakfast</option>
						<option value="Lunch">Lunch</option>
					</select>
				</div>
				<div>
					<label htmlFor="menutype" className="label">Name :</label>
					<input type="text" name="foodname" className="inputField" onChange = {(e)=>
					{this.setState({foodname: e.target.value});}} placeholder="Food name"/>
				</div>
				<div>
					<label htmlFor="menutype" className="label">Price :</label>
					<input type="number" name="price" className="inputField" onChange = {(e)=>
					{this.setState({price: e.target.value});}} placeholder="Food price"/>
				</div>
				
				<button type="submit" className="inputButton">ADD</button>
			</form>
		);
	};

	render(){
		return(
			<div>
				< Cart count={this.state.itemsarray.length} 
					modalcontent={this.state.itemsarray} icon={cart}/>
				< this.weekMenu />
			</div>
		);
	}
}


export default AddWeekMenu;