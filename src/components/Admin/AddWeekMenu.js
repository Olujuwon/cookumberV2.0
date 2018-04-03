import React from "react";
import { Field, reduxForm } from "redux-form";
import DayPickerInput from "react-day-picker/DayPickerInput";
import "react-day-picker/lib/style.css";


const dayArray = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

export const DatePickerComponent = field => {
	//const { input: { value, onChange } } = props;
	return (
		<div>
			<DayPickerInput inputProps={{...field.input}} onDayChange={(day) => console.log(day)} />
		</div>
	);
};


const AddWeekMenu = props => {
	const {handleSubmit, pristine, reset, submitting} = props;
	return (
		<form onSubmit={handleSubmit}>
			<h2 className="order-title">{props.title}</h2>
			<p className="order-motd">{props.motd}</p>
			<div className="date">
				<Field
					name="date"
					//component="input"
					type="date"
					placeholder="Date"
					component = {DatePickerComponent}
					className="menu-input"/> 
			</div>
			<div>
				<Field name="day" component="select">
					<option />
					{dayArray.map(day => <option value={day}>{day}</option>)}
				</Field>
			</div>
			<div>
				<label>
					<Field
						name="menutype"
						component="input"
						type="radio"
						value="Breakfast"
					/>{" "}
            Breakfast
				</label>
				<label>
					<Field
						name="menutype"
						component="input"
						type="radio"
						value="Lunch"
					/>{" "}
            Lunch
				</label>
			</div>
			<div>
				<Field
					name="foodname"
					component="input"
					type="text"
					placeholder="Food Name"
					className="menu-input"
				/>
			</div>
			<div>
				<Field
					name="foodprice"
					component="input"
					type="number"
					placeholder="Price"
					className="menu-input"
				/>
			</div>
			<div>
				<button type="submit" disabled={pristine || submitting} className = "menuButton">
          Order
				</button>
				<button type="button" disabled={pristine || submitting} onClick={reset} className = "menuButton">
          Cancel
				</button>
			</div>
		</form>
	);
};

export default reduxForm({form: "weekmenu"})(AddWeekMenu);