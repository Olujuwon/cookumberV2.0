import React, {Fragment} from "react";
import {Switch, Route, Redirect} from "react-router-dom";

import Header from "../Header/index";
import Footer from "../Footer/index";
import HomePage from "../Home/index";
import AboutPage from "../About/index";
import ServicesPage from "../Services/index";
import ContactPage from "../Contact/index";
import UsersPage from "../Clients/index";

const MainLayout = ({match}) => {
	return(
		<Fragment>
			<Header/>
			<Switch>
				<Route path = {`${match.url}/about`} component={AboutPage}/>
				<Route path = {`${match.url}/services`} component={ServicesPage}/>
				<Route path ={`${match.url}/users`}component={UsersPage}/>
				<Route path = {`${match.url}/contact`} render={ContactPage}/>
				<Route path = {`${match.url}/home`} component={HomePage}/>
				<Redirect from = {match.url} to={`${match.url}/home`}/>
			</Switch>
			<Footer/>
		</Fragment>
		
	);

};


export default MainLayout;