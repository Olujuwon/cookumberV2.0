import React from "react";
import "../Scss/container.scss";

export const HalfDiv = (props)=>{
	return (
		<div className="halfdivContainer">
			{props.children}
		</div>
	);
};

export const FullDiv = (props)=>{
	return (
		<div className="fulldivContainer">
			{props.children}
		</div>
	);
};