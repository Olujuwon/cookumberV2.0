import React, { Component } from "react";
//import PropTypes from "prop-types";

import "../Scss/adminPage.scss";
import AddWeekMenu from "./AddWeekMenu";

class AdminPage extends Component {

Header = props => {
	return <h3>{`Welcome ${props.name}!`}</h3>;
}

render() {
	return (
		<div className = "adminContainer">
			<this.Header name = "Administrator"/>
			<AddWeekMenu title = "Enter Weekly menu Here" motd = "Remember to do your research before
            adding anything" />
		</div>
	);
}
}

//AdminPage.propTypes = {

//};

export default AdminPage;