import React from "react";

import texts from "./texts.json";
import chef from "./chef.json";
import "../Scss/about.scss";
//import image from "../../imgs/dami.jpg";


const About = (props)=>{
	return(
		<div className="aboutContainer">
			{texts.map((txt,i)=>{return(
				<div key={i} className="wordsDiv">
					<div className="labelDiv"><h3>{txt.label}</h3></div>
					{txt.message}
				</div>
			);}
			)}
			<div  className="wordsDiv">
				<div className="labelDiv"><h3>{chef[0].label}</h3></div>
				{chef[0].chef}
			</div>
		</div>
	);
};

export default About;