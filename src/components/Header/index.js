import React from "react";
import logo from "../../imgs/cookumber.png";
import "../Scss/header.scss";

const Header = ()=>{
	return (
		<div className="header-container">
			<div className="Logo-wrap">
				<div className='logo'>
					<img src={logo} 
						alt="Cookumber" className="cookumber"/>
				</div>
			</div>
			
		</div>
	);

};

export default Header;