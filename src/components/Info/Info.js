import React from "react";
import iphone from "../../imgs/cookumber-iphone.png";


import "./info.scss";

const ComponentTitle = props =>{
	return (
		<div className="infocontainer">
			<div className="appad">
				<img src={iphone} alt="iphone"/>
			</div>
			<div className="analytics">
				<h3>Order from your pocket</h3>
				<p>
					Download our free iOS and Android App and Order
					food online and track the fastest way possible.
				</p>
				<img src="" alt="iphone"/>
				<img src="" alt="iphone"/>
			</div>
		</div>
	);
};

export default ComponentTitle;