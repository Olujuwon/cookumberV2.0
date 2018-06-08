import React from "react";
import facebook from "../../imgs/facebook-logo.svg";
import instagram from "../../imgs/instagram.svg";
import snapchat from "../../imgs/snapchat.svg";
import twitter from "../../imgs/twitter-logo.svg";
import youtube from "../../imgs/youtube.svg";
//import telephone from "../../imgs/telephone.svg";

import "./footer.scss";

const Footer = ()=>{
	return (
		<div className="footer-container">
			<div className='social-media'>
				<div>
					<img src={facebook} alt="facebook" className="svg"/>
					<img src={instagram} alt="instagram" className="svg"/>
					<img src={snapchat} alt="snapchat" className="svg"/>
					<img src={twitter} alt="twitter" className="svg"/>
					<img src={youtube} alt="youtube" className="svg"/>
				</div>
				<p> &copy; 2018. Cookumber</p>
			</div>
			
		</div>
	);

};

export default Footer;