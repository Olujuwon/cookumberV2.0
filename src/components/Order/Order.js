import React from "react";
import { Field, reduxForm } from "redux-form";

import "../Scss/order.scss";


const OrderForm = props => {
	const {handleSubmit, pristine, reset, submitting} = props;
	return (
        
		<form onSubmit={handleSubmit}>
			<h2 className="order-title">{props.title}</h2>
			<p className="order-motd">{props.motd}</p>
			<div className="fullname">
				<Field
					name="fullName"
					component="input"
					type="text"
					placeholder="Full Name"
					className="order-input"
				/>
			</div>
			<div>
				<Field
					name="phone"
					component="input"
					type="phone"
					placeholder="Phone"
					className="order-input"
				/>
			</div>
			<div>
				<Field
					name="email"
					component="input"
					type="email"
					placeholder="Email"
					className="order-input"
				/>
			</div>
			<div>
				<Field
					name="address"
					component="input"
					type="text"
					placeholder="Address"
					className="order-input"
				/>
			</div>
			<div>
				<Field
					name="order-item"
					component="input"
					type="text"
					placeholder="Your Order"
					className="order-input"
				/>
			</div>
			<div>
				<button type="submit" disabled={pristine || submitting}>
          Order
				</button>
				<button type="button" disabled={pristine || submitting} onClick={reset}>
          Cancel
				</button>
			</div>
			<span className="menu-key">{props.menukey}</span>
		</form>
	);
};


export default reduxForm({form: "order"})(OrderForm);