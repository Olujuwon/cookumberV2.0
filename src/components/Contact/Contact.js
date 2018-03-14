import React from "react";
import { Field, reduxForm } from "redux-form";
import GoogleMapReact from "google-map-react";

import location from "../../imgs/location.svg";
import "../Scss/contact.scss";

const GoogleMapText = (props)=><div>
	<img src={location} alt="" className='contactImg'/></div>;


const ContactPage = props=>{
	props = {
		center: { lat: 6.4442052, lng: 3.5036619 },
		zoom: 13
	};
	const {handleSubmit, pristine, reset, submitting} = props;
	return(
		<div className="contactContainer">
			<div className="textSection">
				<h2 className="contactHead">We'd like to hear from you</h2>
				<p className="contactWords">
				We'd love to hear from you always, kindly send us your reviews,
				suggestions and complains.
					<br/>
					<br/>
					<br/>
				</p>
				<h2 className="contactHead">Where to find us</h2>
				<address className="contactWords">
				Victory Park Estate, Jakande, Lekki,<br/>
				Lagos, Nigeria.<br/>
				Email : contact@cookumber.ng<br/>
				Phone : 0908 581 8095, 0909 039 2161
				</address>
			</div>
			<div className="formSection">
				<form onSubmit={handleSubmit} className="formContact">
					<div >
						<Field
							name="fullName"
							component="input"
							type="text"
							placeholder="Your Full Name"
							className="contactInput"
						/>
					</div>
					<div>
						<Field
							name="email"
							component="input"
							type="email"
							placeholder="Your Email"
							className="contactInput"
						/>
					</div>
					<div>
						<Field
							name="message"
							component="textarea"
							type="text"
							placeholder="Your Message"
							className="contactTextArea"
						/>
					</div>
					<div>
						<button type="submit" disabled={pristine || submitting}>
          Send
						</button>
						<button type="button" disabled={pristine || submitting} onClick={reset}>
          Cancel
						</button>
					</div>
				</form>
			</div>
			<div className="contactGooglemap">
				<GoogleMapReact 
					bootstrapURLKeys={{ key: ["AIzaSyDBIlxpE2BeEBV-_6tfY9G923IujpGUXdk & callback=myMap"] }}			 
					defaultCenter={props.center}
					defaultZoom={props.zoom}>
					<GoogleMapText
						lat={6.4442052}
						lng={3.5036619}
						marker={location}
					/>		
				</GoogleMapReact>
			</div>
		</div>
	);
};

export default reduxForm({form:"contact"})(ContactPage);