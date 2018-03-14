import React from "react";
import {NavLink} from "react-router-dom";
import logo from "../../imgs/cookumber.png";
import "../Scss/header.scss";

const Header = ()=>{
	return (
		<div className="header-container">
			<div className="Logo-wrap">
				<div className='logo'>
					<NavLink to="/ck/home"  ><img src={logo} 
						alt="Cookumber" className="cookumber"/></NavLink>
				</div>
				<div className="navigation">
					
					<NavLink activeClassName="active" to="/" isActive=
						{(match, location)=>{return location.pathname==="/" || 
						location.pathname==="/ck/home";}}>Home</NavLink>
					<NavLink activeClassName="active" to="/ck/about"  >About us</NavLink>
					<NavLink activeClassName="active" to="/ck/services"  >Services</NavLink>
					<NavLink activeClassName="active" to="/ck/users"  >Client area</NavLink>
					<NavLink activeClassName="active" to="/ck/contact" >Contact</NavLink>
				</div>
			</div>
			
		</div>
	);

};

export default Header;