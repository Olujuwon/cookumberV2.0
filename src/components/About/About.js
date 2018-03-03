import React from "react";

import texts from "./texts.json";
import chef from "./chef.json";
import "../Scss/about.scss";
import image from "../../imgs/dami.jpg";

const About = ()=>{
	return(
		<div className="div-table">
			{texts.map((txt,i)=>{return(
				<table className="container" key={i}>
					<tbody>
						<tr><th className="abt-th">{txt.label}</th></tr>
						<tr className="abt-tr"> 
							<div>{txt.message}</div>
						</tr>
					</tbody>
				</table>
			);}
			)}
			<table className="container">
				<tbody>
					<tr><th className="abt-th" colspan="2">{chef[0]["label-4"]}</th></tr>
					<tr className="abt-tr"> 
						<td className="td-chef"><img src={image} alt="chef"/></td>
						<td className="chef">
							<div>
								{chef[0].chef}
							</div>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
};

export default About;