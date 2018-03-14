import React from "react";
import {Link} from "react-router-dom";

import "../Scss/services.scss";


const ServicesPage = (props)=>{
	return(
		<div  className="wordsServices">
			<div className="labelServices"><h3>Our Services</h3></div>
			<p className="servicesText">Cookumber services include but are not limited to the 
			following; </p>
			<h4>Private Functions: </h4>
			<p className="servicesText">from individual lunch 
			delivery/pickup to birthday parties, housewarming, 
			child's dedication, weddings, anniversaries and even 
			to religious celebrations, Cookumber is sure to guide her 
			clients through the selection of food and menu-creation 
			with her customer's budget in mind.</p>
			<h4>Corporate Functions: </h4>
			<p className="servicesText">We cater for corporate cafeterias/canteens, meetings, 
			office parties, buffets, event launches e.t.c. After 
			understanding the occasion, we will work together to 
			formulate food selection and innovative concepts to suit 
			the requirements to add glamor to the event.  </p>
			<br/>
			<Link to="/ck/users"><p>Request for quote</p></Link>
			<h3>WHY WE ARE DIFFERENT </h3>
			<p className="servicesText">
				<q>Cookumber finds the solutions that others miss</q> <br/>
			With a nationwide presence, Cookumber can deliver 
			services on a sole supply or regional basis where our 
			objective is always to deliver customer satisfaction whilst
			participating in Clients’ overall target achievements. 
			Cookumber is in the business of satisfying client's needs 
			with single, unified, all-inclusive complete service solutions.</p>

			<p className="servicesText">We list below some of our key strengths for the successful 
			execution of projects:</p>

			<h4>Capabilities:</h4>

			<p className="servicesText">Cookumber serves a wide category of clients regardless of 
			industry sector. Our capabilities have increased through 
			creativity and innovation over the years. We manage from small,
			medium to large events.  Cookumber serves clients on a wide 
			array of services, regardless of industry sector.  
			Our capabilities have been developed through years of experience
			providing support solutions for the most difficult, fundamental 
			catering and related 
			challenges facing our clients. </p>

			<h4>Local knowledge:</h4>

			<p className="servicesText">Extensive experience and capability in managing various projects 
			locally, the technically qualified staff and detailed knowledge 
			required to successfully develop and implement various catering 
			related projects. 
			Our staff members proposed to engage in a given project are 
			carefully selected based on their maturity, experience, knowledge 
			and ability to effectively communicate and interact with our 
			customers.</p>

			<h4>Technical Abilities:</h4>

			<p className="servicesText">A resource of highly qualified professionals unsurpassed in its 
			depth of experience and knowledge.  Such experience substantially
			sensitizes our team to the vigorous service demands of the 
			institutional and environmental demands.</p>

			
		</div>
	);
};

export default ServicesPage;