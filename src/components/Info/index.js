import React from "react";
import iphone from "../../imgs/cookumber-iphone.png";
import apple from "../../imgs/apple-logo.svg";
import android from "../../imgs/playstore.svg";
import defaultIcon from "../../imgs/picture.svg";


import PropTypes from "prop-types";

import "./index.scss";

const defaultProps = {
	icon: defaultIcon,
	label: "Button",
};

const propTypes = {
	icon: PropTypes.node,
	label: PropTypes.string,
};

const IconButton = (props)=>{
	return(
		<button className="buttoninfo">
			<img src={props.icon} alt="buttonicon" className="infoicon"/>
			<p className="buttontext">{props.label}</p>
		</button>
	);
};

const Info = props =>{
	return (
		<div className="infocontainer">
			<div className="appad">
				<img src={iphone} alt="iphone"/>
			</div>
			<div className="analytics">
				<h3 className="mainheadingInfo">Order food right from your pocket!</h3>
				<p className="subheadingInfo">
					Download our free iOS and Android App and Order
					food online and track the <br/>fastest way possible.
				</p>
				<div className="buttonsdiv">
					<div className="buttonone">
						<IconButton 
							icon={apple}
							label={"App Store"}
						/>
					</div>
					<div className="buttontwo">
						<IconButton 
							icon={android}
							label={"Playstore"}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

Info.defaultProps = defaultProps;
Info.propTypes = propTypes;

export default Info;