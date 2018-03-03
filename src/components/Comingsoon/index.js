import React from "react";

import cooking from "../../imgs/cooking.svg";
import "../Scss/coming.scss";


const ComingSoon = (props)=>{
	return(
		<div className="container">
			<img src={cooking} alt="cooking"/>
			<h1>{`${props.page} page is under construction!`}</h1>
		</div>
	);
};

export default ComingSoon;