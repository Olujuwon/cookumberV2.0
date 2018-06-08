import React from "react";


import "./title.scss";

const ComponentTitle = props =>{
	return (
		<div className="titlecontainer">
			<img src={props.icon} alt="icon" className="titleicon"/>
			<h3 className="titletext">
				{props.title}
			</h3>
		</div>
	);
};

export default ComponentTitle;