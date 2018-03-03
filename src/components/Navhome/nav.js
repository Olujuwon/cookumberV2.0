import React, { Component } from "react";
import "../Scss/nav.scss";
import portfolio from "../../imgs/portfolio.svg";
import ourstory from "../../imgs/ourstory.svg";
import flavor from "../../imgs/flavor.svg";
import location from "../../imgs/location.svg";



class HomeNav extends Component {
	render(){
		return (
			<div className="nav">
				<span className="span"><img src={portfolio} alt="portfolio" className='nav-img'/>
					<p className="nav-p">Our Portfolio</p></span>
				<span className="span"><img src={ourstory} alt="portfolio" className='nav-img'/>
					<p className="nav-p">Our Story</p></span>
				<span className="span"><img src={flavor} alt="portfolio" className='nav-img'/>
					<p className="nav-p">Our Flavours</p></span>
				<span className="span"><img src={location} alt="portfolio" className='nav-img'/>
					<p className="nav-p">Our Location</p></span>
            
			</div>
		);
	}
}

export default HomeNav;