import React, { Component } from "react";
import {Link} from "react-router-dom";


import "../Scss/nav.scss";
import portfolio from "../../imgs/portfolio.svg";
import ourstory from "../../imgs/ourstory.svg";
import flavor from "../../imgs/flavor.svg";
import location from "../../imgs/location.svg";

//this.props.history.push(`/app/user/${this.props.user.id}`);

class HomeNav extends Component {
	render(){
		return (
			<div className="nav">
				<span className="span"><img src={portfolio} alt="portfolio" className='nav-img'/>
					<Link to="/ck/users"><p className="nav-p">Our Portfolio</p></Link></span>
				<span className="span"><img src={ourstory} alt="portfolio" className='nav-img'/>
					<Link to="/ck/about"><p className="nav-p">Our Story</p></Link></span>
				<span className="span"><img src={flavor} alt="portfolio" className='nav-img'/>
					<Link to="/ck/users"><p className="nav-p">Our Flavours</p></Link></span>
				<span className="span"><img src={location} alt="portfolio" className='nav-img'/>
					<Link to="/ck/contact"><p className="nav-p">Our Location</p></Link></span>
			</div>
		);
	}
}

export default HomeNav;